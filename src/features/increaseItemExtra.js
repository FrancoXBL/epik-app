import { carneExtraValue } from "../data/itemsList";

export default function increaseItemExtra(state, payload) {
  let { ticket } = state;
  ticket.listBurguer.map((item) => {
    
    if (item.id === payload) {
      const OLD_PRICE = parseInt(item.price);
      const NEW_PRICE = OLD_PRICE + carneExtraValue;
      item.extra = item.extra + 1;
      item.price = NEW_PRICE.toString();
    }
  });
  return { ...state, ticket };
}
