import { createContext, useState, useReducer } from "react";
import { items } from "../data/itemsList";

const initialState = {
  listItems: items,
  total: 0,
  client: {
    name: "Cliente",
    address: { street: "Calle", number: "Altura" },
  },
  listTicketBurguer: [],
  listTicketAggreggates: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_LIST_ITEMS":
      return { ...state, listItems: action.payload };
    case "SET_CLIENT":
      return { ...state, client: action.payload };
    case "SET_LIST_TICKET_BURGER":
      return { ...state, listTicketBurguer: action.payload };
    case "SET_LIST_TICKET_AGGREGATES":
      return { ...state, listTicketAggreggates: action.payload };
    case "SET_LIST_TICKET_BURGER":
      return { ...state, listTicketBurguer: action.payload };
    default:
      throw new Error();
  }
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
