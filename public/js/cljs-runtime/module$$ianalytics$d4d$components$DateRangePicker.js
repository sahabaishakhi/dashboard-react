var module$node_modules$react$index = shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$material_ui$pickers$dist$material_ui_pickers = shadow.js.require("module$node_modules$$material_ui$pickers$dist$material_ui_pickers", {});
var module$node_modules$date_fns$index = shadow.js.require("module$node_modules$date_fns$index", {});
var module$node_modules$$material_ui$core$index = shadow.js.require("module$node_modules$$material_ui$core$index", {});
var module$node_modules$$fortawesome$react_fontawesome$index = shadow.js.require("module$node_modules$$fortawesome$react_fontawesome$index", {});
var module$node_modules$$fortawesome$free_solid_svg_icons$index = shadow.js.require("module$node_modules$$fortawesome$free_solid_svg_icons$index", {});
var $jscompDefaultExport$$module$$ianalytics$d4d$components$DateRangePicker = DateRangePicker = function(props) {
  function toggle_autoupdate() {
    dispatch({type:"TOGGLE_REFRESH", dispatch});
  }
  function dispatchTimes(newFrom, newTo) {
    if (newFrom < newTo) {
      dispatch({type:"SELECT_TIME_RANGE", payload:{from:newFrom, to:newTo}, dispatch});
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
    dispatchTimes(new Date(from.getTime() + factor * delta), new Date(to.getTime() + factor * delta));
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
      switch(e.target.id) {
        case "dr_1h":
          setDateRange("last hour");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {hours:1});
          break;
        case "dr_6h":
          setDateRange("last 6 hours");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {hours:6});
          break;
        case "dr_12h":
          setDateRange("last 12 hours");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {hours:12});
          break;
        case "dr_1d":
          setDateRange("today");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {days:1});
          break;
        case "dr_1w":
          setDateRange("last week");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {weeks:1});
          break;
        case "dr_1m":
          setDateRange("last month");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {months:1});
          break;
        case "dr_6m":
          setDateRange("last six months");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {months:6});
          setSelectedTo(now);
          break;
        case "dr_1y":
          setDateRange("last year");
          newFrom = (0,module$node_modules$date_fns$index.sub)(now, {years:1});
          break;
      }
      dispatchTimes(newFrom, now);
    }
    setAnchorEl(null);
  }
  const [state, dispatch] = useStateValue$$module$$ianalytics$d4d$components$StateProvider();
  const {from, to} = state.timeSelection;
  const [selectedFrom, setSelectedFrom] = (0,module$node_modules$react$index.useState)(from);
  const [selectedTo, setSelectedTo] = (0,module$node_modules$react$index.useState)(to);
  const [anchorEl, setAnchorEl] = (0,module$node_modules$react$index.useState)(null);
  const [dateRange, setDateRange] = (0,module$node_modules$react$index.useState)(state.timeSelection.mode);
  (0,module$node_modules$react$index.useEffect)(() => {
    if (state.plotsAutoUpdate) {
      const interval = setInterval(function() {
        if (dateRange !== "CUSTOM") {
          dispatchTimes(from, new Date());
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [state.plotsAutoUpdate]);
  (0,module$node_modules$react$index.useEffect)(() => {
    setSelectedFrom(from);
    setSelectedTo(to);
  }, [from, to]);
  return (0,module$node_modules$react$index.useMemo)(() => module$node_modules$react$index.createElement("div", {style:{display:"flex", placeContent:"space-between"}}, module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.Menu, {id:"menu_DrPicker", anchorEl, keepMounted:true, open:Boolean(anchorEl), onClose:handleClose}, module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_1h", onClick:handleClose}, "last hour"), 
  module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_6h", onClick:handleClose}, "last 6 hours"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_12h", onClick:handleClose}, "last 12 hours"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_1d", onClick:handleClose}, "today"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, 
  {id:"dr_1w", onClick:handleClose}, "last week"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_1m", onClick:handleClose}, "last month"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_6m", onClick:handleClose}, "last 6 months"), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_1y", onClick:handleClose}, "last year"), 
  module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.MenuItem, {id:"dr_c", onClick:handleClose}, "custom")), module$node_modules$react$index.createElement(module$node_modules$$material_ui$core$index.Button, {endIcon:module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, {icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faCalendarAlt}), color:"primary", variant:"outlined", style:{paddingLeft:"5pt", 
  marginRight:"3rem"}, id:"dateRangeSelector", "aria-controls":"simple-menu", "aria-haspopup":"true", onClick:e => setAnchorEl(e.currentTarget)}, dateRange), module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, {onClick:fast_rewind, style:{cursor:"pointer"}, size:"2x", color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faChevronDoubleLeft}), module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, 
  {onClick:rewind, style:{cursor:"pointer"}, size:"2x", color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faChevronLeft}), module$node_modules$react$index.createElement(module$node_modules$$material_ui$pickers$dist$material_ui_pickers.KeyboardDateTimePicker, {id:"daterange_from", value:selectedFrom, maxDate:selectedTo, format:"yyyy-MM-dd HH:mm", ampm:false, onKeyDown:handleKeyEvent, onChange:setSelectedFrom, KeyboardButtonProps:{size:"small"}, keyboardIcon:module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, 
  {color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faCalendar})}), module$node_modules$react$index.createElement(module$node_modules$$material_ui$pickers$dist$material_ui_pickers.KeyboardDateTimePicker, {id:"daterange_to", value:selectedTo, minDate:selectedFrom, format:"yyyy-MM-dd HH:mm", ampm:false, onKeyDown:handleKeyEvent, onChange:setSelectedTo, KeyboardButtonProps:{size:"small"}, keyboardIcon:module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, 
  {color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faCalendar})}), module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, {onClick:forward, style:{cursor:"pointer"}, size:"2x", color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faChevronRight}), module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, {onClick:fast_forward, 
  style:{cursor:"pointer"}, size:"2x", color:"#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faChevronDoubleRight}), module$node_modules$react$index.createElement(module$node_modules$$fortawesome$react_fontawesome$index.FontAwesomeIcon, {onClick:toggle_autoupdate, style:{cursor:"pointer"}, size:"2x", color:dateRange === "CUSTOM" ? "728ba655" : "#728ba6", icon:module$node_modules$$fortawesome$free_solid_svg_icons$index.faSync, disabled:dateRange === "CUSTOM", inverse:state.plotsAutoUpdate && 
  dateRange !== "CUSTOM"})), [selectedFrom, selectedTo, state.timeSelection, state.plotsAutoUpdate, anchorEl]);
};
/** @const */ 
var module$$ianalytics$d4d$components$DateRangePicker = {};
/** @const */ 
module$$ianalytics$d4d$components$DateRangePicker.default = $jscompDefaultExport$$module$$ianalytics$d4d$components$DateRangePicker;

$CLJS.module$$ianalytics$d4d$components$DateRangePicker=module$$ianalytics$d4d$components$DateRangePicker;
//# sourceMappingURL=module$$ianalytics$d4d$components$DateRangePicker.js.map
