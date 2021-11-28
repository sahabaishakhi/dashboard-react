var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$material_ui$core$esm$styles$index = shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$material_ui$core$index = shadow.js.require("module$node_modules$$material_ui$core$index", {});
var module$node_modules$$material_ui$lab$index = shadow.js.require("module$node_modules$$material_ui$lab$index", {});
var useStyles$$module$$ianalytics$d4d$components$SystemaBrowser$index = (0,module$node_modules$$material_ui$core$esm$styles$index.makeStyles)({root:{height:"100%", flexGrow:1, maxWidth:"35ch"}, treeView:{overflowY:"scroll", fontSize:"1rem"}});
function SystemaBrowser$$module$$ianalytics$d4d$components$SystemaBrowser$index(props$jscomp$0) {
  function expandNodes(tree, level) {
    level = level === void 0 ? 3 : level;
    return [tree.uid].concat(tree.children && level > 0 ? tree.children.map(nodes => expandNodes(nodes, level - 1)).flat() : []);
  }
  function makeTree(node) {
    return module$node_modules$react$index.createElement(SystemaTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem, {key:node.uid, node}, node.children ? node.children.map(child => makeTree(child)) : null);
  }
  function Browser(props) {
    return module$node_modules$react$index.createElement("div", {className:classes.root}, module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.Button, {onClick:() => dispatch({type:"EXPAND_ALL_SYSTEMA_NODES"})}, "Expand All"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.Button, {onClick:() => dispatch({type:"COLLAPSE_ALL_SYSTEMA_NODES"})}, "Collapse All"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$lab$index.TreeView, 
    {multiSelect:true, className:classes.treeView, defaultCollapseIcon:"-", defaultExpandIcon:"+", expanded:state.expandedSystemaNodes || (props.systema ? expandNodes(props.systema, 1) : []), selected:state.selectedSystemaNodes, onNodeToggle:(event, nodeIds) => dispatch({type:"UPDATE_EXPANDED_SYSTEMA_NODES", payload:nodeIds}), onNodeSelect:(event, nodeIds) => dispatch({type:"UPDATE_SELECTED_SYSTEMA_NODES", payload:nodeIds})}, props.systema ? makeTree(props.systema) : module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.CircularProgress, 
    null)));
  }
  const [state, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  const classes = useStyles$$module$$ianalytics$d4d$components$SystemaBrowser$index();
  (0,module$node_modules$react$index.useEffect)(() => {
    dispatch({type:"GET_SYSTEMA_DESCRIPTION", dispatch});
  }, []);
  const systema = state.systema;
  return (0,module$node_modules$react$index.useMemo)(() => module$node_modules$react$index.createElement(Browser, {systema}), [systema, state.selectedSystemaNodes, state.expandedSystemaNodes]);
}
/** @const */ 
var module$$ianalytics$d4d$components$SystemaBrowser$index = {};
/** @const */ 
module$$ianalytics$d4d$components$SystemaBrowser$index.default = SystemaBrowser$$module$$ianalytics$d4d$components$SystemaBrowser$index;

$CLJS.module$$ianalytics$d4d$components$SystemaBrowser$index=module$$ianalytics$d4d$components$SystemaBrowser$index;
//# sourceMappingURL=module$$ianalytics$d4d$components$SystemaBrowser$index.js.map
