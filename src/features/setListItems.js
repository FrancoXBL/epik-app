export default function setListItems(state, action) {
  return { ...state, listItems: action.payload };
}
