import React, { useState, useMemo, useEffect } from "react";

import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { sub } from "date-fns";
import { useStateValue } from "/@ianalytics/d4d/components/StateProvider";

import { Button, Menu, MenuItem, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendar,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
  faChevronDoubleLeft,
  faChevronDoubleRight,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

export default DateRangePicker = function (props) {
  const [state, dispatch] = useStateValue();
  const { from, to } = state.timeSelection;

  const [selectedFrom, setSelectedFrom] = useState(from);
  const [selectedTo, setSelectedTo] = useState(to);

  const [anchorEl, setAnchorEl] = useState(null);
  const [dateRange, setDateRange] = useState(state.timeSelection.mode);

  useEffect(() => {
    if (state.plotsAutoUpdate) {
      const interval = setInterval(function () {
        if (dateRange !== "CUSTOM") {
          dispatchTimes(from, new Date());
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [state.plotsAutoUpdate]);

  function toggle_autoupdate() {
    dispatch({ type: "TOGGLE_REFRESH", dispatch: dispatch });
  }

  useEffect(() => {
    setSelectedFrom(from);
    setSelectedTo(to);
  }, [from, to]);

  function dispatchTimes(newFrom, newTo) {
    if (newFrom < newTo) {
      dispatch({
        type: "SELECT_TIME_RANGE",
        payload: { from: newFrom, to: newTo },
        dispatch: dispatch,
      });
    }
  }

  function dispatchSelectedTimes() {
    dispatchTimes(selectedFrom, selectedTo);
  }

  function handleKeyEvent(event) {
    if (event.key === "Enter") {
      dispatchSelectedTimes();
    }
  }

  function slideTimeWindow(factor) {
    const delta = selectedTo - selectedFrom;
    dispatchTimes(
      new Date(from.getTime() + factor * delta),
      new Date(to.getTime() + factor * delta)
    );
    setDateRange("CUSTOM");
  }

  function fast_rewind() {
    slideTimeWindow(-1.0);
  }
  function rewind() {
    slideTimeWindow(-0.3);
  }
  function forward() {
    slideTimeWindow(0.3);
  }
  function fast_forward() {
    slideTimeWindow(1.0);
  }

  function handleClose(e) {
    if (e.target.id === "dr_c") {
      setDateRange("CUSTOM");
    } else {
      let now = new Date();
      let newFrom = null;

      switch (e.target.id) {
        case "dr_1h":
          setDateRange("last hour");
          newFrom = sub(now, { hours: 1 });
          break;
        case "dr_6h":
          setDateRange("last 6 hours");
          newFrom = sub(now, { hours: 6 });
          break;
        case "dr_12h":
          setDateRange("last 12 hours");
          newFrom = sub(now, { hours: 12 });
          break;
        case "dr_1d":
          setDateRange("today");
          newFrom = sub(now, { days: 1 });
          break;
        case "dr_1w":
          setDateRange("last week");
          newFrom = sub(now, { weeks: 1 });
          break;
        case "dr_1m":
          setDateRange("last month");
          newFrom = sub(now, { months: 1 });
          break;
        case "dr_6m":
          setDateRange("last six months");
          newFrom = sub(now, { months: 6 });
          setSelectedTo(now);
          break;
        case "dr_1y":
          setDateRange("last year");
          newFrom = sub(now, { years: 1 });
          break;
      }

      dispatchTimes(newFrom, now);
    }

    setAnchorEl(null);
  }

  return useMemo(
    () => (
      <div style={{ display: "flex", placeContent: "space-between" }}>
        <Menu
          id="menu_DrPicker"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem id="dr_1h" onClick={handleClose}>
            last hour
          </MenuItem>
          <MenuItem id="dr_6h" onClick={handleClose}>
            last 6 hours
          </MenuItem>
          <MenuItem id="dr_12h" onClick={handleClose}>
            last 12 hours
          </MenuItem>

          <MenuItem id="dr_1d" onClick={handleClose}>
            today
          </MenuItem>
          <MenuItem id="dr_1w" onClick={handleClose}>
            last week
          </MenuItem>
          <MenuItem id="dr_1m" onClick={handleClose}>
            last month
          </MenuItem>
          <MenuItem id="dr_6m" onClick={handleClose}>
            last 6 months
          </MenuItem>
          <MenuItem id="dr_1y" onClick={handleClose}>
            last year
          </MenuItem>
          <MenuItem id="dr_c" onClick={handleClose}>
            custom
          </MenuItem>
        </Menu>
        <Button
          endIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
          color="primary"
          variant="outlined"
          style={{ paddingLeft: "5pt", marginRight: "3rem" }}
          id="dateRangeSelector"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          {dateRange}
        </Button>
        <FontAwesomeIcon
          onClick={fast_rewind}
          style={{ cursor: "pointer" }}
          size="2x"
          color="#728ba6"
          icon={faChevronDoubleLeft}
        />
        <FontAwesomeIcon
          onClick={rewind}
          style={{ cursor: "pointer" }}
          size="2x"
          color="#728ba6"
          icon={faChevronLeft}
        />
        <KeyboardDateTimePicker
          id="daterange_from"
          value={selectedFrom}
          maxDate={selectedTo}
          format="yyyy-MM-dd HH:mm"
          ampm={false}
          onKeyDown={handleKeyEvent}
          onChange={setSelectedFrom}
          KeyboardButtonProps={{ size: "small" }}
          keyboardIcon={<FontAwesomeIcon color="#728ba6" icon={faCalendar} />}
        />
        <KeyboardDateTimePicker
          id="daterange_to"
          value={selectedTo}
          minDate={selectedFrom}
          format="yyyy-MM-dd HH:mm"
          ampm={false}
          onKeyDown={handleKeyEvent}
          onChange={setSelectedTo}
          KeyboardButtonProps={{ size: "small" }}
          keyboardIcon={<FontAwesomeIcon color="#728ba6" icon={faCalendar} />}
        />
        <FontAwesomeIcon
          onClick={forward}
          style={{ cursor: "pointer" }}
          size="2x"
          color="#728ba6"
          icon={faChevronRight}
        />
        <FontAwesomeIcon
          onClick={fast_forward}
          style={{ cursor: "pointer" }}
          size="2x"
          color="#728ba6"
          icon={faChevronDoubleRight}
        />
        <FontAwesomeIcon
          onClick={toggle_autoupdate}
          style={{ cursor: "pointer" }}
          size="2x"
          color={dateRange === "CUSTOM" ? "728ba655" : "#728ba6"}
          icon={faSync}
          disabled={dateRange === "CUSTOM"}
          inverse={state.plotsAutoUpdate && dateRange !== "CUSTOM"}
        />
      </div>
    ),
    [
      selectedFrom,
      selectedTo,
      state.timeSelection,
      state.plotsAutoUpdate,
      anchorEl,
    ]
  );
};
