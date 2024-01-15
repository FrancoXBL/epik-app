export default function setIsTakeOut(state, payload) {
  state.ticket.isTakeOut = payload;
  console.log(state.ticket);
  return { ...state };
}
