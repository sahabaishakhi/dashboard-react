import React from "react";
import UnitStable from "./unitstable";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import UnitSystems from "./unitsystems";
import helpers from "./helpers";

const UserSettings = () => {
  /*const [state, dispatch] = useReducer(reducer, complexStateInitial);
  const onChangeUseReducer = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };*/
  return /*#__PURE__*/React.createElement("div", {
    className: "view-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "value-container"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Some user settings")))))));
};

export default UserSettings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy92aWV3cy9TZXR0aW5nc1ZpZXcvVXNlclNldHRpbmdzLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlVuaXRTdGFibGUiLCJTZWxlY3QiLCJNZW51SXRlbSIsIlRleHRGaWVsZCIsIlVuaXRTeXN0ZW1zIiwiaGVscGVycyIsIlVzZXJTZXR0aW5ncyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsY0FBdkI7QUFFQSxTQUFTQyxNQUFULFFBQXVCLG1CQUF2QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsbUJBQXpCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixtQkFBMUI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGVBQXhCO0FBRUEsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN6QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBRUUsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDhDQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnREFDRSxnREFDRSw2Q0FDRSxxREFERixDQURGLENBREYsQ0FERixDQURGLENBREYsQ0FERjtBQWVELENBdEJEOztBQXdCQSxlQUFlQSxZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVW5pdFN0YWJsZSBmcm9tIFwiLi91bml0c3RhYmxlXCI7XHJcblxyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBVbml0U3lzdGVtcyBmcm9tIFwiLi91bml0c3lzdGVtc1wiO1xyXG5cclxuaW1wb3J0IGhlbHBlcnMgZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5cclxuY29uc3QgVXNlclNldHRpbmdzID0gKCkgPT4ge1xyXG4gIC8qY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGNvbXBsZXhTdGF0ZUluaXRpYWwpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVXNlUmVkdWNlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogbmFtZSwgdmFsdWUgfSk7XHJcbiAgfTsqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3LWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFsdWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+U29tZSB1c2VyIHNldHRpbmdzPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNldHRpbmdzO1xyXG4iXX0=