import React, { useState } from "react";

const Tabs = (props) => {
  let defaultOption =
    localStorage.getItem(props.localStorageVar) && !props.resetOnReload
      ? localStorage.getItem(props.localStorageVar)
      : props.defaultOption;

  const [selected, setSelected] = useState(props.options[defaultOption]);

  function selectOption(option) {
    setSelected(option);
    localStorage.setItem(props.localStorageVar, props.options.indexOf(option));
    props.callbackFunc(option);
  }

  const options = props.options.map((o, i) => (
    <button
      key={i}
      value={o}
      onClick={(e) => selectOption(e.target.value)}
      className={
        selected === o && props.theme === "dark"
          ? "tab-dark btn-tertiary-dark tab-checked-dark"
          : selected === o && props.theme === "light"
          ? "tab-light btn-tertiary-light tab-checked-light"
          : selected !== o && props.theme === "dark"
          ? "tab-dark btn-tertiary-dark"
          : "tab-light btn-tertiary-light"
      }
    >
      {o}
    </button>
  ));

  return (
    <div>
      {" "}
      <div className="tab-line">{options}</div>
      <div></div>
    </div>
  );
};

export default Tabs;
