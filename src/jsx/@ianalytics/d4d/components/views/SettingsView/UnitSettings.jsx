import React from "react";
import UnitStable from "./unitstable";

import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import UnitSystems from "./unitsystems";
import Xstyled from "@emotion/styled";

const styled = Xstyled.default;

import helpers from "./helpers";

const UnitSettingsUnstyled = (props) => {
  const [selectValue, setSelectValue] = React.useState(
    localStorage.getItem(props.className)
  );

  const handleChange = (key, event) => {
    localStorage.setItem(key, event.target.value);
    setSelectValue(event.target.value);
  };

  let dimensions = Object.keys(UnitStable.unitstable).map((key, i) => {
    const units = UnitStable.unitstable[key].values.map((value, i) => {
      let value_is_local_setting = value == localStorage.getItem(key);
      return (
        <MenuItem selected={value_is_local_setting} key={i} value={value}>
          {value}
        </MenuItem>
      );
    });

    return (
      <tr key={i}>
        <td>{key}</td>
        <td>
          <Select
            value={
              localStorage.getItem(key)
                ? localStorage.getItem(key)
                : UnitStable.unitstable[key].values[0]
                ? UnitStable.unitstable[key].values[0]
                : ""
            }
            onChange={(e) => handleChange(key, e)}
          >
            {units}
          </Select>
        </td>
      </tr>
    );
  });

  const dimensions14 = dimensions.slice(0, dimensions.length / 4 - 1);
  const dimensions24 = dimensions.slice(
    dimensions.length / 4,
    (2 * dimensions.length) / 4 - 1
  );
  const dimensions34 = dimensions.slice(
    (2 * dimensions.length) / 4,
    (3 * dimensions.length) / 4 - 1
  );
  const dimensions44 = dimensions.slice(
    (3 * dimensions.length) / 4,
    dimensions.length - 1
  );

  return (
    <div className={props.className}>
      <div>
        <div className="tables">
          <table>
            <tbody>{dimensions14}</tbody>
          </table>
          <table>
            <tbody>
              <tbody>{dimensions24}</tbody>
            </tbody>
          </table>
          <table>
            <tbody>
              <tbody>{dimensions34}</tbody>
            </tbody>
          </table>
          <table>
            <tbody>
              <tbody>{dimensions44}</tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UnitSettings = styled(UnitSettingsUnstyled)`
  .MuiPaper-root {
    background-color: #171e27 !! !important;
  }

  .MuiInput-input {
    min-width: 60px;
  }
  .tables {
    display: flex;
    flex-direction: row;
  }
  table {
    margin: 40px;
  }
`;
