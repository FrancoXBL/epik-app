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
    deliveryCost: 0,
    isTakeOut: false,
    listProducts: [{
      "name": "epika", 
      "type": "burger",
      "serving": "doble", 
      "price": 2800, 
      "veggie": false, 
      "extra": 0
  }],
    listExtras: [{
      "name":"cheddar",
      "price":3000,
      "serving":"potecito 200g"
    }],
  },
  listDailyItemSale: [],
  listDailyItemGasto: [],
  payMethods: ["efectivo", "credito", "transferencia", "debito", "promo", "qr"],
  delivery: [{name:"Negro", minPayment: 3000}],
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
