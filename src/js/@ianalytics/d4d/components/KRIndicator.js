import React from "react";
import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";
import Xstyled from "@emotion/styled";
const styled = Xstyled.default;

function KRIndicatorUnstyled(props) {
  const [state, dispatch] = useStateValue(); // TODO: write me

  return /*#__PURE__*/React.createElement("div", {
    className: props.className
  }, " ", /*#__PURE__*/React.createElement("div", {
    className: "kri"
  }, " KRI thumbnail "), " ");
} // these are sample values, feel free to change them


export default KRIndicator = styled(KRIndicatorUnstyled)`
  position: relative;
  width: 172px;
  height: 114px;
  background: #16212a;
  color: #7a97ae;
  margin: 3px;

  > .kri {
    font-family: sans-serif;
    font-weight: 100;
    color: #7a97ae;
    padding: 5px;
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy9LUkluZGljYXRvci5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZVZhbHVlIiwiWHN0eWxlZCIsInN0eWxlZCIsImRlZmF1bHQiLCJLUkluZGljYXRvclVuc3R5bGVkIiwicHJvcHMiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY2xhc3NOYW1lIiwiS1JJbmRpY2F0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLDJDQUE5QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsaUJBQXBCO0FBRUEsTUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUNFLE9BQXZCOztBQUVBLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUNsQyxRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQlAsYUFBYSxFQUF2QyxDQURrQyxDQUdsQzs7QUFFQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFFSyxLQUFLLENBQUNHO0FBQXRCLEtBQ0csR0FESCxlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZix1QkFGRixFQUU2QyxHQUY3QyxDQURGO0FBTUQsQyxDQUVEOzs7QUFDQSxlQUFlQyxXQUFXLEdBQUdQLE1BQU0sQ0FBQ0UsbUJBQUQsQ0FBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIi9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy9TdGF0ZVByb3ZpZGVyXCI7XHJcbmltcG9ydCBYc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcclxuXHJcbmNvbnN0IHN0eWxlZCA9IFhzdHlsZWQuZGVmYXVsdDtcclxuXHJcbmZ1bmN0aW9uIEtSSW5kaWNhdG9yVW5zdHlsZWQocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcclxuXHJcbiAgLy8gVE9ETzogd3JpdGUgbWVcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3JpXCI+IEtSSSB0aHVtYm5haWwgPC9kaXY+e1wiIFwifVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gdGhlc2UgYXJlIHNhbXBsZSB2YWx1ZXMsIGZlZWwgZnJlZSB0byBjaGFuZ2UgdGhlbVxyXG5leHBvcnQgZGVmYXVsdCBLUkluZGljYXRvciA9IHN0eWxlZChLUkluZGljYXRvclVuc3R5bGVkKWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE3MnB4O1xyXG4gIGhlaWdodDogMTE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzE2MjEyYTtcclxuICBjb2xvcjogIzdhOTdhZTtcclxuICBtYXJnaW46IDNweDtcclxuXHJcbiAgPiAua3JpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjN2E5N2FlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuYDtcclxuIl19