import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress, Button } from "@material-ui/core";
import { TreeView } from "@material-ui/lab";
import SystemaTreeItem from "/@ianalytics/d4d/components/SystemaBrowser/TreeItem";

import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";

import SystemaAPI from "goog:io.ianalytics.d4d.api.systema";

const useStyles = makeStyles({
  root: {
    height: "100%",
    flexGrow: 1,
    maxWidth: "35ch",
  },
  treeView: {
    overflowY: "scroll",
    fontSize: "1rem",
  },
});

export default function SystemaBrowser(props) {
  const [state, dispatch] = useStateValue();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: "GET_SYSTEMA_DESCRIPTION", dispatch: dispatch });
  }, []);

  function expandNodes(tree, level = 3) {
    return [tree.uid].concat(
      tree.children && level > 0
        ? tree.children.map((nodes) => expandNodes(nodes, level - 1)).flat()
        : []
    );
  }

  function makeTree(node) {
    return (
      <SystemaTreeItem key={node.uid} node={node}>
        {node.children ? node.children.map((child) => makeTree(child)) : null}
      </SystemaTreeItem>
    );
  }

  function Browser(props) {
    return (
      <div className={classes.root}>
        <Button onClick={() => dispatch({ type: "EXPAND_ALL_SYSTEMA_NODES" })}>
          Expand All
        </Button>
        <Button
          onClick={() => dispatch({ type: "COLLAPSE_ALL_SYSTEMA_NODES" })}
        >
          Collapse All
        </Button>
        <TreeView
          multiSelect
          className={classes.treeView}
          defaultCollapseIcon="-"
          defaultExpandIcon="+"
          expanded={
            state.expandedSystemaNodes ||
            (props.systema ? expandNodes(props.systema, 1) : [])
          }
          selected={state.selectedSystemaNodes}
          onNodeToggle={(event, nodeIds) =>
            dispatch({
              type: "UPDATE_EXPANDED_SYSTEMA_NODES",
              payload: nodeIds,
            })
          }
          onNodeSelect={(event, nodeIds) =>
            dispatch({
              type: "UPDATE_SELECTED_SYSTEMA_NODES",
              payload: nodeIds,
            })
          }
        >
          {props.systema ? (
            makeTree(props.systema)
          ) : (
            <CircularProgress></CircularProgress>
          )}
        </TreeView>
      </div>
    );
  }

  const systema = state.systema;

  return useMemo(() => <Browser systema={systema}></Browser>, [
    systema,
    state.selectedSystemaNodes,
    state.expandedSystemaNodes,
  ]);
}
