import React, { useState } from "react";
import SimpleMap from "../../Map/SimpleMap/index";
import GeoMap from "../../Map/GeoMap/index";
import { faGameConsoleHandheld } from "@fortawesome/pro-light-svg-icons";

const MapView = () => {
  const [simpleView, setSimpleView] = useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "view-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "view-header"
  }, "MAP"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setSimpleView(!simpleView)
  }, "Switch View")), !simpleView && /*#__PURE__*/React.createElement(GeoMap, {
    size: 2
  }), simpleView && /*#__PURE__*/React.createElement(SimpleMap, {
    size: 2
  }));
};

export default MapView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy92aWV3cy9NYXBWaWV3L2luZGV4LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2ltcGxlTWFwIiwiR2VvTWFwIiwiZmFHYW1lQ29uc29sZUhhbmRoZWxkIiwiTWFwVmlldyIsInNpbXBsZVZpZXciLCJzZXRTaW1wbGVWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsMkJBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQix3QkFBbkI7QUFDQSxTQUFTQyxxQkFBVCxRQUFzQyxrQ0FBdEM7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEJOLFFBQVEsQ0FBQyxJQUFELENBQTVDO0FBRUEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixXQURGLGVBRUUsOENBQ0U7QUFBUSxJQUFBLE9BQU8sRUFBRSxNQUFNTSxhQUFhLENBQUMsQ0FBQ0QsVUFBRjtBQUFwQyxtQkFERixDQUZGLEVBS0csQ0FBQ0EsVUFBRCxpQkFBZSxvQkFBQyxNQUFEO0FBQVEsSUFBQSxJQUFJLEVBQUU7QUFBZCxJQUxsQixFQU1HQSxVQUFVLGlCQUFJLG9CQUFDLFNBQUQ7QUFBVyxJQUFBLElBQUksRUFBRTtBQUFqQixJQU5qQixDQURGO0FBVUQsQ0FiRDs7QUFlQSxlQUFlRCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTaW1wbGVNYXAgZnJvbSBcIi4uLy4uL01hcC9TaW1wbGVNYXAvaW5kZXhcIjtcclxuaW1wb3J0IEdlb01hcCBmcm9tIFwiLi4vLi4vTWFwL0dlb01hcC9pbmRleFwiO1xyXG5pbXBvcnQgeyBmYUdhbWVDb25zb2xlSGFuZGhlbGQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3Byby1saWdodC1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IE1hcFZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NpbXBsZVZpZXcsIHNldFNpbXBsZVZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXctY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlldy1oZWFkZXJcIj5NQVA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNpbXBsZVZpZXcoIXNpbXBsZVZpZXcpfT5Td2l0Y2ggVmlldzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgeyFzaW1wbGVWaWV3ICYmIDxHZW9NYXAgc2l6ZT17Mn0gLz59XHJcbiAgICAgIHtzaW1wbGVWaWV3ICYmIDxTaW1wbGVNYXAgc2l6ZT17Mn0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwVmlldztcclxuIl19