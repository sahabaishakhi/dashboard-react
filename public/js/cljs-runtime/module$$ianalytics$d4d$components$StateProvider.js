var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var StateContext$$module$$ianalytics$d4d$components$StateProvider = (0,module$node_modules$react$index.createContext)();
var useStateValue$$module$$ianalytics$d4d$components$StateProvider = () => (0,module$node_modules$react$index.useContext)(StateContext$$module$$ianalytics$d4d$components$StateProvider);
function StateProvider$$module$$ianalytics$d4d$components$StateProvider($jscomp$destructuring$var0) {
  var {children} = $jscomp$destructuring$var0;
  return module$node_modules$react$index.createElement(StateContext$$module$$ianalytics$d4d$components$StateProvider.Provider, {value:(0,module$node_modules$react$index.useReducer)(reducer$$module$$ianalytics$d4d$actions$index, $jscompDefaultExport$$module$$ianalytics$d4d$defaultState)}, children);
}
/** @const */ 
var module$$ianalytics$d4d$components$StateProvider = {};
/** @const */ 
module$$ianalytics$d4d$components$StateProvider.default = StateProvider$$module$$ianalytics$d4d$components$StateProvider;
/** @const */ 
module$$ianalytics$d4d$components$StateProvider.useStateValue = useStateValue$$module$$ianalytics$d4d$components$StateProvider;

$CLJS.module$$ianalytics$d4d$components$StateProvider=module$$ianalytics$d4d$components$StateProvider;
//# sourceMappingURL=module$$ianalytics$d4d$components$StateProvider.js.map
