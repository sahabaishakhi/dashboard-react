var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$emotion$styled$dist$styled_browser_cjs = shadow.js.require("module$node_modules$$emotion$styled$dist$styled_browser_cjs", {});
var styled$$module$$ianalytics$d4d$components$ContainerGrid$index = module$node_modules$$emotion$styled$dist$styled_browser_cjs.default;
function ContainerGridUnstyled$$module$$ianalytics$d4d$components$ContainerGrid$index(props) {
  const [state, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  (0,module$node_modules$react$index.useEffect)(() => dispatch({type:"GET_ALL_LABELS", dispatch}), []);
  return module$node_modules$react$index.createElement("div", {className:props.className}, module$node_modules$react$index.createElement("div", {className:"nav-bar"}, props.navBar), props.systemaBrowser && module$node_modules$react$index.createElement("div", {className:"systema-browser"}, props.systemaBrowser), module$node_modules$react$index.createElement("div", {className:"main"}, props.main), props.eventLine && module$node_modules$react$index.createElement("div", {className:"event-line"}, props.eventLine));
}
var $jscompDefaultExport$$module$$ianalytics$d4d$components$ContainerGrid$index = ContainerGrid = styled$$module$$ianalytics$d4d$components$ContainerGrid$index(ContainerGridUnstyled$$module$$ianalytics$d4d$components$ContainerGrid$index)`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 5% 15% auto 20%;
  grid-template-rows: auto;
  grid-template-areas: "nav-bar systema-browser  main event-line";
  background: #171e27;

  & > * {
    overflow-y: scroll;
  }

  & > .nav-bar {
    grid-area: nav-bar;
  }

  & > .systema-browser {
    grid-area: systema-browser;
    color: white;
  }

  & > .main {
    grid-area: main;
    display: flex;
  }

  & > .event-line {
    grid-area: event-line;
    background-color: #202c39;
    box-shadow: -5px 0 12px black;
  }
`;
/** @const */ 
var module$$ianalytics$d4d$components$ContainerGrid$index = {};
/** @const */ 
module$$ianalytics$d4d$components$ContainerGrid$index.default = $jscompDefaultExport$$module$$ianalytics$d4d$components$ContainerGrid$index;

$CLJS.module$$ianalytics$d4d$components$ContainerGrid$index=module$$ianalytics$d4d$components$ContainerGrid$index;
//# sourceMappingURL=module$$ianalytics$d4d$components$ContainerGrid$index.js.map
