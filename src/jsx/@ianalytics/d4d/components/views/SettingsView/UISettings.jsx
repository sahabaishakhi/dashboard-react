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
      return (
        <MenuItem value={value} key={key}>
          {value}
        </MenuItem>
      );
    });

    return (
      <tr key={i}>
        <td>{key}</td>
        <td>
          <TextField select>{units}</TextField>
        </td>
      </tr>
    );
  });

  return (
    <div className="view-container">
      <div>
        <h3>Units</h3>
        <div className="value-container">
          <table>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UISettings;
