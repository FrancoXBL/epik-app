export default function deleteBurger(state, payload) {
  let { ticket } = state;
  const index = ticket.listBurguer.findIndex((item) => item.id === payload);
  console.log("nya",index);
  ticket.listBurguer.splice(index, 1);
  return { ...state, ticket };
}
