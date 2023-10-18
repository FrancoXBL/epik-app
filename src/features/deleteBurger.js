export default function deleteBurger(state, payload) {
  console.log("/////////////////", state)
  let { ticket } = state;
  const index = ticket.listBurguer.findIndex((item) => item.id === payload);
  console.log("nya",index);
  ticket.listBurguer.splice(index, 1);
  return { ...state, ticket };
}
