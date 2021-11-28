import React, { useState } from "react";

const Checkbox = props => {
  function changeChecked(option) {
    localStorage.setItem(props.localStorageVar, !checked);
    setChecked(!checked);
    props.callbackFunc(option);
  }

  let isChecked = localStorage.getItem(props.localStorageVar) && !props.resetOnReload ? localStorage.getItem(props.localStorageVar) === "true" ? true : localStorage.getItem(props.localStorageVar) === "false" ? false : props.checked : props.checked;
  const [checked, setChecked] = useState(isChecked);
  return /*#__PURE__*/React.createElement("div", {
    className: "checkbox-element"
  }, console.log("localstorage", props.localStorageVar, localStorage.getItem(props.localStorageVar), typeof checked), /*#__PURE__*/React.createElement("label", {
    className: "checkbox-label"
  }, /*#__PURE__*/React.createElement("input", {
    value: props.label,
    type: "checkbox",
    checked: checked,
    onChange: e => {
      changeChecked(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "checkbox-custom rectangular"
  })), /*#__PURE__*/React.createElement("label", {
    className: "input-title"
  }, /*#__PURE__*/React.createElement("p", {
    className: props.theme === "dark" ? "p-dark" : "p-light"
  }, props.label)));
};

export default Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy9saWIvQ2hlY2tib3guanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDaGVja2JveCIsInByb3BzIiwiY2hhbmdlQ2hlY2tlZCIsIm9wdGlvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2NhbFN0b3JhZ2VWYXIiLCJjaGVja2VkIiwic2V0Q2hlY2tlZCIsImNhbGxiYWNrRnVuYyIsImlzQ2hlY2tlZCIsImdldEl0ZW0iLCJyZXNldE9uUmVsb2FkIiwiY29uc29sZSIsImxvZyIsImxhYmVsIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGhlbWUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFFBQWhCLFFBQWdDLE9BQWhDOztBQUVBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXO0FBQzFCLFdBQVNDLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBQzdCQyxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJKLEtBQUssQ0FBQ0ssZUFBM0IsRUFBNEMsQ0FBQ0MsT0FBN0M7QUFDQUMsSUFBQUEsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNBTixJQUFBQSxLQUFLLENBQUNRLFlBQU4sQ0FBbUJOLE1BQW5CO0FBQ0Q7O0FBRUQsTUFBSU8sU0FBUyxHQUNYTixZQUFZLENBQUNPLE9BQWIsQ0FBcUJWLEtBQUssQ0FBQ0ssZUFBM0IsS0FBK0MsQ0FBQ0wsS0FBSyxDQUFDVyxhQUF0RCxHQUNJUixZQUFZLENBQUNPLE9BQWIsQ0FBcUJWLEtBQUssQ0FBQ0ssZUFBM0IsTUFBZ0QsTUFBaEQsR0FDRSxJQURGLEdBRUVGLFlBQVksQ0FBQ08sT0FBYixDQUFxQlYsS0FBSyxDQUFDSyxlQUEzQixNQUFnRCxPQUFoRCxHQUNBLEtBREEsR0FFQUwsS0FBSyxDQUFDTSxPQUxaLEdBTUlOLEtBQUssQ0FBQ00sT0FQWjtBQVNBLFFBQU0sQ0FBQ0EsT0FBRCxFQUFVQyxVQUFWLElBQXdCVCxRQUFRLENBQUNXLFNBQUQsQ0FBdEM7QUFFQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0csT0FBTyxDQUFDQyxHQUFSLENBQ0MsY0FERCxFQUVDYixLQUFLLENBQUNLLGVBRlAsRUFHQ0YsWUFBWSxDQUFDTyxPQUFiLENBQXFCVixLQUFLLENBQUNLLGVBQTNCLENBSEQsRUFJQyxPQUFPQyxPQUpSLENBREgsZUFPRTtBQUFPLElBQUEsU0FBUyxFQUFDO0FBQWpCLGtCQUNFO0FBQ0UsSUFBQSxLQUFLLEVBQUVOLEtBQUssQ0FBQ2MsS0FEZjtBQUVFLElBQUEsSUFBSSxFQUFDLFVBRlA7QUFHRSxJQUFBLE9BQU8sRUFBRVIsT0FIWDtBQUlFLElBQUEsUUFBUSxFQUFHUyxDQUFELElBQU87QUFDZmQsTUFBQUEsYUFBYSxDQUFDYyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQ0Q7QUFOSCxJQURGLGVBU0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixJQVRGLENBUEYsZUFrQkU7QUFBTyxJQUFBLFNBQVMsRUFBQztBQUFqQixrQkFDRTtBQUFHLElBQUEsU0FBUyxFQUFFakIsS0FBSyxDQUFDa0IsS0FBTixLQUFnQixNQUFoQixHQUF5QixRQUF6QixHQUFvQztBQUFsRCxLQUNHbEIsS0FBSyxDQUFDYyxLQURULENBREYsQ0FsQkYsQ0FERjtBQTBCRCxDQTVDRDs7QUE4Q0EsZUFBZWYsUUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAocHJvcHMpID0+IHtcclxuICBmdW5jdGlvbiBjaGFuZ2VDaGVja2VkKG9wdGlvbikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvcHMubG9jYWxTdG9yYWdlVmFyLCAhY2hlY2tlZCk7XHJcbiAgICBzZXRDaGVja2VkKCFjaGVja2VkKTtcclxuICAgIHByb3BzLmNhbGxiYWNrRnVuYyhvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGlzQ2hlY2tlZCA9XHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wcy5sb2NhbFN0b3JhZ2VWYXIpICYmICFwcm9wcy5yZXNldE9uUmVsb2FkXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvcHMubG9jYWxTdG9yYWdlVmFyKSA9PT0gXCJ0cnVlXCJcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb3BzLmxvY2FsU3RvcmFnZVZhcikgPT09IFwiZmFsc2VcIlxyXG4gICAgICAgID8gZmFsc2VcclxuICAgICAgICA6IHByb3BzLmNoZWNrZWRcclxuICAgICAgOiBwcm9wcy5jaGVja2VkO1xyXG5cclxuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShpc0NoZWNrZWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2JveC1lbGVtZW50XCI+XHJcbiAgICAgIHtjb25zb2xlLmxvZyhcclxuICAgICAgICBcImxvY2Fsc3RvcmFnZVwiLFxyXG4gICAgICAgIHByb3BzLmxvY2FsU3RvcmFnZVZhcixcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wcy5sb2NhbFN0b3JhZ2VWYXIpLFxyXG4gICAgICAgIHR5cGVvZiBjaGVja2VkXHJcbiAgICAgICl9XHJcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlQ2hlY2tlZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94LWN1c3RvbSByZWN0YW5ndWxhclwiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImlucHV0LXRpdGxlXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtwcm9wcy50aGVtZSA9PT0gXCJkYXJrXCIgPyBcInAtZGFya1wiIDogXCJwLWxpZ2h0XCJ9PlxyXG4gICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIl19