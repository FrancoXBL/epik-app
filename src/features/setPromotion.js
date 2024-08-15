export default function setPromotion(state, payload) {
  const { ticket } = state;

  const newTicket = { ...ticket, total: payload };

  return { ...state, ticket: newTicket };
}
