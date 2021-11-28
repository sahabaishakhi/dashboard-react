import React from "react";

import PropTypes from "prop-types";
import { AppBar } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import UISettings from "./UISettings";
import UserSettings from "./UserSettings";
import UnitSettings from "./UnitSettings";
import Xstyled from "@emotion/styled";
import Tabss from "../../lib/Tabs";
import Logo from "../../lib/logo/Logo";
import Filter from "../../lib/Filter";

const styled = Xstyled.default;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//const helpers = Xhelpers.default;
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
}));

const SettingsViewUnstyled = () => {
  /*const [state, dispatch] = useReducer(reducer, complexStateInitial);
  const onChangeUseReducer = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };*/

  function callbackFuncTab(option) {
    console.log("callback", option);
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="view-container">
      <div className="view-header">SETTINGS</div>
      <Paper
        className={classes.root + " .MuiPaper-elevation5"}
        style={{ backgroundColor: "#171e27" }}
      >
        <Tabs
          value={value}
          onChange={() => console.log("Tabs")}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Units" {...a11yProps(0)} />
          <Tab label="User Interface" {...a11yProps(1)} />
          <Tab label="Account" {...a11yProps(2)} />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
          style={{ minWidth: "55vw", minHeight: "40vh" }}
        >
          <UnitSettings></UnitSettings>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{ minWidth: "55vw", minHeight: "40vh" }}
        >
          <UISettings />
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          style={{ minWidth: "55vw", minHeight: "40vh" }}
        >
          <UserSettings></UserSettings>
        </TabPanel>
      </Paper>
    </div>
  );
};

export default SettingsView = styled(SettingsViewUnstyled)`
  .MuiPaper-root {
    background: #171e27 !important;
  }
`;
