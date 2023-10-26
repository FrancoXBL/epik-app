export default function addNewSale(state) {
  let { ticket, listDailySales, listDailyItemSale } = state;

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

    listDailyItemSale.push(addItemDailyItemSale);

    const addItemDailySales = { amount: ticket.total, type: "Efectivo" };
    listDailySales.push(addItemDailySales);

    ticket.total = 0;
    ticket.listBurguer = [];
    ticket.listAggreggates = [];
  }

  return { ...state, listDailySales, listDailyItemSale, ticket };
}
