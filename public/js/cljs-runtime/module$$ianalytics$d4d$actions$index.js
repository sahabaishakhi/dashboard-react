var module$node_modules$date_fns$index = shadow.js.require("module$node_modules$date_fns$index", {});
function midway$$module$$ianalytics$d4d$actions$index(fromDate, toDate) {
  if ((0,module$node_modules$date_fns$index.isValid)(toDate)) {
    return new Date(fromDate.getTime() + 0.5 * (toDate - fromDate));
  } else {
    return fromDate;
  }
}
function moveDateBy$$module$$ianalytics$d4d$actions$index(dateFrom, delta_millis) {
  return new Date(dateFrom.getTime() + delta_millis);
}
function onlyUnique$$module$$ianalytics$d4d$actions$index(value, index, self) {
  return self.indexOf(value) === index;
}
function updateMainView$$module$$ianalytics$d4d$actions$index(newView) {
  return {mainView:newView};
}
function reducer$$module$$ianalytics$d4d$actions$index(state, action) {
  console.log((0,io.ianalytics.d4d.api.systema.buildTree)(action.payload));
  switch(action.type) {
    case "GET_SYSTEMA_DESCRIPTION":
      io.ianalytics.d4d.api.systema.getDescription(function(payload) {
        action.dispatch({type:"MERGE_SYSTEMA_DESCRIPTION", payload});
      });
      return state;
    case "MERGE_SYSTEMA_DESCRIPTION":
      return Object.assign({}, state, {systema:(0,io.ianalytics.d4d.api.systema.buildTree)(action.payload), systemaNodes:(0,io.ianalytics.d4d.api.systema.enrichNodesWithPlots)(action.payload)});
    case "SELECT_TIME_RANGE":
      if (action.payload && action.payload.from && (0,module$node_modules$date_fns$index.isValid)(action.payload.from) && action.payload.to && (0,module$node_modules$date_fns$index.isValid)(action.payload.to)) {
        localStorage.globalFrom = action.payload.from.toISOString();
        localStorage.globalTo = action.payload.to.toISOString();
        action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {timeSelection:action.payload, dispatch:action.dispatch})});
        return Object.assign({}, state, {timeSelection:action.payload});
      } else {
        return state;
      }
    case "SELECT_TIME_RANGE_FROM_EVENT":
      let eventId = action.payload;
      const {start, end} = state.events[eventId];
      const {from, to} = state.timeSelection;
      let eventTime = midway$$module$$ianalytics$d4d$actions$index((0,module$node_modules$date_fns$index.parseISO)(start), (0,module$node_modules$date_fns$index.parseISO)(end));
      let currentTime = midway$$module$$ianalytics$d4d$actions$index(from, to);
      let deltaTime = eventTime - currentTime;
      return Object.assign({}, state, {timeSelection:{from:moveDateBy$$module$$ianalytics$d4d$actions$index(state.timeSelection.from, deltaTime), to:moveDateBy$$module$$ianalytics$d4d$actions$index(state.timeSelection.to, deltaTime)}});
    case "PRESELECT_TIME_RANGE":
      return Object.assign({}, state, {timeUserSelection:action.payload});
    case "SWITCH_TO_PRESELECTED_TIME_RANGE":
      if (state.timeUserSelection && (0,module$node_modules$date_fns$index.isValid)(state.timeUserSelection[0]) && (0,module$node_modules$date_fns$index.isValid)(state.timeUserSelection[1])) {
        return Object.assign({}, state, {timeSelection:Object.assign({}, state.timeSelection, {from:state.timeUserSelection[0], to:state.timeUserSelection[1]}), timeUserSelection:[null, null]});
      } else {
        console.warn("invalid dates in preselection -- won't switch");
        return state;
      }
    case "TOGGLE_PLOT_EVENT_CREATION_MODE":
      return Object.assign({}, state, {plotDragMode:state.plotDragMode === "zoom" ? "select" : "zoom"});
    case "TOGGLE_REFRESH":
      return Object.assign({}, state, {plotsAutoUpdate:!state.plotsAutoUpdate});
    case "UPDATE_MAIN_VIEW":
      return Object.assign({}, state, updateMainView$$module$$ianalytics$d4d$actions$index(action.payload));
    case "GET_ALL_EVENTS":
      io.ianalytics.d4d.api.event.getAllEvents(function(payload) {
        action.dispatch({type:"MERGE_ALL_EVENTS", payload, dispatch:action.dispatch});
      });
      return state;
    case "MERGE_ALL_EVENTS":
      action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {events:(0,io.ianalytics.d4d.api.event.groupEventsByID)(action.payload)})});
      return Object.assign({}, state);
    case "OPEN_EVENT_CREATOR":
      return Object.assign({}, state, {eventCreatorOpen:true, eventCreatorData:action.payload});
    case "CLOSE_EVENT_CREATOR":
      return Object.assign({}, state, {eventCreatorOpen:false});
    case "CREATE_EVENT":
      io.ianalytics.d4d.api.event.createEvent(action.payload, function(payload) {
        action.dispatch({type:"GET_EVENT", payload, dispatch:action.dispatch});
      });
      return state;
    case "GET_EVENT":
      io.ianalytics.d4d.api.event.getEvent(action.payload, function(payload) {
        action.dispatch({type:"MERGE_EVENT", payload, eventId:action.payload, dispatch:action.dispatch});
      });
      return state;
    case "MERGE_EVENT":
      let newEvents = Object.assign({}, state.events);
      newEvents[action.payload[0]._id] = action.payload[0];
      action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {events:newEvents})});
      return state;
    case "PIN_EVENT":
      return Object.assign({}, state, {pinnedEvents:state.pinnedEvents.concat(action.payload._id)});
    case "UNPIN_EVENT":
      return Object.assign({}, state, {pinnedEvents:state.pinnedEvents.filter(eventId => eventId !== action.payload._id)});
    case "DELETE_EVENT":
      io.ianalytics.d4d.api.event.deleteEvent(action.payload, function(payload) {
        action.dispatch({type:"REMOVE_EVENT_FROM_STATE", payload:action.payload});
      });
      return state;
    case "UPDATE_EVENT":
      io.ianalytics.d4d.api.event.updateEvent(action.payload, payload => action.dispatch({type:"GET_EVENT", payload, dispatch:action.dispatch}));
      return state;
    case "REMOVE_EVENT_FROM_STATE":
      let newEvents_ = Object.assign({}, state.events);
      newPinnedEvents = state.pinnedEvents.filter(pinnedEvent => pinnedEvent._id !== action.payload);
      newVisibleEvents = state.visibleEvents.filter(event => event._id !== action.payload);
      delete newEvents_[action.payload];
      return Object.assign({}, state, {events:newEvents_, pinnedEvents:newPinnedEvents, visibleEvents:newVisibleEvents});
    case "COMBINE_PINNED_EVENTS":
      let pinnedEventObjects = state.pinnedEvents.map(id => state.events[id]);
      io.ianalytics.d4d.api.event.combineEvents(pinnedEventObjects);
      return state;
    case "GET_ALL_LABELS":
      io.ianalytics.d4d.api.label.getAllLabels(function(payload) {
        action.dispatch({type:"MERGE_ALL_LABELS", payload});
      });
      return state;
    case "MERGE_ALL_LABELS":
      let new_labels = action.payload.filter(new_label => !state.labels.find(state_label => state_label._id === new_label._id));
      return Object.assign({}, state, {labels:[...state.labels, ...new_labels]});
    case "CREATE_LABEL":
      io.ianalytics.d4d.api.label.createLabel(action.payload, function(payload) {
        action.dispatch({type:"GET_LABEL", payload, dispatch:action.dispatch});
      });
      return state;
    case "GET_LABEL":
      io.ianalytics.d4d.api.label.getLabel(action.payload, function(payload) {
        action.dispatch({type:"MERGE_LABEL", payload});
      });
      return state;
    case "MERGE_LABEL":
      return Object.assign({}, state, {labels:state.labels.concat(action.payload)});
    case "DELETE_LABEL":
      io.ianalytics.d4d.api.label.deleteLabel(action.payload, function(payload) {
        action.dispatch({type:"REMOVE_LABEL_FROM_STATE", payload:action.payload});
      });
      return state;
    case "REMOVE_LABEL_FROM_STATE":
      return Object.assign({}, state, {labels:state.labels.filter(label => label._id !== action.payload)});
    case "GET_ALL_COMMENTS":
      io.ianalytics.d4d.api.comment.getAllComments(action.payload, function(payload) {
        action.dispatch({type:"SET_COMMENTS", payload});
      });
      return state;
    case "GET_EVENT_COMMENTS":
      io.ianalytics.d4d.api.comment.getEventComments(action.payload, function(payload) {
        action.dispatch({type:"SET_COMMENTS", payload});
      });
      return state;
    case "SET_COMMENTS":
      return Object.assign({}, state, {comments:action.payload});
    case "CREATE_COMMENT":
      io.ianalytics.d4d.api.comment.createComment(action.payload);
      return Object.assign({}, state, {comments:[...state.comments, action.payload]});
    case "MERGE_COMMENTS":
      return Object.assign({}, state, {comments:state.comments.concat(action.payload)});
    case "UPDATE_EXPANDED_SYSTEMA_NODES":
      return Object.assign({}, state, {expandedSystemaNodes:action.payload});
    case "UPDATE_SELECTED_SYSTEMA_NODES":
      return Object.assign({}, state, {selectedSystemaNodes:action.payload});
    case "EXPAND_ALL_SYSTEMA_NODES":
      return Object.assign({}, state, {expandedSystemaNodes:Object.keys(state.systemaNodes)});
    case "COLLAPSE_ALL_SYSTEMA_NODES":
      return Object.assign({}, state, {expandedSystemaNodes:[]});
    case "OPEN_EVENT_DETAILS":
      return Object.assign({}, state, {eventDetailsOpen:true, eventDetailsEventUID:action.payload});
    case "CLOSE_EVENT_DETAILS":
      return Object.assign({}, state, {eventDetailsOpen:false});
    case "UPDATE_FILTERED_EVENTS":
      function isVisible(state, event) {
        selectedSeverities = action.payload.eventFilter.selectedSeverities;
        excludedLabels = action.payload.eventFilter.excludedLabels;
        const severity = event.severity;
        const freeText = action.payload.eventFilter.freeText;
        const matchesFreeText = freeText == "" || !freeText ? true : event.description ? event.description.toLowerCase().includes(freeText.toLowerCase()) : false;
        const excludedByLabel = excludedLabels.reduce((excluded, excludedLabel) => excluded || event.label.includes(excludedLabel), false);
        const eventStart = (0,module$node_modules$date_fns$index.parseISO)(event.start);
        const eventEnd = (0,module$node_modules$date_fns$index.parseISO)(event.end);
        const selectionFrom = action.payload.timeSelection.from;
        const selectionTo = action.payload.timeSelection.to;
        const excludedByTimeSelection = action.payload.eventFilter.onlySelectedTimeRange ? selectionFrom >= eventEnd || selectionTo <= eventStart : false;
        const createDate = (0,module$node_modules$date_fns$index.parseISO)(event.createDate);
        const excludedByCreateDate = action.payload.eventFilter.onlySelectedCreateTimeRange ? !(selectionFrom <= createDate && createDate <= selectionTo) : false;
        return selectedSeverities.includes(severity) && !excludedByLabel && matchesFreeText && !excludedByTimeSelection && !excludedByCreateDate;
      }const events = action.payload.events;
      const visibleEvents = events ? Object.values(events).filter(event => res = isVisible(state, event)) : [];
      return Object.assign({}, state, {timeSelection:action.payload.timeSelection, events:action.payload.events, eventFilter:action.payload.eventFilter, visibleEvents});
    case "UPDATE_EVENT_FILTER_SEVERITIES":
      action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {eventFilter:Object.assign({}, state.eventFilter, {selectedSeverities:action.payload})})});
      return state;
    case "UPDATE_EVENT_FILTER_LABELS":
      labelId = action.payload._id;
      isAlreadyExcluded = state.eventFilter.excludedLabels.includes(labelId);
      excludedLabels = isAlreadyExcluded ? excludedLabels.filter(excludedLabelId => labelId !== excludedLabelId) : [...state.eventFilter.excludedLabels, labelId];
      action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {eventFilter:Object.assign({}, state.eventFilter, {excludedLabels})})});
      return state;
    case "UPDATE_EVENT_FILTER_FREE_TEXT":
      action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {eventFilter:Object.assign({}, state.eventFilter, {freeText:action.payload})})});
      return state;
    case "UPDATE_EVENT_FILTER_ONLY_SELECTED_TIME_RANGE":
      const onlySelectedTimeRange = state.eventFilter.onlySelectedTimeRange;
      const onlySelectedCreateTimeRange = state.eventFilter.onlySelectedCreateTimeRange;
      const dateType = action.payload;
      dateType === "event" ? action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {eventFilter:Object.assign({}, state.eventFilter, {onlySelectedTimeRange:!onlySelectedTimeRange})})}) : action.dispatch({type:"UPDATE_FILTERED_EVENTS", payload:Object.assign({}, state, {eventFilter:Object.assign({}, state.eventFilter, {onlySelectedCreateTimeRange:!onlySelectedCreateTimeRange})})});
      return state;
    default:
      console.warn("reducer: cannot handle action with unknown type!", action);
      return state;
  }
}
/** @const */ 
var module$$ianalytics$d4d$actions$index = {};
/** @const */ 
module$$ianalytics$d4d$actions$index.default = reducer$$module$$ianalytics$d4d$actions$index;

$CLJS.module$$ianalytics$d4d$actions$index=module$$ianalytics$d4d$actions$index;
//# sourceMappingURL=module$$ianalytics$d4d$actions$index.js.map
