export default function addNewSale(state) {
  let { ticket, listDailyItemSale } = state;

  if (ticket.listBurguer.length === 0 && ticket.listAggreggates.length === 0) {
    alert("asd");
  } else {
    const addItemDailyItemSale = [];

    ticket.listBurguer.map((item) => {
      const sendItem = {
        name: item.name,
        serving: item.serving,
        price: item.price,
      };
      addItemDailyItemSale.push(sendItem);
    });

    ticket.listAggreggates.map((item) => {
      const sendItem = {
        name: item.name,
        serving: item.serving,
        price: item.price,
      };
      addItemDailyItemSale.push(sendItem);
    });

    listDailyItemSale.push({
      list: addItemDailyItemSale,
      amount: ticket.total,
      payMethod: "Efectivo",
      client: ticket.client,
    });

    ticket.total = 0;
    ticket.listBurguer = [];
    ticket.listAggreggates = [];
    ticket.client = { name: "", address: { street: "", number: "" } };
  }

  return { ...state, listDailyItemSale, ticket };
}
