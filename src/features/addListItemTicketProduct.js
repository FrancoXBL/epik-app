export default function addListItemTicketProduct(state, payload) {
  let { ticket } = state;
  ticket.listProducts.push(payload);
  return { ...state, ticket };
}
