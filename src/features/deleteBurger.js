export default function deleteBurger(state, payload) {
  let { ticket } = state;
  const index = ticket.listBurguer.findIndex((item) => item.id === payload);
  ticket.listBurguer.splice(index, 1);
  return { ...state, ticket };
}
