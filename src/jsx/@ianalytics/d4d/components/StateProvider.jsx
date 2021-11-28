import React, { createContext, useContext, useReducer } from "react";

import defaultState from "/@ianalytics/d4d/defaultState";
import reducer from "/@ianalytics/d4d/actions/index";

// Context object. Default value is optional first argument. only used,
// when subscribed component is not inside a provider.
const StateContext = createContext();

// Just a convenient shortcut
export const useStateValue = () => useContext(StateContext);

// State provider
export default function StateProvider({ children }) {
	// console.log("inside state provider")
  return (
    <StateContext.Provider value={useReducer(reducer, defaultState)}>
      {children}
    </StateContext.Provider>
  );
}
