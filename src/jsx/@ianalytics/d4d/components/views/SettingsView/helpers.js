import UnitStable from "./unitstable";
import UnitSystems from "./unitsystems";
import FormatSystems from "./formatsystems.js";
import Sprintf from "sprintf-js";

const helpers = {
  // convert value and it'S range of given dimension with set SI-unit to selected/predifined unit
  convertFromSi: function (dimension, value, prefUnit) {
    let i;

    if (UnitStable.aliases[dimension]) {
      dimension = UnitStable.aliases[dimension];
    }
    if (!prefUnit) {
      prefUnit = UnitStable.unitstable[dimension].values[0];
    }
    i = UnitStable.unitstable[dimension.toLowerCase()].values.indexOf(prefUnit);

    let printUnit = UnitStable.unitstable[dimension].printUnits[i];

    //return [value, prefUnit];

    let newVal =
      parseFloat(UnitStable.unitstable[dimension].factors[i]) *
      (value + parseFloat(UnitStable.unitstable[dimension].offsets[i]));

    prefUnit = printUnit ? printUnit : prefUnit;

    return [newVal, prefUnit];
  },

  //convert value of given dimension and unit to SI-unit to send it to the backend
  convertToSi: function (dimension, value, curUnit) {
    if (dimension !== "boolean") {
      let i;

      if (UnitStable.aliases[dimension]) {
        dimension = UnitStable.aliases[dimension];
      }

      if (!UnitSystems.default) return value;

      if (!curUnit || curUnit === "undefined") {
        if (UnitSystems.default[dimension]) {
          curUnit = UnitSystems.default[dimension];
        } else if (UnitStable.unitstable[dimension]) {
          curUnit = UnitStable.unitstable[dimension].values[0];
        }
      }

      i = UnitStable.unitstable[dimension.toLowerCase()].values.indexOf(
        curUnit
      );

      if (i === -1)
        i = UnitStable.unitstable[dimension].printUnits
          .map((unit) => (unit ? unit : null))
          .indexOf(curUnit);

      let defVal =
        value / parseFloat(UnitStable.unitstable[dimension].factors[i]) -
        parseFloat(UnitStable.unitstable[dimension].offsets[i]);

      return defVal;
    } else return value;
  },

  //convert from one unit to another
  convert: function (dimension, value, curUnit, prefUnit) {
    const siValue = this.convertToSi(dimension, value, curUnit);
    const newValue = this.convertFromSi(dimension, siValue, prefUnit);
    return newValue;
  },

  //format how the numbers are shown
  format: function (value, unit) {
    let format;
    let formatted;
    if (FormatSystems["Default"][unit]) format = FormatSystems["Default"][unit];
    else format = FormatSystems["Default"]["any"];

    if (!isNaN(parseFloat(value))) {
      formatted = Sprintf.sprintf(format, parseFloat(value));
    } else {
      formatted = NaN;
    }

    return formatted;
  },
};
export default helpers;
