export const SET_LIST_ITEMS = "SET_LIST_ITEMS";
export const SET_CLIENT = "SET_CLIENT";
export const ADD_LISTITEM_TICKET_BURGER = "ADD_LISTITEM_TICKET_BURGER";
export const ADD_LISTITEM_TICKET_AGGREGGATES = "ADD_LISTITEM_TICKET_AGGREGGATES";
export const SET_LIST_TICKET_AGGREGATES = "SET_LIST_TICKET_AGGREGATES";
export const DELETE_BURGER = "DELETE_BURGER";
export const DELETE_AGGREGGATE = "DELETE_AGGREGGATE";
export const INCREASE_ITEM_EXTRA = "INCREASE_ITEM_EXTRA";
export const SET_TOTAL = "SET_TOTAL";
export const ADD_NEW_SALE = "ADD_NEW_SALE"
export const VEGGIE_BURGER = "VEGGIE_BURGER"
export const DELETE_SALE = "DELETE_SALE"
export const ADD_LIST_GASTO = "ADD_LIST_GASTO"


import deleteBurger from "../features/deleteBurger.js";
import deleteAggreggate from "../features/deleteAggreggate.js"
import setListItems from "../features/setListItems.js";
import setClient from "../features/setClient.js";
import addListItemTicketBurguer from "../features/addListItemTicketBurguer.js";
import addListItemTicketAggreggates from "../features/addListItemTicketAggregates.js";
import setListTicketAggregates from "../features/addListItemTicketBurguer.js";
import increaseItemExtra from "../features/increaseItemExtra.js";
import setTotal from "../features/setTotal.js";
import addNewSale from "../features/addNewSale.js";
import veggieBurger from "../features/veggieBurger.js"
import deleteSale from "../features/deleteSale.js"
import addListGastos  from "../features/addListGastos.js";

const actions = {
  SET_TOTAL: setTotal,
  SET_LIST_ITEMS: setListItems,
  SET_CLIENT: setClient,
  ADD_LISTITEM_TICKET_BURGER: addListItemTicketBurguer,
  ADD_LISTITEM_TICKET_AGGREGGATES: addListItemTicketAggreggates,
  SET_LIST_TICKET_AGGREGATES: setListTicketAggregates,
  DELETE_BURGER: deleteBurger,
  DELETE_AGGREGGATE: deleteAggreggate,              
  INCREASE_ITEM_EXTRA: increaseItemExtra,
  ADD_NEW_SALE: addNewSale,
  VEGGIE_BURGER: veggieBurger,
  DELETE_SALE: deleteSale,
  ADD_LIST_GASTO: addListGastos
};

export function updateState(actionType, state, payload) {
  const action = actions[actionType];
  if (action) {
    return action(state, payload);
  } else {
    throw new Error(`Action ${actionType} is not defined in actions.js`);
  }
}
