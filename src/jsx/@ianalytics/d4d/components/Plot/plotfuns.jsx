import React, { useState, useMemo, useEffect } from "react";
import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";
import { parseISO, isValid, differenceInSeconds } from "date-fns";

export const traceColors = [
  "#78A21A",
  "#eab83a",
  "#25A9DB",
  "#D54073",
  "#5C6CE5",
  "#B76300",
  "#ce5150",
  "#2878c1",
  "#ef843c",
];
export const allPlotlyButtons = [
  "pan2d",
  "zoom2d",
  "zoomIn2d",
  "zoomOut2d",
  "autoScale2d",
  "resetScale2d",
  "hoverClosestCartesian",
  "hoverCompareCartesian",
  "toggleHover",
  "resetViews",
  "toImage",
  "sendDataToCloud",
  "toggleSpikelines",
  "resetViewMapbox",
];

// this is just the Plotly.icons.pencil but I can't be bothered to fix the imports at this time.
export const toggleEventCreationIcon = {
  width: 1792,
  height: 1792,
  path:
    "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z",
  transform: "matrix(1 0 0 1 0 1)",
};

export function widthOfMeanWindowInSeconds(from, to, nPoints = 512) {
  let seconds = Math.abs(differenceInSeconds(to, from));

  return seconds >= nPoints ? Math.floor(seconds / nPoints) : 1;
}

export function makeAnnotations(uids, state) {
  const eventColors = {
    warning: "#f5a030",
    high: "#f7a630",
    info: "#00deee",
    failure: "#ff0000",
  };

  let opacity = 0.25;

  const related_events = [];

  let eventAnnotations = [],
    eventShapes = [];

  let startWasTruncated = false;

  for (const uid of uids) {
    for (const e of state.visibleEvents) {
      if (
        ((e.node && e.node.indexOf(uid) !== -1) ||
          state.pinnedEvents.indexOf(e._id) !== -1) &&
        related_events.indexOf(e) === -1
      ) {
        related_events.push(e);
      }
    }
  }

  for (const e of related_events) {
    let eventStart = e.start && parseISO(e.start),
      eventEnd = e.end && parseISO(e.end),
      eventColor = eventColors[e.severity],
      selectedFrom = state.timeSelection.from,
      selectedTo = state.timeSelection.to;

    if (!isValid(eventEnd)) {
      eventEnd = selectedTo;
      opacity = 0.1;
    }

    if (eventEnd < selectedFrom || selectedTo < eventStart) {
      continue;
    }

    if (eventStart < selectedFrom) {
      eventStart = selectedFrom;
      startWasTruncated = true;
    }
    if (selectedTo < eventEnd) {
      eventEnd = selectedTo;
    }

    eventAnnotations.push({
      x: eventStart,
      y: 1.01 + startWasTruncated * 0.25,
      xref: "x",
      yref: "paper",
      textangle: startWasTruncated ? 0 : -45,
      showarrow: !startWasTruncated,
      text: e.description,
    });

    eventShapes.push({
      xref: "x",
      yref: "paper",
      x0: eventStart,
      x1: eventEnd,
      y0: 0,
      y1: 1,
      type: "rect",
      line: { width: 0 },
      fillcolor: eventColor,
      opacity: opacity,
    });

    eventShapes.push({
      xref: "x",
      yref: "paper",
      x0: eventStart,
      x1: eventEnd,
      y0: 1.001,
      y1: 1.001,
      type: "line",
      line: { width: 1, color: eventColor },
    });
  }

  return [eventAnnotations, eventShapes];
}

function sum(a, b) {
  return a + b;
}

function mean(values) {
  return values.reduce(sum) / values.length;
}

function mean_and_sdev(values) {
  const m = mean(values);
  const standard_deviation = Math.sqrt(
    values.map((x) => (x - m) ** 2).reduce(sum) / values.length
  );

  return [m, standard_deviation];
}

export function autorange(plotData, compressAxis = false) {
  // set the vertical axis to include 2% padding above and
  // below the supremum and infimum of the data shown.
  //
  // when compressAxis is true, show at most 3 standard
  // deviations above and below the mean, so outliers don't
  // throw the whole plot off.

  if (!plotData) return [];

  let range = [Infinity, -Infinity];

  for (datum in plotData) {
    if (
      plotData[datum] &&
      plotData[datum].hasOwnProperty("y") &&
      plotData[datum].y !== undefined &&
      Array.isArray(plotData[datum].y)
    ) {
      const values = plotData[datum].y.filter((v) => v !== null && !isNaN(v));
      const [m, s] = mean_and_sdev(values);

      if (compressAxis) {
        range = [
          Math.min(
            range[0],
            Math.max(
              Math.min(...values) * 0.98,
              Math.min(m - Math.abs(3 * s), 0.98 * m)
            )
          ),
          Math.max(
            range[1],
            Math.min(
              Math.max(...values) * 1.02,
              Math.max(m + Math.abs(3 * s), 1.02 * m)
            )
          ),
        ];
      } else {
        range = [
          Math.min(range[0], Math.min(...values) * 0.98),
          Math.max(range[1], Math.max(...values) * 1.02),
        ];
      }
    }
  }

  return range;
}
