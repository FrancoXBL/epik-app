export const SET_LIST_ITEMS = "SET_LIST_ITEMS";
export const SET_CLIENT = "SET_CLIENT";
export const ADD_LISTITEM_TICKET_PRODUCT = "ADD_LISTITEM_TICKET_PRODUCT";
export const ADD_LISTITEM_TICKET_EXTRAS = "ADD_LISTITEM_TICKET_EXTRAS";
export const SET_LIST_TICKET_EXTRAS = "SET_LIST_TICKET_EXTRAS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const DELETE_EXTRA = "DELETE_EXTRA";
export const INCREASE_ITEM_EXTRA = "INCREASE_ITEM_EXTRA";
export const SET_TOTAL = "SET_TOTAL";
export const ADD_NEW_SALE = "ADD_NEW_SALE";
export const VEGGIE_PRODUCT = "VEGGIE_PRODUCT";
export const DELETE_SALE = "DELETE_SALE";
export const ADD_LIST_GASTO = "ADD_LIST_GASTO";
export const SET_DELIVERY_COST = "SET_DELIVERY_COST";
export const SET_IS_TAKE_OUT = "SET_IS_TAKE_OUT";
export const ADD_WAITING_SALE = "ADD_WAITING_SALE"
export const RESET_TICKET = "RESET_TICKET"
export const DELETE_WAITING_SALE = "DELETE_WAITING_SALE"

import deleteProduct from "../features/deleteProduct.js";
import deleteExtra from "../features/deleteExtra.js";
import setListItems from "../features/setListItems.js";
import setClient from "../features/setClient.js";
import addListItemTicketProduct from "../features/addListItemTicketProduct.js";
import addListItemTicketExtras from "../features/addListItemTicketExtras.js";
import setListTicketExtras from "../features/addListItemTicketExtras.js";
import increaseItemExtra from "../features/increaseItemExtra.js";
import setTotal from "../features/setTotal.js";
import addNewSale from "../features/addNewSale.js";
import veggieProduct from "../features/veggieProduct.js";
import deleteSale from "../features/deleteSale.js";
import addListGastos from "../features/addListGastos.js";
import setDeliveryCost from "../features/setDeliveryCost.js";
import setIsTakeOut from "../features/setIsTakeOut.js";
import addItemWaitingSales from "../features/addItemWaitingSales.js";
import resetTicket from "../features/resetTicket.js";
import deleteWaitingSale from "../features/deleteWaitingSale.js";

const actions = {
  DELETE_WAITING_SALE: deleteWaitingSale,
  RESET_TICKET: resetTicket,
  ADD_WAITING_SALE: addItemWaitingSales,
  SET_DELIVERY_COST: setDeliveryCost,
  SET_TOTAL: setTotal,
  SET_LIST_ITEMS: setListItems,
  SET_CLIENT: setClient,
  ADD_LISTITEM_TICKET_PRODUCT: addListItemTicketProduct,
  ADD_LISTITEM_TICKET_EXTRAS: addListItemTicketExtras,
  SET_LIST_TICKET_EXTRAS: setListTicketExtras,
  DELETE_PRODUCT: deleteProduct,
  DELETE_EXTRA: deleteExtra,
  INCREASE_ITEM_EXTRA: increaseItemExtra,
  ADD_NEW_SALE: addNewSale,
  VEGGIE_PRODUCT: veggieProduct,
  DELETE_SALE: deleteSale,
  ADD_LIST_GASTO: addListGastos,
  SET_IS_TAKE_OUT: setIsTakeOut,
};

export function updateState(actionType, state, payload) {
  const action = actions[actionType];
  if (action) {
    return action(state, payload);
  } else {
    throw new Error(`Action ${actionType} is not defined in actions.js`);
  }
}
