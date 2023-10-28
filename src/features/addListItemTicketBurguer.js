export default function addListItemTicketBurguer(state, payload) {
  let { ticket } = state;
  ticket.listBurguer.push(payload);
  return { ...state, ticket };
}
