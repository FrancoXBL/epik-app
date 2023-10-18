import { createContext, useReducer } from "react";
import { items } from "../data/itemsList";
import { updateState, SET_CLIENT, SET_LIST_ITEMS, SET_LIST_TICKET_AGGREGATES, ADD_LISTITEM_TICKET_BURGER, DELETE_BURGER} from "./actions";

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
  switch (action.type) {
    case SET_LIST_ITEMS:
    case SET_CLIENT:
    case ADD_LISTITEM_TICKET_BURGER:
    case SET_LIST_TICKET_AGGREGATES:
    case DELETE_BURGER:
      return updateState(action.type, state, action.payload);
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
