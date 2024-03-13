import { createContext, useReducer } from "react";
import { updateState } from "./actions";

const initialState = {
  ticket: {
    total: 0,
    client: {
      name: "",
      address: { street: "", number: "" },
    },
    deliveryCost: 0,
    isTakeOut: undefined,
    listProducts: [],
    listExtras: [],
    orderNumber: Math.floor(Math.random() * 9000) + 1000,
  },
  waitingSales: []
};

function reducer(state, action) {
  return updateState(action.type, state, action.payload);
}

export const AppContext = createContext();

export function AppContextProvider(props) {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
