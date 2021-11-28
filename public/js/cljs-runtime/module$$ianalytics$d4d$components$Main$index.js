var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$emotion$styled$dist$styled_browser_cjs = shadow.js.require("module$node_modules$$emotion$styled$dist$styled_browser_cjs", {});
var styled$$module$$ianalytics$d4d$components$Main$index = module$node_modules$$emotion$styled$dist$styled_browser_cjs.default;
function Main$$module$$ianalytics$d4d$components$Main$index(props) {
  function appropriatePlot(unitGroup) {
    return module$node_modules$react$index.createElement($jscompDefaultExport$$module$$ianalytics$d4d$components$Plot$TimeSeriesPlot, {key:"main-timeseries-plot-" + unitGroup, from:state.timeSelection.from, to:state.timeSelection.to, uids:unitGroup});
  }
  const [state, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  const {mainView, timeSelection} = state;
  return (0,module$node_modules$react$index.useMemo)(() => {
    const groups = state.selectedSystemaNodes && io.ianalytics.d4d.api.systema.displayUnitGroups(state.selectedSystemaNodes);
    return module$node_modules$react$index.createElement("div", {style:{width:"100%"}}, module$node_modules$react$index.createElement($jscompDefaultExport$$module$$ianalytics$d4d$components$DateRangePicker, null), groups && groups.map(appropriatePlot));
  }, [mainView, timeSelection, state.selectedSystemaNodes]);
}
/** @const */ 
var module$$ianalytics$d4d$components$Main$index = {};
/** @const */ 
module$$ianalytics$d4d$components$Main$index.default = Main$$module$$ianalytics$d4d$components$Main$index;

$CLJS.module$$ianalytics$d4d$components$Main$index=module$$ianalytics$d4d$components$Main$index;
//# sourceMappingURL=module$$ianalytics$d4d$components$Main$index.js.map
