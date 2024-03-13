export default function setIsTakeOut(state, payload) {
  state.ticket.isTakeOut = payload;
  return { ...state };
}
