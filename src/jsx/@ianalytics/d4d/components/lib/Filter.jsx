import React, { useState } from "react";

const Filter = (props) => {
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
          ? "option-selected-dark"
          : selected === o && props.theme === "light"
          ? "option-selected-light"
          : selected !== o && props.theme === "dark"
          ? "filter-option-dark"
          : "filter-option-light"
      }
    >
      {o}
    </button>
  ));

  return (
    <div>
      <button
        className={props.theme === "dark" ? "filter-dark" : "filter-light"}
      >
        Filter
      </button>{" "}
      <div className="filter-options">{options}</div>
    </div>
  );
};

export default Filter;
