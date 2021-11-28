var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$material_ui$core$esm$styles$index = shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$$material_ui$lab$index = shadow.js.require("module$node_modules$$material_ui$lab$index", {});
var useStyles$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem = (0,module$node_modules$$material_ui$core$esm$styles$index.makeStyles)({plotStack:{}});
var HighlightedTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem = (0,module$node_modules$$material_ui$core$esm$styles$index.withStyles)(theme => ({iconContainer:{"\x26 .close":{opacity:0.3, borderTop:"1px solid #728ba6"}}, group:{marginLeft:4, paddingLeft:8}}))(props => module$node_modules$react$index.createElement(module$node_modules$$material_ui$lab$index.TreeItem, props));
var DefaultTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem = (0,module$node_modules$$material_ui$core$esm$styles$index.withStyles)(theme => ({iconContainer:{"\x26 .close":{opacity:0.3, borderTop:"1px solid #728ba6"}}, group:{marginLeft:4, paddingLeft:8, borderLeft:`1px dashed #728ba63f`, background:"#171e27"}}))(props => module$node_modules$react$index.createElement(module$node_modules$$material_ui$lab$index.TreeItem, props));
function PlotStackTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem($jscomp$destructuring$var1) {
  var {node, children} = $jscomp$destructuring$var1;
  const [state, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  classes = useStyles$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem();
  return module$node_modules$react$index.createElement(HighlightedTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem, {className:classes.plotStack, id:"nav_" + node.uid, label:node.fields.displayName, nodeId:node.uid, onClick:() => {
    dispatch({type:"UPDATE_MAIN_VIEW", payload:{mainType:"plotStack", meta:node}});
  }}, children);
}
function SystemaTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem(props) {
  if (props.node.type && props.node.type.includes("plotStack")) {
    return module$node_modules$react$index.createElement(PlotStackTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem, {id:"nav_" + props.node.uid, node:props.node}, props.children);
  } else {
    if (props.node.type && props.node.type.includes("measured")) {
      return module$node_modules$react$index.createElement(PlotStackTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem, {id:"nav_" + props.node.uid, node:props.node}, props.children);
    } else {
      return module$node_modules$react$index.createElement(DefaultTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem, {id:"nav_" + props.node.uid, label:props.node.displayName, nodeId:props.node.uid}, props.children);
    }
  }
}
/** @const */ 
var module$$ianalytics$d4d$components$SystemaBrowser$TreeItem = {};
/** @const */ 
module$$ianalytics$d4d$components$SystemaBrowser$TreeItem.default = SystemaTreeItem$$module$$ianalytics$d4d$components$SystemaBrowser$TreeItem;

$CLJS.module$$ianalytics$d4d$components$SystemaBrowser$TreeItem=module$$ianalytics$d4d$components$SystemaBrowser$TreeItem;
//# sourceMappingURL=module$$ianalytics$d4d$components$SystemaBrowser$TreeItem.js.map
