export default function addListItemTicketProduct(state, payload) {
  let { ticket } = state;
  ticket.listProducts.push(payload);
  console.log(payload)
  return { ...state, ticket };
}
