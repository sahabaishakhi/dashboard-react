function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`
  }, other), value === index && /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Typography, null, children)));
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}; //const helpers = Xhelpers.default;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  }
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

  return /*#__PURE__*/React.createElement("div", {
    className: "view-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "view-header"
  }, "SETTINGS"), /*#__PURE__*/React.createElement(Paper, {
    className: classes.root + " .MuiPaper-elevation5",
    style: {
      backgroundColor: "#171e27"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: () => console.log("Tabs"),
    "aria-label": "simple tabs example",
    indicatorColor: "primary",
    textColor: "primary"
  }, /*#__PURE__*/React.createElement(Tab, _extends({
    label: "Units"
  }, a11yProps(0))), /*#__PURE__*/React.createElement(Tab, _extends({
    label: "User Interface"
  }, a11yProps(1))), /*#__PURE__*/React.createElement(Tab, _extends({
    label: "Account"
  }, a11yProps(2)))), /*#__PURE__*/React.createElement(TabPanel, {
    value: value,
    index: 0,
    style: {
      minWidth: "55vw",
      minHeight: "40vh"
    }
  }, /*#__PURE__*/React.createElement(UnitSettings, null)), /*#__PURE__*/React.createElement(TabPanel, {
    value: value,
    index: 1,
    style: {
      minWidth: "55vw",
      minHeight: "40vh"
    }
  }, /*#__PURE__*/React.createElement(UISettings, null)), /*#__PURE__*/React.createElement(TabPanel, {
    value: value,
    index: 2,
    style: {
      minWidth: "55vw",
      minHeight: "40vh"
    }
  }, /*#__PURE__*/React.createElement(UserSettings, null))));
};

export default SettingsView = styled(SettingsViewUnstyled)`
  .MuiPaper-root {
    background: #171e27 !important;
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy92aWV3cy9TZXR0aW5nc1ZpZXcvaW5kZXguanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQXBwQmFyIiwiVGFicyIsIlRhYiIsIkJveCIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIm1ha2VTdHlsZXMiLCJVSVNldHRpbmdzIiwiVXNlclNldHRpbmdzIiwiVW5pdFNldHRpbmdzIiwiWHN0eWxlZCIsIlRhYnNzIiwiTG9nbyIsIkZpbHRlciIsInN0eWxlZCIsImRlZmF1bHQiLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJwcm9wVHlwZXMiLCJub2RlIiwiYW55IiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsImlkIiwidXNlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJTZXR0aW5nc1ZpZXdVbnN0eWxlZCIsImNhbGxiYWNrRnVuY1RhYiIsIm9wdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIlNldHRpbmdzVmlldyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBRUEsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsbUJBQXZCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixtQkFBckI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLG1CQUFwQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsbUJBQXBCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixtQkFBdEI7QUFFQSxTQUFTQyxVQUFULFFBQTJCLG1CQUEzQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsMEJBQTNC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bmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQXBwQmFyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRhYnMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IFVJU2V0dGluZ3MgZnJvbSBcIi4vVUlTZXR0aW5nc1wiO1xyXG5pbXBvcnQgVXNlclNldHRpbmdzIGZyb20gXCIuL1VzZXJTZXR0aW5nc1wiO1xyXG5pbXBvcnQgVW5pdFNldHRpbmdzIGZyb20gXCIuL1VuaXRTZXR0aW5nc1wiO1xyXG5pbXBvcnQgWHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBUYWJzcyBmcm9tIFwiLi4vLi4vbGliL1RhYnNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2xpYi9sb2dvL0xvZ29cIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vLi4vbGliL0ZpbHRlclwiO1xyXG5cclxuY29uc3Qgc3R5bGVkID0gWHN0eWxlZC5kZWZhdWx0O1xyXG5cclxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcbiAgICAgIGlkPXtgc2ltcGxlLXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2ltcGxlLXRhYi0ke2luZGV4fWB9XHJcbiAgICAgIHsuLi5vdGhlcn1cclxuICAgID5cclxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbi8vY29uc3QgaGVscGVycyA9IFhoZWxwZXJzLmRlZmF1bHQ7XHJcbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogYHNpbXBsZS10YWItJHtpbmRleH1gLFxyXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6IGBzaW1wbGUtdGFicGFuZWwtJHtpbmRleH1gLFxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgU2V0dGluZ3NWaWV3VW5zdHlsZWQgPSAoKSA9PiB7XHJcbiAgLypjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgY29tcGxleFN0YXRlSW5pdGlhbCk7XHJcbiAgY29uc3Qgb25DaGFuZ2VVc2VSZWR1Y2VyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBuYW1lLCB2YWx1ZSB9KTtcclxuICB9OyovXHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxiYWNrRnVuY1RhYihvcHRpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2tcIiwgb3B0aW9uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWhlYWRlclwiPlNFVFRJTkdTPC9kaXY+XHJcbiAgICAgIDxQYXBlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290ICsgXCIgLk11aVBhcGVyLWVsZXZhdGlvbjVcIn1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzE3MWUyN1wiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKFwiVGFic1wiKX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgIGluZGljYXRvckNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiVW5pdHNcIiB7Li4uYTExeVByb3BzKDApfSAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlVzZXIgSW50ZXJmYWNlXCIgey4uLmExMXlQcm9wcygxKX0gLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJBY2NvdW50XCIgey4uLmExMXlQcm9wcygyKX0gLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPFRhYlBhbmVsXHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICBpbmRleD17MH1cclxuICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBcIjU1dndcIiwgbWluSGVpZ2h0OiBcIjQwdmhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxVbml0U2V0dGluZ3M+PC9Vbml0U2V0dGluZ3M+XHJcbiAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8VGFiUGFuZWxcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIGluZGV4PXsxfVxyXG4gICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IFwiNTV2d1wiLCBtaW5IZWlnaHQ6IFwiNDB2aFwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFVJU2V0dGluZ3MgLz5cclxuICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDxUYWJQYW5lbFxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgaW5kZXg9ezJ9XHJcbiAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogXCI1NXZ3XCIsIG1pbkhlaWdodDogXCI0MHZoXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VXNlclNldHRpbmdzPjwvVXNlclNldHRpbmdzPlxyXG4gICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NWaWV3ID0gc3R5bGVkKFNldHRpbmdzVmlld1Vuc3R5bGVkKWBcclxuICAuTXVpUGFwZXItcm9vdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTcxZTI3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG4iXX0=