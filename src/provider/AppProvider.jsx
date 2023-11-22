import { createContext, useReducer } from "react";
import { items } from "../data/itemsList";
import { updateState } from "./actions";

const initialState = {
  listItems: items,
  ticket: {
    total: 0,
    client: {
      name: "",
      address: { street: "", number: "" },
    },
    listBurguer: [],
    listAggreggates: [],
  },
  listDailyItemSale: [],
  listDailyItemGasto: [],
  payMethods: ["efectivo", "credito", "transferencia", "debito", "promo", "qr"],
  delivery: ["Negro", "Nuevo"],
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
