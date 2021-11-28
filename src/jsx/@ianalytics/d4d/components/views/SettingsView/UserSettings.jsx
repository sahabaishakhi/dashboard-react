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

  return (
    <div className="view-container">
      <div>
        <div className="value-container">
          <table>
            <tbody>
              <tr>
                <td>Some user settings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
