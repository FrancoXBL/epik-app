import { createContext, useReducer } from "react";
import { items } from "../data/itemsList";
import {
  updateState,
  SET_CLIENT,
  SET_LIST_ITEMS,
  SET_LIST_TICKET_AGGREGATES,
  ADD_LISTITEM_TICKET_BURGER,
  DELETE_BURGER,
} from "./actions";

const initialState = {
  listItems: items,
  ticket: {
    total: 0,
    client: {
      name: "Cliente",
      address: { street: "Calle", number: "Altura" },
    },
    listBurguer: [],
    listAggreggates: [],
  },
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
