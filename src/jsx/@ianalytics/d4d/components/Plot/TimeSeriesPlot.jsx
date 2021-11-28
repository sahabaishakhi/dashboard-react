import React, { useState, useMemo, useEffect } from "react";

import KRIndicator from "/@ianalytics/d4d/components/KRIndicator";

import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";

import { parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

import XPlot from "react-plotly.js";
import styled from "@emotion/styled";
import { plotlyDefaults } from "/@ianalytics/d4d/theme";

import {
  makeAnnotations,
  traceColors,
  widthOfMeanWindowInSeconds,
  allPlotlyButtons,
  toggleEventCreationIcon,
  autorange,
} from "./plotfuns";

const Plot = XPlot.default;

import SystemaAPI from "goog:io.ianalytics.d4d.api.systema";
import TrendAPI from "goog:io.ianalytics.d4d.api.trend";
import UnitsAPI from "goog:io.ianalytics.d4d.api.units";

import { CircularProgress } from "@material-ui/core";

export default TimeSeriesPlot = function (props) {
  const [plotData, setPlotData] = useState({});

  const [fetching, setFetching] = useState(false);

  const [annotations, setAnnotations] = useState([]);
  const [shapes, setShapes] = useState([]);

  const [s, dispatch] = useStateValue();

  useEffect(() => {
    let [eventAnnotations, eventShapes] = makeAnnotations(props.uids, s);

    setAnnotations(eventAnnotations);
    setShapes(eventShapes);
  }, [
    props.uids,
    props.from,
    props.to,
    s.events,
    s.visibleEvents,
    s.pinnedEvents,
  ]);

  function updateCustomRange(newRange) {
    function correctPlotlyTimestamp(plotly_stamp) {
      return plotly_stamp
        ? plotly_stamp.slice(0, 10) + "T" + plotly_stamp.slice(11)
        : "";
    }

    dispatch({
      type: "PRESELECT_TIME_RANGE",
      payload: newRange.map(correctPlotlyTimestamp).map(parseISO),
    });
  }

  function selectTimeFromPlot() {
    dispatch({ type: "SWITCH_TO_PRESELECTED_TIME_RANGE" });
  }

  function setData(jsonData, uid) {
    if (!jsonData || !jsonData.hasOwnProperty("time")) {
      return;
    }

    const dataCount = jsonData.time.length;

    // localize time
    const timeZone = "Europe/Berlin"; /* TODO: make timezone configurable.  */
    const localizedTime = jsonData.time.map((ts) =>
      utcToZonedTime(parseISO(ts), timeZone)
    );

    delete jsonData.time;

    // transform units
    const displayUnit = SystemaAPI.displayUnit(uid);
    const transformedValues = Object.values(jsonData).map((values) =>
      UnitsAPI.transform(values, displayUnit)
    );

    let newTraces = {};
    for (let i = 0; i < transformedValues.length; ++i) {
      newTraces[uid + i] = {
        x: localizedTime,
        y: transformedValues[i],
        type: "scatter",
        fill: "tozeroy",
        name: `${SystemaAPI.plotTitle(uid)} ${i > 0 ? i : ""}`,
        fillcolor:
          traceColors[(props.uids.indexOf(uid) + i) % traceColors.length] +
          "22",
        line: {
          color:
            traceColors[(props.uids.indexOf(uid) + i) % traceColors.length],
        },
      };
    }

    setPlotData(function (data) {
      return { ...data, ...newTraces };
    });

    console.debug(
      "read: ",
      Object.keys(jsonData).length - 1, // 'time' + one numerical entry for each timeseries.
      " x ",
      jsonData.time.length,
      "data points."
    );
  }

  function fetchData() {
    setFetching(true);
    setPlotData({});

    for (const uid of props.uids) {
      console.debug(
        `fetching new data for ${uid} in [${props.from}
        , ${props.to}].`
      );

      TrendAPI.getTrend(
        uid,
        props.from,
        props.to,
        widthOfMeanWindowInSeconds(props.from, props.to),
        function (data) {
          setData(data, uid);
        }
      );
    }

    setFetching(false);

    return function () {
      setPlotData({});
    };
  }

  useEffect(fetchData, [props.uids, props.from, props.to]);

  function toggleEventCreation(from, to) {
    dispatch({
      type: "OPEN_EVENT_CREATOR",
      payload: {
        from: new Date(from),
        to: new Date(to),
        uids: props.uids,
      },

      dispatch: dispatch,
    });
  }

  return useMemo(() => {
    return fetching ? (
      <div style={{ width: "60vw", height: "300px" }}>
        <CircularProgress />
      </div>
    ) : (
      <>
        <KRIndicator data={Object.values(plotData)} />
        <Plot
          style={{
            width: "60vw",
            height: Object.keys(plotData).length <= 1 ? "300px" : "600px",
          }}
          data={Object.values(plotData)}
          onSelected={(e) =>
            e && e.range && toggleEventCreation(e.range.x[0], e.range.x[1])
          }
          onUpdate={(d) => updateCustomRange(d.layout.xaxis.range)}
          config={{
            modeBarButtonsToRemove: allPlotlyButtons,
            modeBarButtonsToAdd: [
              {
                name: s.plotDragMode === "zoom" ? "Create Event" : "Zoom",
                icon: toggleEventCreationIcon,
                direction: "up",
                click: () =>
                  dispatch({ type: "TOGGLE_PLOT_EVENT_CREATION_MODE" }),
              },
              {
                name: "Use This Time Frame",
                // icon: pick one,
                direction: "up",
                click: selectTimeFromPlot,
              },
            ],
          }}
          layout={{
            ...plotlyDefaults,
            autosize: true,
            title: {
              ...plotlyDefaults.title_defaults,
              text: `<b>${SystemaAPI.plotTitle(props.uids[0])}</b>`,
            },
            yaxis: {
              ...plotlyDefaults.yaxis,
              title: `[${SystemaAPI.displayUnit(props.uids[0])}]`,
              ...(plotData && plotData !== {}
                ? { range: autorange(plotData) }
                : {}),
            },
            dragmode: s.plotDragMode,
            legend: { orientation: "h" },
            selectdirection: "h",
            annotations: plotData && annotations,
            shapes: plotData && shapes,
          }}
        />
      </>
    );
  }, [plotData, annotations, shapes, fetching, s.plotDragMode]);
};
