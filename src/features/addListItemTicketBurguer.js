export default function addListItemTicketBurguer(state, payload) {
  let { ticket } = state;
  ticket.listBurguer.push(payload);
  ticket.total = ticket.listBurguer.reduce((acc, item) => {
    return parseInt(acc) + parseInt(item.price);
  }, 0);
  console.log(ticket);
  return { ...state, ticket };
}
