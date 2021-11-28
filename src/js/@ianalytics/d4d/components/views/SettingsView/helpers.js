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
    let printUnit = UnitStable.unitstable[dimension].printUnits[i]; //return [value, prefUnit];

    let newVal = parseFloat(UnitStable.unitstable[dimension].factors[i]) * (value + parseFloat(UnitStable.unitstable[dimension].offsets[i]));
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

      i = UnitStable.unitstable[dimension.toLowerCase()].values.indexOf(curUnit);
      if (i === -1) i = UnitStable.unitstable[dimension].printUnits.map(unit => unit ? unit : null).indexOf(curUnit);
      let defVal = value / parseFloat(UnitStable.unitstable[dimension].factors[i]) - parseFloat(UnitStable.unitstable[dimension].offsets[i]);
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
    if (FormatSystems["Default"][unit]) format = FormatSystems["Default"][unit];else format = FormatSystems["Default"]["any"];

    if (!isNaN(parseFloat(value))) {
      formatted = Sprintf.sprintf(format, parseFloat(value));
    } else {
      formatted = NaN;
    }

    return formatted;
  }
};
export default helpers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pzeC9AaWFuYWx5dGljcy9kNGQvY29tcG9uZW50cy92aWV3cy9TZXR0aW5nc1ZpZXcvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJVbml0U3RhYmxlIiwiVW5pdFN5c3RlbXMiLCJGb3JtYXRTeXN0ZW1zIiwiU3ByaW50ZiIsImhlbHBlcnMiLCJjb252ZXJ0RnJvbVNpIiwiZGltZW5zaW9uIiwidmFsdWUiLCJwcmVmVW5pdCIsImkiLCJhbGlhc2VzIiwidW5pdHN0YWJsZSIsInZhbHVlcyIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInByaW50VW5pdCIsInByaW50VW5pdHMiLCJuZXdWYWwiLCJwYXJzZUZsb2F0IiwiZmFjdG9ycyIsIm9mZnNldHMiLCJjb252ZXJ0VG9TaSIsImN1clVuaXQiLCJkZWZhdWx0IiwibWFwIiwidW5pdCIsImRlZlZhbCIsImNvbnZlcnQiLCJzaVZhbHVlIiwibmV3VmFsdWUiLCJmb3JtYXQiLCJmb3JtYXR0ZWQiLCJpc05hTiIsInNwcmludGYiLCJOYU4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVAsTUFBdUIsY0FBdkI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLGVBQXhCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixvQkFBMUI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFlBQXBCO0FBRUEsTUFBTUMsT0FBTyxHQUFHO0FBQ2Q7QUFDQUMsRUFBQUEsYUFBYSxFQUFFLFVBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxRQUE1QixFQUFzQztBQUNuRCxRQUFJQyxDQUFKOztBQUVBLFFBQUlULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQkosU0FBbkIsQ0FBSixFQUFtQztBQUNqQ0EsTUFBQUEsU0FBUyxHQUFHTixVQUFVLENBQUNVLE9BQVgsQ0FBbUJKLFNBQW5CLENBQVo7QUFDRDs7QUFDRCxRQUFJLENBQUNFLFFBQUwsRUFBZTtBQUNiQSxNQUFBQSxRQUFRLEdBQUdSLFVBQVUsQ0FBQ1csVUFBWCxD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b0IsT0FBTyxHQUFHLEtBQUtQLFdBQUwsQ0FBaUJmLFNBQWpCLEVBQTRCQyxLQUE1QixFQUFtQ2UsT0FBbkMsQ0FBaEI7QUFDQSxVQUFNTyxRQUFRLEdBQUcsS0FBS3hCLGFBQUwsQ0FBbUJDLFNBQW5CLEVBQThCc0IsT0FBOUIsRUFBdUNwQixRQUF2QyxDQUFqQjtBQUNBLFdBQU9xQixRQUFQO0FBQ0QsR0FuRWE7QUFxRWQ7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLFVBQVV2QixLQUFWLEVBQWlCa0IsSUFBakIsRUFBdUI7QUFDN0IsUUFBSUssTUFBSjtBQUNBLFFBQUlDLFNBQUo7QUFDQSxRQUFJN0IsYUFBYSxDQUFDLFNBQUQsQ0FBYixDQUF5QnVCLElBQXpCLENBQUosRUFBb0NLLE1BQU0sR0FBRzVCLGFBQWEsQ0FBQyxTQUFELENBQWIsQ0FBeUJ1QixJQUF6QixDQUFULENBQXBDLEtBQ0tLLE1BQU0sR0FBRzVCLGFBQWEsQ0FBQyxTQUFELENBQWIsQ0FBeUIsS0FBekIsQ0FBVDs7QUFFTCxRQUFJLENBQUM4QixLQUFLLENBQUNkLFVBQVUsQ0FBQ1gsS0FBRCxDQUFYLENBQVYsRUFBK0I7QUFDN0J3QixNQUFBQSxTQUFTLEdBQUc1QixPQUFPLENBQUM4QixPQUFSLENBQWdCSCxNQUFoQixFQUF3QlosVUFBVSxDQUFDWCxLQUFELENBQWxDLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTHdCLE1BQUFBLFNBQVMsR0FBR0csR0FBWjtBQUNEOztBQUVELFdBQU9ILFNBQVA7QUFDRDtBQW5GYSxDQUFoQjtBQXFGQSxlQUFlM0IsT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbml0U3RhYmxlIGZyb20gXCIuL3VuaXRzdGFibGVcIjtcclxuaW1wb3J0IFVuaXRTeXN0ZW1zIGZyb20gXCIuL3VuaXRzeXN0ZW1zXCI7XHJcbmltcG9ydCBGb3JtYXRTeXN0ZW1zIGZyb20gXCIuL2Zvcm1hdHN5c3RlbXMuanNcIjtcclxuaW1wb3J0IFNwcmludGYgZnJvbSBcInNwcmludGYtanNcIjtcclxuXHJcbmNvbnN0IGhlbHBlcnMgPSB7XHJcbiAgLy8gY29udmVydCB2YWx1ZSBhbmQgaXQnUyByYW5nZSBvZiBnaXZlbiBkaW1lbnNpb24gd2l0aCBzZXQgU0ktdW5pdCB0byBzZWxlY3RlZC9wcmVkaWZpbmVkIHVuaXRcclxuICBjb252ZXJ0RnJvbVNpOiBmdW5jdGlvbiAoZGltZW5zaW9uLCB2YWx1ZSwgcHJlZlVuaXQpIHtcclxuICAgIGxldCBpO1xyXG5cclxuICAgIGlmIChVbml0U3RhYmxlLmFsaWFzZXNbZGltZW5zaW9uXSkge1xyXG4gICAgICBkaW1lbnNpb24gPSBVbml0U3RhYmxlLmFsaWFzZXNbZGltZW5zaW9uXTtcclxuICAgIH1cclxuICAgIGlmICghcHJlZlVuaXQpIHtcclxuICAgICAgcHJlZlVuaXQgPSBVbml0U3RhYmxlLnVuaXRzdGFibGVbZGltZW5zaW9uXS52YWx1ZXNbMF07XHJcbiAgICB9XHJcbiAgICBpID0gVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbi50b0xvd2VyQ2FzZSgpXS52YWx1ZXMuaW5kZXhPZihwcmVmVW5pdCk7XHJcblxyXG4gICAgbGV0IHByaW50VW5pdCA9IFVuaXRTdGFibGUudW5pdHN0YWJsZVtkaW1lbnNpb25dLnByaW50VW5pdHNbaV07XHJcblxyXG4gICAgLy9yZXR1cm4gW3ZhbHVlLCBwcmVmVW5pdF07XHJcblxyXG4gICAgbGV0IG5ld1ZhbCA9XHJcbiAgICAgIHBhcnNlRmxvYXQoVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbl0uZmFjdG9yc1tpXSkgKlxyXG4gICAgICAodmFsdWUgKyBwYXJzZUZsb2F0KFVuaXRTdGFibGUudW5pdHN0YWJsZVtkaW1lbnNpb25dLm9mZnNldHNbaV0pKTtcclxuXHJcbiAgICBwcmVmVW5pdCA9IHByaW50VW5pdCA/IHByaW50VW5pdCA6IHByZWZVbml0O1xyXG5cclxuICAgIHJldHVybiBbbmV3VmFsLCBwcmVmVW5pdF07XHJcbiAgfSxcclxuXHJcbiAgLy9jb252ZXJ0IHZhbHVlIG9mIGdpdmVuIGRpbWVuc2lvbiBhbmQgdW5pdCB0byBTSS11bml0IHRvIHNlbmQgaXQgdG8gdGhlIGJhY2tlbmRcclxuICBjb252ZXJ0VG9TaTogZnVuY3Rpb24gKGRpbWVuc2lvbiwgdmFsdWUsIGN1clVuaXQpIHtcclxuICAgIGlmIChkaW1lbnNpb24gIT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIGxldCBpO1xyXG5cclxuICAgICAgaWYgKFVuaXRTdGFibGUuYWxpYXNlc1tkaW1lbnNpb25dKSB7XHJcbiAgICAgICAgZGltZW5zaW9uID0gVW5pdFN0YWJsZS5hbGlhc2VzW2RpbWVuc2lvbl07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghVW5pdFN5c3RlbXMuZGVmYXVsdCkgcmV0dXJuIHZhbHVlO1xyXG5cclxuICAgICAgaWYgKCFjdXJVbml0IHx8IGN1clVuaXQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAoVW5pdFN5c3RlbXMuZGVmYXVsdFtkaW1lbnNpb25dKSB7XHJcbiAgICAgICAgICBjdXJVbml0ID0gVW5pdFN5c3RlbXMuZGVmYXVsdFtkaW1lbnNpb25dO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbl0pIHtcclxuICAgICAgICAgIGN1clVuaXQgPSBVbml0U3RhYmxlLnVuaXRzdGFibGVbZGltZW5zaW9uXS52YWx1ZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpID0gVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbi50b0xvd2VyQ2FzZSgpXS52YWx1ZXMuaW5kZXhPZihcclxuICAgICAgICBjdXJVbml0XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoaSA9PT0gLTEpXHJcbiAgICAgICAgaSA9IFVuaXRTdGFibGUudW5pdHN0YWJsZVtkaW1lbnNpb25dLnByaW50VW5pdHNcclxuICAgICAgICAgIC5tYXAoKHVuaXQpID0+ICh1bml0ID8gdW5pdCA6IG51bGwpKVxyXG4gICAgICAgICAgLmluZGV4T2YoY3VyVW5pdCk7XHJcblxyXG4gICAgICBsZXQgZGVmVmFsID1cclxuICAgICAgICB2YWx1ZSAvIHBhcnNlRmxvYXQoVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbl0uZmFjdG9yc1tpXSkgLVxyXG4gICAgICAgIHBhcnNlRmxvYXQoVW5pdFN0YWJsZS51bml0c3RhYmxlW2RpbWVuc2lvbl0ub2Zmc2V0c1tpXSk7XHJcblxyXG4gICAgICByZXR1cm4gZGVmVmFsO1xyXG4gICAgfSBlbHNlIHJldHVybiB2YWx1ZTtcclxuICB9LFxyXG5cclxuICAvL2NvbnZlcnQgZnJvbSBvbmUgdW5pdCB0byBhbm90aGVyXHJcbiAgY29udmVydDogZnVuY3Rpb24gKGRpbWVuc2lvbiwgdmFsdWUsIGN1clVuaXQsIHByZWZVbml0KSB7XHJcbiAgICBjb25zdCBzaVZhbHVlID0gdGhpcy5jb252ZXJ0VG9TaShkaW1lbnNpb24sIHZhbHVlLCBjdXJVbml0KTtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jb252ZXJ0RnJvbVNpKGRpbWVuc2lvbiwgc2lWYWx1ZSwgcHJlZlVuaXQpO1xyXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xyXG4gIH0sXHJcblxyXG4gIC8vZm9ybWF0IGhvdyB0aGUgbnVtYmVycyBhcmUgc2hvd25cclxuICBmb3JtYXQ6IGZ1bmN0aW9uICh2YWx1ZSwgdW5pdCkge1xyXG4gICAgbGV0IGZvcm1hdDtcclxuICAgIGxldCBmb3JtYXR0ZWQ7XHJcbiAgICBpZiAoRm9ybWF0U3lzdGVtc1tcIkRlZmF1bHRcIl1bdW5pdF0pIGZvcm1hdCA9IEZvcm1hdFN5c3RlbXNbXCJEZWZhdWx0XCJdW3VuaXRdO1xyXG4gICAgZWxzZSBmb3JtYXQgPSBGb3JtYXRTeXN0ZW1zW1wiRGVmYXVsdFwiXVtcImFueVwiXTtcclxuXHJcbiAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSkge1xyXG4gICAgICBmb3JtYXR0ZWQgPSBTcHJpbnRmLnNwcmludGYoZm9ybWF0LCBwYXJzZUZsb2F0KHZhbHVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtYXR0ZWQgPSBOYU47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZvcm1hdHRlZDtcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoZWxwZXJzO1xyXG4iXX0=