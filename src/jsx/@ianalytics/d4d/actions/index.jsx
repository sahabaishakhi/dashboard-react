import {
  buildTree,
  enrichNodesWithPlots,
} from "goog:io.ianalytics.d4d.api.systema";
import SystemaAPI from "goog:io.ianalytics.d4d.api.systema";
import { groupEventsByID } from "goog:io.ianalytics.d4d.api.event";
import EventAPI from "goog:io.ianalytics.d4d.api.event";
import LabelAPI from "goog:io.ianalytics.d4d.api.label";
import CommentAPI from "goog:io.ianalytics.d4d.api.comment";
import { parseISO, isValid } from "date-fns";

function midway(fromDate, toDate) {
  if (isValid(toDate)) {
    return new Date(fromDate.getTime() + 0.5 * (toDate - fromDate));
  } else {
    return fromDate;
  }
}

function moveDateBy(dateFrom, delta_millis) {
  return new Date(dateFrom.getTime() + delta_millis);
}

// Use as filter predicate to get unique elements in array
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// View reducer
function updateMainView(newView) {
  return { mainView: newView };
}
// Main reducer
export default function reducer(state, action) {
  console.log(buildTree(action.payload))
  switch (action.type) {
    /* SYSTEMA */
    case "GET_SYSTEMA_DESCRIPTION":
      SystemaAPI.getDescription(function (payload) {
        // console.log("case1")
        action.dispatch({ type: "MERGE_SYSTEMA_DESCRIPTION", payload });
      });
      return state;
    case "MERGE_SYSTEMA_DESCRIPTION":
      // console.log(action)
      return {
        ...state,
        systema: buildTree(action.payload),
        systemaNodes: enrichNodesWithPlots(action.payload),
      };

    /* TIME RANGE SELECTOR */
    case "SELECT_TIME_RANGE":
      // console.log(action)
      if (
        action.payload &&
        action.payload.from &&
        isValid(action.payload.from) &&
        action.payload.to &&
        isValid(action.payload.to)
      ) {
        // console.log(action)
        localStorage.globalFrom = action.payload.from.toISOString();
        localStorage.globalTo = action.payload.to.toISOString();

        action.dispatch({
          type: "UPDATE_FILTERED_EVENTS",
          payload: {
            ...state,
            timeSelection: action.payload,
            dispatch: action.dispatch,
          },
        });

        return {
          ...state,
          timeSelection: action.payload,
          // ...updateMainView(state.mainView),
        };
      } else {
        return state;
      }

    case "SELECT_TIME_RANGE_FROM_EVENT":
      let eventId = action.payload;
      const { start, end } = state.events[eventId];
      const { from, to } = state.timeSelection;
      let eventTime = midway(parseISO(start), parseISO(end));
      let currentTime = midway(from, to);

      let deltaTime = eventTime - currentTime;

      return {
        ...state,
        timeSelection: {
          from: moveDateBy(state.timeSelection.from, deltaTime),
          to: moveDateBy(state.timeSelection.to, deltaTime),
        },
      };

    case "PRESELECT_TIME_RANGE":
      return {
        ...state,
        timeUserSelection: action.payload,
      };
    case "SWITCH_TO_PRESELECTED_TIME_RANGE":
      if (
        state.timeUserSelection &&
        isValid(state.timeUserSelection[0]) &&
        isValid(state.timeUserSelection[1])
      ) {
        return {
          ...state,
          timeSelection: {
            ...state.timeSelection,
            from: state.timeUserSelection[0],
            to: state.timeUserSelection[1],
          },
          timeUserSelection: [null, null],
        };
      } else {
        console.warn("invalid dates in preselection -- won't switch");
        return state;
      }

    case "TOGGLE_PLOT_EVENT_CREATION_MODE":
      return {
        ...state,
        plotDragMode: state.plotDragMode === "zoom" ? "select" : "zoom",
      };

    case "TOGGLE_REFRESH":
      return { ...state, plotsAutoUpdate: !state.plotsAutoUpdate };

    /* MAIN VIEW */
    case "UPDATE_MAIN_VIEW":
      return { ...state, ...updateMainView(action.payload) };

    /*  EVENT */
    case "GET_ALL_EVENTS":
      EventAPI.getAllEvents(function (payload) {
        action.dispatch({
          type: "MERGE_ALL_EVENTS",
          payload,
          dispatch: action.dispatch,
        });
      });
      return state;
    case "MERGE_ALL_EVENTS":
      action.dispatch({
        type: "UPDATE_FILTERED_EVENTS",
        payload: { ...state, events: groupEventsByID(action.payload) },
      });
      return { ...state };
    case "OPEN_EVENT_CREATOR":
      return {
        ...state,
        eventCreatorOpen: true,
        eventCreatorData: action.payload,
      };
    case "CLOSE_EVENT_CREATOR":
      return { ...state, eventCreatorOpen: false };
    case "CREATE_EVENT":
      EventAPI.createEvent(action.payload, function (payload) {
        action.dispatch({
          type: "GET_EVENT",
          payload,
          dispatch: action.dispatch,
        });
      });
      return state;
    case "GET_EVENT":
      EventAPI.getEvent(action.payload, function (payload) {
        action.dispatch({
          type: "MERGE_EVENT",
          payload,
          eventId: action.payload,
          dispatch: action.dispatch,
        });
      });
      return state;
    case "MERGE_EVENT":
      let newEvents = {
        ...state.events,
      }; /* copying this so consumers receive updates */
      newEvents[action.payload[0]._id] = action.payload[0];

      action.dispatch({
        type: "UPDATE_FILTERED_EVENTS",
        payload: { ...state, events: newEvents },
      });
      return state;

    case "PIN_EVENT":
      return {
        ...state,
        // action.payload is an event object
        pinnedEvents: state.pinnedEvents.concat(action.payload._id),
      };
    case "UNPIN_EVENT":
      return {
        ...state,
        pinnedEvents: state.pinnedEvents.filter(
          (eventId) => eventId !== action.payload._id
        ),
      };
    case "DELETE_EVENT":
      EventAPI.deleteEvent(action.payload, function (payload) {
        action.dispatch({
          type: "REMOVE_EVENT_FROM_STATE",
          payload: action.payload,
        });
      });
      return state;
    case "UPDATE_EVENT":
      EventAPI.updateEvent(action.payload, (payload) =>
        action.dispatch({
          type: "GET_EVENT",
          payload: payload,
          dispatch: action.dispatch,
        })
      );
      return state;
    case "REMOVE_EVENT_FROM_STATE":
      let newEvents_ = {
        ...state.events,
      };

      newPinnedEvents = state.pinnedEvents.filter(
        (pinnedEvent) => pinnedEvent._id !== action.payload
      );
      newVisibleEvents = state.visibleEvents.filter(
        (event) => event._id !== action.payload
      );
      /* copying this so consumers receive updates */
      delete newEvents_[action.payload];

      return {
        ...state,
        events: newEvents_,
        pinnedEvents: newPinnedEvents,
        visibleEvents: newVisibleEvents,
      };
    case "COMBINE_PINNED_EVENTS":
      let pinnedEventObjects = state.pinnedEvents.map((id) => state.events[id]);
      EventAPI.combineEvents(pinnedEventObjects);
      return state; // TODO

    /* LABEL */
    case "GET_ALL_LABELS":
      LabelAPI.getAllLabels(function (payload) {
        action.dispatch({ type: "MERGE_ALL_LABELS", payload });
      });
      return state;
    case "MERGE_ALL_LABELS":
      let new_labels = action.payload.filter(
        (new_label) =>
          !state.labels.find((state_label) => state_label._id === new_label._id)
      );

      return {
        ...state,
        labels: [...state.labels, ...new_labels],
      };
    case "CREATE_LABEL":
      LabelAPI.createLabel(action.payload, function (payload) {
        action.dispatch({
          type: "GET_LABEL",
          payload,
          dispatch: action.dispatch,
        });
      });
      return state;
    case "GET_LABEL":
      LabelAPI.getLabel(action.payload, function (payload) {
        action.dispatch({ type: "MERGE_LABEL", payload });
      });
      return state;
    case "MERGE_LABEL":
      return {
        ...state,
        labels: state.labels.concat(action.payload),
      };
    case "DELETE_LABEL":
      LabelAPI.deleteLabel(action.payload, function (payload) {
        action.dispatch({
          type: "REMOVE_LABEL_FROM_STATE",
          payload: action.payload,
        });
      });
      return state;
    case "REMOVE_LABEL_FROM_STATE":
      return {
        ...state,
        labels: state.labels.filter((label) => label._id !== action.payload),
      };

    case "GET_ALL_COMMENTS":
      CommentAPI.getAllComments(action.payload, function (payload) {
        action.dispatch({
          type: "SET_COMMENTS",
          payload,
        });
      });
      return state;

    case "GET_EVENT_COMMENTS":
      CommentAPI.getEventComments(action.payload, function (payload) {
        action.dispatch({
          type: "SET_COMMENTS",
          payload,
        });
      });
      return state;
    case "SET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    case "CREATE_COMMENT":
      CommentAPI.createComment(action.payload);
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "MERGE_COMMENTS":
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };
    case "UPDATE_EXPANDED_SYSTEMA_NODES":
      return { ...state, expandedSystemaNodes: action.payload };
    case "UPDATE_SELECTED_SYSTEMA_NODES":
      return { ...state, selectedSystemaNodes: action.payload };
    case "EXPAND_ALL_SYSTEMA_NODES":
      return {
        ...state,
        expandedSystemaNodes: Object.keys(state.systemaNodes),
      };
    case "COLLAPSE_ALL_SYSTEMA_NODES":
      return {
        ...state,
        expandedSystemaNodes: [],
      };
    case "OPEN_EVENT_DETAILS":
      return {
        ...state,
        eventDetailsOpen: true,
        eventDetailsEventUID: action.payload,
      };
    case "CLOSE_EVENT_DETAILS":
      return {
        ...state,
        eventDetailsOpen: false,
      };
    /* EVENT FILTER */
    case "UPDATE_FILTERED_EVENTS":
      /* This action is dispatched after every event filter action.
      `visibleEvents` object gets mutated here. */

      function isVisible(state, event) {
        // severity
        selectedSeverities = action.payload.eventFilter.selectedSeverities;
        excludedLabels = action.payload.eventFilter.excludedLabels;
        const severity = event.severity;

        // free text
        const freeText = action.payload.eventFilter.freeText;
        const matchesFreeText =
          freeText == "" || !freeText
            ? true
            : event.description
            ? event.description.toLowerCase().includes(freeText.toLowerCase())
            : false;

        // label
        const excludedByLabel = excludedLabels.reduce(
          (excluded, excludedLabel) =>
            excluded || event.label.includes(excludedLabel),
          false
        );

        // event date or creation date
        const eventStart = parseISO(event.start);
        const eventEnd = parseISO(event.end);
        const selectionFrom = action.payload.timeSelection.from;
        const selectionTo = action.payload.timeSelection.to;
        // include events that have some overlap with the time selection
        // (can reach out left and/or right out of the selection)

        const excludedByTimeSelection = action.payload.eventFilter
          .onlySelectedTimeRange
          ? selectionFrom >= eventEnd || selectionTo <= eventStart
          : false;

        // creation date
        const createDate = parseISO(event.createDate);
        const excludedByCreateDate = action.payload.eventFilter
          .onlySelectedCreateTimeRange
          ? !(selectionFrom <= createDate && createDate <= selectionTo)
          : false;

        return (
          selectedSeverities.includes(severity) &&
          !excludedByLabel &&
          matchesFreeText &&
          !excludedByTimeSelection &&
          !excludedByCreateDate
        );
      }

      const events = action.payload.events;

      const visibleEvents = events
        ? Object.values(events).filter(
            (event) => (res = isVisible(state, event))
          )
        : [];

      return {
        ...state,
        timeSelection: action.payload.timeSelection,
        events: action.payload.events,
        eventFilter: action.payload.eventFilter,
        visibleEvents: visibleEvents,
      };

    case "UPDATE_EVENT_FILTER_SEVERITIES":
      action.dispatch({
        type: "UPDATE_FILTERED_EVENTS",
        payload: {
          ...state,
          eventFilter: {
            ...state.eventFilter,
            selectedSeverities: action.payload,
          },
        },
      });
      return state;

    case "UPDATE_EVENT_FILTER_LABELS":
      labelId = action.payload._id;

      isAlreadyExcluded = state.eventFilter.excludedLabels.includes(labelId);
      excludedLabels = isAlreadyExcluded
        ? excludedLabels.filter(
            (excludedLabelId) => labelId !== excludedLabelId
          )
        : [...state.eventFilter.excludedLabels, labelId];

      action.dispatch({
        type: "UPDATE_FILTERED_EVENTS",
        payload: {
          ...state,
          eventFilter: {
            ...state.eventFilter,
            excludedLabels: excludedLabels,
          },
        },
      });
      return state;

    case "UPDATE_EVENT_FILTER_FREE_TEXT":
      action.dispatch({
        type: "UPDATE_FILTERED_EVENTS",
        payload: {
          ...state,
          eventFilter: { ...state.eventFilter, freeText: action.payload },
        },
      });
      return state;

    case "UPDATE_EVENT_FILTER_ONLY_SELECTED_TIME_RANGE":
      const onlySelectedTimeRange = state.eventFilter.onlySelectedTimeRange;
      const onlySelectedCreateTimeRange =
        state.eventFilter.onlySelectedCreateTimeRange;
      const dateType = action.payload;

      dateType === "event"
        ? action.dispatch({
            type: "UPDATE_FILTERED_EVENTS",
            payload: {
              ...state,
              eventFilter: {
                ...state.eventFilter,
                onlySelectedTimeRange: !onlySelectedTimeRange,
              },
            },
          })
        : action.dispatch({
            type: "UPDATE_FILTERED_EVENTS",
            payload: {
              ...state,
              eventFilter: {
                ...state.eventFilter,
                onlySelectedCreateTimeRange: !onlySelectedCreateTimeRange,
              },
            },
          });
      return state;

    default:
      console.warn("reducer: cannot handle action with unknown type!", action);
      return state;
  }
}
