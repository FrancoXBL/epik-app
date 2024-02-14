import { v4 as uuidv4 } from "uuid";

export default function addItemWaitingSales(state, payload) {
  const { waitingSales, ticket } = state;

  waitingSales.push({ ticket, id: uuidv4() });

  return {
    ticket: {
      total: 0,
      client: {
        name: "",
        address: { street: "", number: "" },
      },
      deliveryCost: 0,
      isTakeOut: false,
      listProducts: [],
      listExtras: [],
    },
    waitingSales,
  };
}
