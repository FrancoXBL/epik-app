export default function setListTicketBurguer(state, payload) {
  console.log(payload);
  return { ...state, listTicketBurguer: payload };
}
