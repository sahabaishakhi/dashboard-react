import React, { useState } from "react";

const Tabs = props => {
  let defaultOption = localStorage.getItem(props.localStorageVar) && !props.resetOnReload ? localStorage.getItem(props.localStorageVar) : props.defaultOption;
  const [selected, setSelected] = useState(props.options[defaultOption]);

  function selectOption(option) {
    setSelected(option);
    localStorage.setItem(props.localStorageVar, props.options.indexOf(option));
    props.callbackFunc(option);
  }

  const options = props.options.map((o, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    value: o,
    onClick: e => selectOption(e.target.value),
    className: selected === o && props.theme === "dark" ? "tab-dark btn-tertiary-dark tab-checked-dark" : selected === o && props.theme === "light" ? "tab-light btn-tertiary-light tab-checked-light" : selected !== o && props.theme === "dark" ? "tab-dark btn-tertiary-dark" : "tab-light btn-tertiary-light"
  }, o));
  return /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("div", {
    className: "tab-line"
  }, options), /*#__PURE__*/React.createElement("div", null));
};

export default Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy9saWIvVGFicy5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhYnMiLCJwcm9wcyIsImRlZmF1bHRPcHRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9jYWxTdG9yYWdlVmFyIiwicmVzZXRPblJlbG9hZCIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJvcHRpb25zIiwic2VsZWN0T3B0aW9uIiwib3B0aW9uIiwic2V0SXRlbSIsImluZGV4T2YiLCJjYWxsYmFja0Z1bmMiLCJtYXAiLCJvIiwiaSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRoZW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQzs7QUFFQSxNQUFNQyxJQUFJLEdBQUlDLEtBQUQsSUFBVztBQUN0QixNQUFJQyxhQUFhLEdBQ2ZDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsS0FBSyxDQUFDSSxlQUEzQixLQUErQyxDQUFDSixLQUFLLENBQUNLLGFBQXRELEdBQ0lILFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsS0FBSyxDQUFDSSxlQUEzQixDQURKLEdBRUlKLEtBQUssQ0FBQ0MsYUFIWjtBQUtBLFFBQU0sQ0FBQ0ssUUFBRCxFQUFXQyxXQUFYLElBQTBCVCxRQUFRLENBQUNFLEtBQUssQ0FBQ1EsT0FBTixDQUFjUCxhQUFkLENBQUQsQ0FBeEM7O0FBRUEsV0FBU1EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEI7QUFDNUJILElBQUFBLFdBQVcsQ0FBQ0csTUFBRCxDQUFYO0FBQ0FSLElBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQlgsS0FBSyxDQUFDSSxlQUEzQixFQUE0Q0osS0FBSyxDQUFDUSxPQUFOLENBQWNJLE9BQWQsQ0FBc0JGLE1BQXRCLENBQTVDO0FBQ0FWLElBQUFBLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkgsTUFBbkI7QUFDRDs7QUFFRCxRQUFNRixPQUFPLEdBQUdSLEtBQUssQ0FBQ1EsT0FBTixDQUFjTSxHQUFkLENBQWtCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixrQkFDaEM7QUFDRSxJQUFBLEdBQUcsRUFBRUEsQ0FEUDtBQUVFLElBQUEsS0FBSyxFQUFFRCxDQUZUO0FBR0UsSUFBQSxPQUFPLEVBQUdFLENBQUQsSUFBT1IsWUFBWSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUg5QjtBQUlFLElBQUEsU0FBUyxFQUNQYixRQUFRLEtBQUtTLENBQWIsSUFBa0JmLEtBQUssQ0FBQ29CLEtBQU4sS0FBZ0IsTUFBbEMsR0FDSSw2Q0FESixHQUVJZCxRQUFRLEtBQUtTLENBQWIsSUFBa0JmLEtBQUssQ0FBQ29CLEtBQU4sS0FBZ0IsT0FBbEMsR0FDQSxnREFEQSxHQUVBZCxRQUFRLEtBQUtTLENBQWIsSUFBa0JmLEtBQUssQ0FBQ29CLEtBQU4sS0FBZ0IsTUFBbEMsR0FDQSw0QkFEQSxHQUVBO0FBWFIsS0FjR0wsQ0FkSCxDQURjLENBQWhCO0FBbUJBLHNCQUNFLGlDQUNHLEdBREgsZUFFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMkJQLE9BQTNCLENBRkYsZUFHRSxnQ0FIRixDQURGO0FBT0QsQ0F4Q0Q7O0FBMENBLGVBQWVULElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhYnMgPSAocHJvcHMpID0+IHtcclxuICBsZXQgZGVmYXVsdE9wdGlvbiA9XHJcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9wcy5sb2NhbFN0b3JhZ2VWYXIpICYmICFwcm9wcy5yZXNldE9uUmVsb2FkXHJcbiAgICAgID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvcHMubG9jYWxTdG9yYWdlVmFyKVxyXG4gICAgICA6IHByb3BzLmRlZmF1bHRPcHRpb247XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUocHJvcHMub3B0aW9uc1tkZWZhdWx0T3B0aW9uXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHNlbGVjdE9wdGlvbihvcHRpb24pIHtcclxuICAgIHNldFNlbGVjdGVkKG9wdGlvbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9wcy5sb2NhbFN0b3JhZ2VWYXIsIHByb3BzLm9wdGlvbnMuaW5kZXhPZihvcHRpb24pKTtcclxuICAgIHByb3BzLmNhbGxiYWNrRnVuYyhvcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMubWFwKChvLCBpKSA9PiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGtleT17aX1cclxuICAgICAgdmFsdWU9e299XHJcbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZWxlY3RPcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIHNlbGVjdGVkID09PSBvICYmIHByb3BzLnRoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgICAgPyBcInRhYi1kYXJrIGJ0bi10ZXJ0aWFyeS1kYXJrIHRhYi1jaGVja2VkLWRhcmtcIlxyXG4gICAgICAgICAgOiBzZWxlY3RlZCA9PT0gbyAmJiBwcm9wcy50aGVtZSA9PT0gXCJsaWdodFwiXHJcbiAgICAgICAgICA/IFwidGFiLWxpZ2h0IGJ0bi10ZXJ0aWFyeS1saWdodCB0YWItY2hlY2tlZC1saWdodFwiXHJcbiAgICAgICAgICA6IHNlbGVjdGVkICE9PSBvICYmIHByb3BzLnRoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgICAgPyBcInRhYi1kYXJrIGJ0bi10ZXJ0aWFyeS1kYXJrXCJcclxuICAgICAgICAgIDogXCJ0YWItbGlnaHQgYnRuLXRlcnRpYXJ5LWxpZ2h0XCJcclxuICAgICAgfVxyXG4gICAgPlxyXG4gICAgICB7b31cclxuICAgIDwvYnV0dG9uPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1wiIFwifVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1saW5lXCI+e29wdGlvbnN9PC9kaXY+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFicztcclxuIl19