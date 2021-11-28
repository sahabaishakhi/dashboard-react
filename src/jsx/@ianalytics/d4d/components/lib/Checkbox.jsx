import React, { useState } from "react";

const Checkbox = (props) => {
  function changeChecked(option) {
    localStorage.setItem(props.localStorageVar, !checked);
    setChecked(!checked);
    props.callbackFunc(option);
  }

  let isChecked =
    localStorage.getItem(props.localStorageVar) && !props.resetOnReload
      ? localStorage.getItem(props.localStorageVar) === "true"
        ? true
        : localStorage.getItem(props.localStorageVar) === "false"
        ? false
        : props.checked
      : props.checked;

  const [checked, setChecked] = useState(isChecked);

  return (
    <div className="checkbox-element">
      {console.log(
        "localstorage",
        props.localStorageVar,
        localStorage.getItem(props.localStorageVar),
        typeof checked
      )}
      <label className="checkbox-label">
        <input
          value={props.label}
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            changeChecked(e.target.value);
          }}
        ></input>
        <span className="checkbox-custom rectangular"></span>
      </label>
      <label className="input-title">
        <p className={props.theme === "dark" ? "p-dark" : "p-light"}>
          {props.label}
        </p>
      </label>
    </div>
  );
};

export default Checkbox;
