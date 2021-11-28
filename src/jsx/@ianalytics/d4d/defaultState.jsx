import { parseISO, sub } from "date-fns";

export default defaultState = {
  systema: null, // the complete systema graph
  systemaNodes: {},
  expandedSystemaNodes: null,
  selectedSystemaNodes: [],
  mainView: "home",
  timeSelection: {
    mode: localStorage.globalFrom ? "CUSTOM" : "last hour",
    from: localStorage.globalFrom
      ? parseISO(localStorage.globalFrom)
      : sub(new Date(), { hours: 1 }),
    to: localStorage.globalTo ? parseISO(localStorage.globalTo) : new Date(),
    intv: "10s",
    aggr: "mean",
  },
  timeUserSelection: [null, null], // holds a pair of Dates when users zoom and drag plots.
  plotDragMode: "zoom",

  // @cleanup for now, this is deferring to plotsAutoUpdate below. In future, it needs (?) its own user interface like the one in DateRangePicker.
  // eventsAutoUpdate: false, // continuously poll for events when EventLine is visible

  plotsAutoUpdate: false, // continuously poll for new data when timeSelection is not 'custom'.
  eventCreatorOpen: false, // event creation is a modal dialog
  eventCreatorData: { from: new Date(), to: new Date(), uid: "0" },
  visibleEvents: {} /* object with properties event UIDs and values corresponding
                       visible events, that are events that should be visible according to the event
                       filter settings */,
  events: {}, // object with properties event UIDs and values corresponding events
  eventFilter: {
    selectedSeverities: ["warning", "failure", "info"],
    excludedLabels: [], // list of `label._id`s of excluded labels
    freeText: "", // search string
    onlySelectedTimeRange: false, // show only events that lie in selected time range
    onlySelectedCreateTimeRange: false /* show only events that were created within
                                          selected time range */,
  },
  pinnedEvents: [], // array of event uids
  eventDetailsOpen: false, // event details is a modal dialog
  eventDetailsEventUID: "",
  labels: [], // array of labels
  comments: [], // array of comment objects
  theme: null,
};
