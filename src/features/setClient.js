export default function setClient(state, action) {
  return { ...state, client: action.payload };
}
