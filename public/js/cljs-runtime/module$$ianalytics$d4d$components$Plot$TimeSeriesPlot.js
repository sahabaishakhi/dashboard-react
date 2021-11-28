var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$date_fns$index = shadow.js.require("module$node_modules$date_fns$index", {});
var module$node_modules$date_fns_tz$index = shadow.js.require("module$node_modules$date_fns_tz$index", {});
var module$node_modules$react_plotly_DOT_js$react_plotly = shadow.js.require("module$node_modules$react_plotly_DOT_js$react_plotly", {});
var module$node_modules$$emotion$styled$dist$styled_browser_cjs = shadow.js.require("module$node_modules$$emotion$styled$dist$styled_browser_cjs", {});
var module$node_modules$$material_ui$core$index = shadow.js.require("module$node_modules$$material_ui$core$index", {});
var Plot$$module$$ianalytics$d4d$components$Plot$TimeSeriesPlot = module$node_modules$react_plotly_DOT_js$react_plotly.default;
var $jscompDefaultExport$$module$$ianalytics$d4d$components$Plot$TimeSeriesPlot = TimeSeriesPlot = function(props) {
  function updateCustomRange(newRange) {
    function correctPlotlyTimestamp(plotly_stamp) {
      return plotly_stamp ? plotly_stamp.slice(0, 10) + "T" + plotly_stamp.slice(11) : "";
    }
    dispatch({type:"PRESELECT_TIME_RANGE", payload:newRange.map(correctPlotlyTimestamp).map(module$node_modules$date_fns$index.parseISO)});
  }
  function selectTimeFromPlot() {
    dispatch({type:"SWITCH_TO_PRESELECTED_TIME_RANGE"});
  }
  function setData(jsonData, uid) {
    if (!jsonData || !jsonData.hasOwnProperty("time")) {
      return;
    }
    const dataCount = jsonData.time.length;
    const timeZone = "Europe/Berlin";
    const localizedTime = jsonData.time.map(ts => (0,module$node_modules$date_fns_tz$index.utcToZonedTime)((0,module$node_modules$date_fns$index.parseISO)(ts), timeZone));
    delete jsonData.time;
    const displayUnit = io.ianalytics.d4d.api.systema.displayUnit(uid);
    const transformedValues = Object.values(jsonData).map(values => io.ianalytics.d4d.api.units.transform(values, displayUnit));
    let newTraces = {};
    for (let i = 0; i < transformedValues.length; ++i) {
      newTraces[uid + i] = {x:localizedTime, y:transformedValues[i], type:"scatter", fill:"tozeroy", name:`${io.ianalytics.d4d.api.systema.plotTitle(uid)} ${i > 0 ? i : ""}`, fillcolor:traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns[(props.uids.indexOf(uid) + i) % traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns.length] + "22", line:{color:traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns[(props.uids.indexOf(uid) + i) % traceColors$$module$$ianalytics$d4d$components$Plot$plotfuns.length]}};
    }
    setPlotData(function(data) {
      return Object.assign({}, data, newTraces);
    });
    console.debug("read: ", Object.keys(jsonData).length - 1, " x ", jsonData.time.length, "data points.");
  }
  function fetchData() {
    setFetching(true);
    setPlotData({});
    for (const uid of props.uids) {
      console.debug(`fetching new data for ${uid} in [${props.from}
        , ${props.to}].`);
      io.ianalytics.d4d.api.trend.getTrend(uid, props.from, props.to, widthOfMeanWindowInSeconds$$module$$ianalytics$d4d$components$Plot$plotfuns(props.from, props.to), function(data) {
        setData(data, uid);
      });
    }
    setFetching(false);
    return function() {
      setPlotData({});
    };
  }
  function toggleEventCreation(from, to) {
    dispatch({type:"OPEN_EVENT_CREATOR", payload:{from:new Date(from), to:new Date(to), uids:props.uids}, dispatch});
  }
  const [plotData, setPlotData] = (0,module$node_modules$react$index.useState)({});
  const [fetching, setFetching] = (0,module$node_modules$react$index.useState)(false);
  const [annotations, setAnnotations] = (0,module$node_modules$react$index.useState)([]);
  const [shapes, setShapes] = (0,module$node_modules$react$index.useState)([]);
  const [s, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  (0,module$node_modules$react$index.useEffect)(() => {
    let [eventAnnotations, eventShapes] = makeAnnotations$$module$$ianalytics$d4d$components$Plot$plotfuns(props.uids, s);
    setAnnotations(eventAnnotations);
    setShapes(eventShapes);
  }, [props.uids, props.from, props.to, s.events, s.visibleEvents, s.pinnedEvents]);
  (0,module$node_modules$react$index.useEffect)(fetchData, [props.uids, props.from, props.to]);
  return (0,module$node_modules$react$index.useMemo)(() => fetching ? module$node_modules$react$index.createElement("div", {style:{width:"60vw", height:"300px"}}, module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.CircularProgress, null)) : module$node_modules$react$index.createElement(module$node_modules$react$index.Fragment, null, module$node_modules$react$index.createElement($jscompDefaultExport$$module$$ianalytics$d4d$components$KRIndicator, {data:Object.values(plotData)}), 
  module$node_modules$react$index.createElement(Plot$$module$$ianalytics$d4d$components$Plot$TimeSeriesPlot, {style:{width:"60vw", height:Object.keys(plotData).length <= 1 ? "300px" : "600px"}, data:Object.values(plotData), onSelected:e => e && e.range && toggleEventCreation(e.range.x[0], e.range.x[1]), onUpdate:d => updateCustomRange(d.layout.xaxis.range), config:{modeBarButtonsToRemove:allPlotlyButtons$$module$$ianalytics$d4d$components$Plot$plotfuns, modeBarButtonsToAdd:[{name:s.plotDragMode === 
  "zoom" ? "Create Event" : "Zoom", icon:toggleEventCreationIcon$$module$$ianalytics$d4d$components$Plot$plotfuns, direction:"up", click:() => dispatch({type:"TOGGLE_PLOT_EVENT_CREATION_MODE"})}, {name:"Use This Time Frame", direction:"up", click:selectTimeFromPlot}]}, layout:Object.assign({}, plotlyDefaults$$module$$ianalytics$d4d$theme, {autosize:true, title:Object.assign({}, plotlyDefaults$$module$$ianalytics$d4d$theme.title_defaults, {text:`<b>${io.ianalytics.d4d.api.systema.plotTitle(props.uids[0])}</b>`}), 
  yaxis:Object.assign({}, plotlyDefaults$$module$$ianalytics$d4d$theme.yaxis, {title:`[${io.ianalytics.d4d.api.systema.displayUnit(props.uids[0])}]`}, plotData && plotData !== {} ? {range:autorange$$module$$ianalytics$d4d$components$Plot$plotfuns(plotData)} : {}), dragmode:s.plotDragMode, legend:{orientation:"h"}, selectdirection:"h", annotations:plotData && annotations, shapes:plotData && shapes})})), [plotData, annotations, shapes, fetching, s.plotDragMode]);
};
/** @const */ 
var module$$ianalytics$d4d$components$Plot$TimeSeriesPlot = {};
/** @const */ 
module$$ianalytics$d4d$components$Plot$TimeSeriesPlot.default = $jscompDefaultExport$$module$$ianalytics$d4d$components$Plot$TimeSeriesPlot;

$CLJS.module$$ianalytics$d4d$components$Plot$TimeSeriesPlot=module$$ianalytics$d4d$components$Plot$TimeSeriesPlot;
//# sourceMappingURL=module$$ianalytics$d4d$components$Plot$TimeSeriesPlot.js.map
