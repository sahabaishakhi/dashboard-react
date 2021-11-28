import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { TreeView, TreeItem } from "@material-ui/lab";

import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";

import SystemaAPI from "goog:io.ianalytics.d4d.api.systema";

const useStyles = makeStyles({
  plotStack: {
    // background: "#171e27",
  },
});

const HighlightedTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
      borderTop: "1px solid #728ba6",
    },
  },
  group: {
    marginLeft: 4,
    paddingLeft: 8,
    // borderLeft: `1px dashed #728ba6`,
    // background: "#1d2630",
  },
}))((props) => <TreeItem {...props} />);

const DefaultTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
      borderTop: "1px solid #728ba6",
    },
  },
  group: {
    marginLeft: 4,
    paddingLeft: 8,
    borderLeft: `1px dashed #728ba63f`,
    background: "#171e27",
  },
}))((props) => <TreeItem {...props} />);

function PlotStackTreeItem({ node, children }) {
  const [state, dispatch] = useStateValue();
  classes = useStyles();

  return (
    <HighlightedTreeItem
      className={classes.plotStack}
      id={"nav_" + node.uid}
      label={node.fields.displayName}
      nodeId={node.uid}
      onClick={() => {
        dispatch({
          type: "UPDATE_MAIN_VIEW",
          payload: {
            mainType: "plotStack",
            meta: node,
          },
        });
      }}
    >
      {children}
    </HighlightedTreeItem>
  );
}

export default function SystemaTreeItem(props) {
  if (props.node.type && props.node.type.includes("plotStack")) {
    return (
      <PlotStackTreeItem id={"nav_" + props.node.uid} node={props.node}>
        {props.children}
      </PlotStackTreeItem>
    );
  } else if (props.node.type && props.node.type.includes("measured")) {
    return (
      <PlotStackTreeItem id={"nav_" + props.node.uid} node={props.node}>
        {props.children}
      </PlotStackTreeItem>
    );
  } else {
    return (
      <DefaultTreeItem
        id={"nav_" + props.node.uid}
        label={props.node.displayName}
        nodeId={props.node.uid}
      >
        {props.children}
      </DefaultTreeItem>
    );
  }
}
