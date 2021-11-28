import React, { useState, useMemo, useEffect } from "react";

import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";
import Xstyled from "@emotion/styled";

import SystemaAPI from "goog:io.ianalytics.d4d.api.systema";

import TimeSeriesPlot from "/@ianalytics/d4d/components/Plot/TimeSeriesPlot";
import DateRangePicker from "/@ianalytics/d4d/components/DateRangePicker";

const styled = Xstyled.default;

export default function Main(props) {
  const [state, dispatch] = useStateValue();

  const { mainView, timeSelection } = state;
  // console.log("Baishakhi")
  function appropriatePlot(unitGroup) {
    return (
      <TimeSeriesPlot
        key={"main-timeseries-plot-" + unitGroup}
        from={state.timeSelection.from}
        to={state.timeSelection.to}
        uids={unitGroup}
      />
    );
  }

  return useMemo(() => {
    const groups =
      state.selectedSystemaNodes &&
      SystemaAPI.displayUnitGroups(state.selectedSystemaNodes);

    return (
      <div style={{ width: "100%" }}>
        <DateRangePicker />
        {groups && groups.map(appropriatePlot)}
      </div>
    );
  }, [mainView, timeSelection, state.selectedSystemaNodes]);
}
