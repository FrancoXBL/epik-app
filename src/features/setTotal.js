export default function setTotal(state, payload) {

  let { ticket } = state;

  let total = 0;

  ticket.listBurguer.map((item) => {
    total += parseInt(item.price);
  });

  ticket.listAggreggates.map((item) => {
    total += parseInt(item.price);
  });

  if(Number.isInteger(ticket.deliveryCost)){
    total += parseInt(ticket.deliveryCost)
  }

  ticket.total = total;

  return { ...state, ticket };
}
