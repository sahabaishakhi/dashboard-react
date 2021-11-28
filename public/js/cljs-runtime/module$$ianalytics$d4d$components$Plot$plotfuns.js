var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$date_fns$index = shadow.js.require("module$node_modules$date_fns$index", {});
var traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns = ["#78A21A", "#eab83a", "#25A9DB", "#D54073", "#5C6CE5", "#B76300", "#ce5150", "#2878c1", "#ef843c"];
var allPlotlyButtons$$module$$ianalytics$d4d$components$Plot$plotfuns = ["pan2d", "zoom2d", "zoomIn2d", "zoomOut2d", "autoScale2d", "resetScale2d", "hoverClosestCartesian", "hoverCompareCartesian", "toggleHover", "resetViews", "toImage", "sendDataToCloud", "toggleSpikelines", "resetViewMapbox"];
var toggleEventCreationIcon$$module$$ianalytics$d4d$components$Plot$plotfuns = {width:1792, height:1792, path:"M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z", transform:"matrix(1 0 0 1 0 1)"};
function widthOfMeanWindowInSeconds$$module$$ianalytics$d4d$components$Plot$plotfuns(from, to, nPoints) {
  nPoints = nPoints === void 0 ? 512 : nPoints;
  let seconds = Math.abs((0,module$node_modules$date_fns$index.differenceInSeconds)(to, from));
  return seconds >= nPoints ? Math.floor(seconds / nPoints) : 1;
}
function makeAnnotations$$module$$ianalytics$d4d$components$Plot$plotfuns(uids, state) {
  const eventColors = {warning:"#f5a030", high:"#f7a630", info:"#00deee", failure:"#ff0000"};
  let opacity = 0.25;
  const related_events = [];
  let eventAnnotations = [];
  let eventShapes = [];
  let startWasTruncated = false;
  for (const uid of uids) {
    for (const e of state.visibleEvents) {
      if ((e.node && e.node.indexOf(uid) !== -1 || state.pinnedEvents.indexOf(e._id) !== -1) && related_events.indexOf(e) === -1) {
        related_events.push(e);
      }
    }
  }
  for (const e of related_events) {
    let eventStart = e.start && (0,module$node_modules$date_fns$index.parseISO)(e.start);
    let eventEnd = e.end && (0,module$node_modules$date_fns$index.parseISO)(e.end);
    let eventColor = eventColors[e.severity];
    let selectedFrom = state.timeSelection.from;
    let selectedTo = state.timeSelection.to;
    if (!(0,module$node_modules$date_fns$index.isValid)(eventEnd)) {
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
    eventAnnotations.push({x:eventStart, y:1.01 + startWasTruncated * 0.25, xref:"x", yref:"paper", textangle:startWasTruncated ? 0 : -45, showarrow:!startWasTruncated, text:e.description});
    eventShapes.push({xref:"x", yref:"paper", x0:eventStart, x1:eventEnd, y0:0, y1:1, type:"rect", line:{width:0}, fillcolor:eventColor, opacity});
    eventShapes.push({xref:"x", yref:"paper", x0:eventStart, x1:eventEnd, y0:1.001, y1:1.001, type:"line", line:{width:1, color:eventColor}});
  }
  return [eventAnnotations, eventShapes];
}
function sum$$module$$ianalytics$d4d$components$Plot$plotfuns(a, b) {
  return a + b;
}
function mean$$module$$ianalytics$d4d$components$Plot$plotfuns(values) {
  return values.reduce(sum$$module$$ianalytics$d4d$components$Plot$plotfuns) / values.length;
}
function mean_and_sdev$$module$$ianalytics$d4d$components$Plot$plotfuns(values) {
  const m = mean$$module$$ianalytics$d4d$components$Plot$plotfuns(values);
  const standard_deviation = Math.sqrt(values.map(x => Math.pow(x - m, 2)).reduce(sum$$module$$ianalytics$d4d$components$Plot$plotfuns) / values.length);
  return [m, standard_deviation];
}
function autorange$$module$$ianalytics$d4d$components$Plot$plotfuns(plotData, compressAxis) {
  compressAxis = compressAxis === void 0 ? false : compressAxis;
  if (!plotData) {
    return [];
  }
  let range = [Infinity, -Infinity];
  for (datum in plotData) {
    if (plotData[datum] && plotData[datum].hasOwnProperty("y") && plotData[datum].y !== undefined && Array.isArray(plotData[datum].y)) {
      const values = plotData[datum].y.filter(v => v !== null && !isNaN(v));
      const [m, s] = mean_and_sdev$$module$$ianalytics$d4d$components$Plot$plotfuns(values);
      if (compressAxis) {
        range = [Math.min(range[0], Math.max(Math.min(...values) * 0.98, Math.min(m - Math.abs(3 * s), 0.98 * m))), Math.max(range[1], Math.min(Math.max(...values) * 1.02, Math.max(m + Math.abs(3 * s), 1.02 * m)))];
      } else {
        range = [Math.min(range[0], Math.min(...values) * 0.98), Math.max(range[1], Math.max(...values) * 1.02)];
      }
    }
  }
  return range;
}
/** @const */ 
var module$$ianalytics$d4d$components$Plot$plotfuns = {};
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.allPlotlyButtons = allPlotlyButtons$$module$$ianalytics$d4d$components$Plot$plotfuns;
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.autorange = autorange$$module$$ianalytics$d4d$components$Plot$plotfuns;
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.makeAnnotations = makeAnnotations$$module$$ianalytics$d4d$components$Plot$plotfuns;
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.toggleEventCreationIcon = toggleEventCreationIcon$$module$$ianalytics$d4d$components$Plot$plotfuns;
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.traceColors = traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns;
/** @const */ 
module$$ianalytics$d4d$components$Plot$plotfuns.widthOfMeanWindowInSeconds = widthOfMeanWindowInSeconds$$module$$ianalytics$d4d$components$Plot$plotfuns;

$CLJS.module$$ianalytics$d4d$components$Plot$plotfuns=module$$ianalytics$d4d$components$Plot$plotfuns;
//# sourceMappingURL=module$$ianalytics$d4d$components$Plot$plotfuns.js.map
