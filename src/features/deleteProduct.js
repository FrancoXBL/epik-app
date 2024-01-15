export default function deleteProduct(state, payload) {
  let { ticket } = state;
  const index = ticket.listProducts.findIndex((item) => item.id === payload);
  ticket.listProducts.splice(index, 1);
  return { ...state, ticket };
}
