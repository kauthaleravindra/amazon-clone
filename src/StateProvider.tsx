import React, { useContext, useReducer, createContext } from "react";
import reducer, { initialState } from "./Reducer";
export const StateContext = createContext([{} as any]);

export const StateProvider: React.FC = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//this is how we use the context in the react
export const useStateValue = () => useContext(StateContext);
