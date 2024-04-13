export default function setSurcharge(state, payload) {
  const { ticket } = state;

  const newTicket = { ...ticket, total: Math.floor(ticket.total * payload) };

  return { ...state, ticket: newTicket };
}
