var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$material_ui$core$esm$styles$index = shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$emotion$core$dist$core_browser_cjs = shadow.js.require("module$node_modules$$emotion$core$dist$core_browser_cjs", {});
var module$node_modules$react_router_dom$index = shadow.js.require("module$node_modules$react_router_dom$index", {});
var module$node_modules$$material_ui$pickers$dist$material_ui_pickers = shadow.js.require("module$node_modules$$material_ui$pickers$dist$material_ui_pickers", {});
var module$node_modules$$date_io$date_fns$build$index = shadow.js.require("module$node_modules$$date_io$date_fns$build$index", {});
globalStyle = module$node_modules$$emotion$core$dist$core_browser_cjs.css`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
*::-webkit-scrollbar {
  display: none;
}

:root {
  --border-size: 0.05ch;

  --bg: #bbb;
  --text-dim: #999;

  --ia-blue: rgba(13, 76, 114, 1);
  --ia-blue-opaque: rgba(13, 76, 114, 0.5);
  
  line-height: var(--phi-1);
  font-size: 14px;

  font-family: sans-serif;
}

#root {
  width: 100vw;
  height: 100vh;
}

.view-header {
  padding: 30pt 0pt;
  font-size: 40px;
font-weight: 700;
letter-spacing: 4px;
color: #ffffff;
}

.main {
  padding: 40px;
}
`;
function D4D$$module$$ianalytics$d4d$index(props) {
  return module$node_modules$react$index.createElement(StateProvider$$module$$ianalytics$d4d$components$StateProvider, null, module$node_modules$react$index.createElement(module$node_modules$$material_ui$pickers$dist$material_ui_pickers.MuiPickersUtilsProvider, {utils:module$node_modules$$date_io$date_fns$build$index}, module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$esm$styles$index.ThemeProvider, {theme:muiTheme$$module$$ianalytics$d4d$theme}, module$node_modules$react$index.createElement(module$node_modules$$emotion$core$dist$core_browser_cjs.Global, 
  {styles:globalStyle}), module$node_modules$react$index.createElement(module$node_modules$react_router_dom$index.HashRouter, null, module$node_modules$react$index.createElement(module$node_modules$react_router_dom$index.Route, {exact:true, path:"(/|/tree)"}, module$node_modules$react$index.createElement($jscompDefaultExport$$module$$ianalytics$d4d$components$ContainerGrid$index, {navBar:module$node_modules$react$index.createElement("div", null), systemaBrowser:module$node_modules$react$index.createElement(SystemaBrowser$$module$$ianalytics$d4d$components$SystemaBrowser$index, 
  null), main:module$node_modules$react$index.createElement(Main$$module$$ianalytics$d4d$components$Main$index, null), eventLine:module$node_modules$react$index.createElement("div", null)}))))));
}
/** @const */ 
var module$$ianalytics$d4d$index = {};
/** @const */ 
module$$ianalytics$d4d$index.default = D4D$$module$$ianalytics$d4d$index;

$CLJS.module$$ianalytics$d4d$index=module$$ianalytics$d4d$index;
//# sourceMappingURL=module$$ianalytics$d4d$index.js.map
