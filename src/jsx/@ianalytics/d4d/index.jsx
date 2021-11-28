import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Emotion from "@emotion/core";

import { HashRouter as Router, Route } from "react-router-dom";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import StateProvider, {
  useStateValue,
} from "/@ianalytics/d4d/components/StateProvider";
import ContainerGrid from "/@ianalytics/d4d/components/ContainerGrid/index";
import SystemaBrowser from "/@ianalytics/d4d/components/SystemaBrowser/index";
import Main from "/@ianalytics/d4d/components/Main/index";

import { muiTheme } from "/@ianalytics/d4d/theme";

globalStyle = Emotion.css`
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

export default function D4D(props) {
  // console.log("inside D4D")
  return (
    <StateProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={muiTheme}>
          <Emotion.Global styles={globalStyle} />
          <Router>
            <Route exact path="(/|/tree)">
              <ContainerGrid
                navBar={<div />}
                systemaBrowser={<SystemaBrowser></SystemaBrowser>}
                main={<Main></Main>}
                eventLine={<div />}
              />
            </Route>
          </Router>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </StateProvider>
  );
}
