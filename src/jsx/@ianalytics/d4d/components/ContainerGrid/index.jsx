import React, { useEffect, useMemo } from "react";
import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";

import SystemaBrowser from "/@ianalytics/d4d/components/SystemaBrowser/index";

import Xstyled from "@emotion/styled";

const styled = Xstyled.default;

function ContainerGridUnstyled(props) {
  const [state, dispatch] = useStateValue();

  useEffect(() => dispatch({ type: "GET_ALL_LABELS", dispatch: dispatch }), []);

  return (
    <div className={props.className}>
      <div className="nav-bar">{props.navBar}</div>
      {props.systemaBrowser && (
        <div className="systema-browser">{props.systemaBrowser}</div>
      )}
      <div className="main">{props.main}</div>
      {props.eventLine && <div className="event-line">{props.eventLine}</div>}
    </div>
  );
}

export default ContainerGrid = styled(ContainerGridUnstyled)`
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
