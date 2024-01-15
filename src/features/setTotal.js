export default function setTotal(state, payload) {

  let { ticket } = state;

  let total = 0;

  ticket.listProducts.map((item) => {
    total += parseInt(item.price);
  });

  ticket.listExtras.map((item) => {
    total += parseInt(item.price);
  });

  if(Number.isInteger(ticket.deliveryCost)){
    total += parseInt(ticket.deliveryCost)
  }

  ticket.total = total;

  return { ...state, ticket };
}
