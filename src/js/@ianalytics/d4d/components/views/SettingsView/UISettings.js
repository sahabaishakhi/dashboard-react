import React from "react";
import UnitStable from "./unitstable";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import UnitSystems from "./unitsystems";
import helpers from "./helpers";

const UISettings = () => {
  /*const [state, dispatch] = useReducer(reducer, complexStateInitial);
  const onChangeUseReducer = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };*/
  const dimensions = Object.keys(UnitStable.unitstable).map((key, i) => {
    const units = UnitStable.unitstable[key].values.map((value, i) => {
      return /*#__PURE__*/React.createElement(MenuItem, {
        value: value,
        key: key
      }, value);
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, key), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(TextField, {
      select: true
    }, units)));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "view-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Units"), /*#__PURE__*/React.createElement("div", {
    className: "value-container"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null)))));
};

export default UISettings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy92aWV3cy9TZXR0aW5nc1ZpZXcvVUlTZXR0aW5ncy5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJVbml0U3RhYmxlIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJUZXh0RmllbGQiLCJVbml0U3lzdGVtcyIsImhlbHBlcnMiLCJVSVNldHRpbmdzIiwiZGltZW5zaW9ucyIsIk9iamVjdCIsImtleXMiLCJ1bml0c3RhYmxlIiwibWFwIiwia2V5IiwiaSIsInVuaXRzIiwidmFsdWVzIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCO0FBRUEsU0FBU0MsTUFBVCxRQUF1QixtQkFBdkI7QUFDQSxTQUFTQyxRQUFULFFBQXlCLG1CQUF6QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsbUJBQTFCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixlQUF4QjtBQUVBLE9BQU9DLE9BQVAsTUFBb0IsV0FBcEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUVFLFFBQU1DLFVBQVUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULFVBQVUsQ0FBQ1UsVUFBdkIsRUFBbUNDLEdBQW5DLENBQXVDLENBQUNDLEdBQUQsRUFBTUMsQ0FBTixLQUFZO0FBQ3BFLFVBQU1DLEtBQUssR0FBR2QsVUFBVSxDQUFDVSxVQUFYLENBQXNCRSxHQUF0QixFQUEyQkcsTUFBM0IsQ0FBa0NKLEdBQWxDLENBQXNDLENBQUNLLEtBQUQsRUFBUUgsQ0FBUixLQUFjO0FBQ2hFLDBCQUNFLG9CQUFDLFFBQUQ7QUFBVSxRQUFBLEtBQUssRUFBRUcsS0FBakI7QUFBd0IsUUFBQSxHQUFHLEVBQUVKO0FBQTdCLFNBQ0dJLEtBREgsQ0FERjtBQUtELEtBTmEsQ0FBZDtBQVFBLHdCQUNFO0FBQUksTUFBQSxHQUFHLEVBQUVIO0FBQVQsb0JBQ0UsZ0NBQUtELEdBQUwsQ0FERixlQUVFLDZDQUNFLG9CQUFDLFNBQUQ7QUFBVyxNQUFBLE1BQU07QUFBakIsT0FBbUJFLEtBQW5CLENBREYsQ0FGRixDQURGO0FBUUQsR0FqQmtCLENBQW5CO0FBbUJBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSw4Q0FDRSx3Q0FERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnREFDRSxrQ0FERixDQURGLENBRkYsQ0FERixDQURGO0FBWUQsQ0F0Q0Q7O0FBd0NBLGVBQWVSLFVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVbml0U3RhYmxlIGZyb20gXCIuL3VuaXRzdGFibGVcIjtcclxuXHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFVuaXRTeXN0ZW1zIGZyb20gXCIuL3VuaXRzeXN0ZW1zXCI7XHJcblxyXG5pbXBvcnQgaGVscGVycyBmcm9tIFwiLi9oZWxwZXJzXCI7XHJcblxyXG5jb25zdCBVSVNldHRpbmdzID0gKCkgPT4ge1xyXG4gIC8qY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGNvbXBsZXhTdGF0ZUluaXRpYWwpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVXNlUmVkdWNlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogbmFtZSwgdmFsdWUgfSk7XHJcbiAgfTsqL1xyXG5cclxuICBjb25zdCBkaW1lbnNpb25zID0gT2JqZWN0LmtleXMoVW5pdFN0YWJsZS51bml0c3RhYmxlKS5tYXAoKGtleSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdW5pdHMgPSBVbml0U3RhYmxlLnVuaXRzdGFibGVba2V5XS52YWx1ZXMubWFwKCh2YWx1ZSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNZW51SXRlbSB2YWx1ZT17dmFsdWV9IGtleT17a2V5fT5cclxuICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRyIGtleT17aX0+XHJcbiAgICAgICAgPHRkPntrZXl9PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkIHNlbGVjdD57dW5pdHN9PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPlVuaXRzPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbHVlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+PC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVJU2V0dGluZ3M7XHJcbiJdfQ==