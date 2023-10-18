export default function increaseItemExtra(state, payload) {
  console.log("increaseItemExtra");
  let { ticket } = state;
  ticket.listBurguer.map((item) => {
    if (item.id === payload) {
      item.extra = item.extra + 1;
    }
  });
  return { ...state, ticket };
}
