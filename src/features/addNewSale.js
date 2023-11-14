export default function addNewSale(state, {payMethod, delivery}) {
  let { ticket, listDailyItemSale } = state;

  if (ticket.listBurguer.length === 0 && ticket.listAggreggates.length === 0) {
    alert("asd");
  } else {
    const addItemDailyItemSale = [];

    console.log(delivery)

    ticket.listBurguer.map((item) => {

      const sendItem = {
        name: item.name,
        serving: item.serving,
        price: item.price,
        veggie: item.veggie,
        extra: item.extra
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
      payMethod: payMethod,
      client: ticket.client,
      cadete: delivery
    });

    console.log(listDailyItemSale)


    ticket.total = 0;
    ticket.listBurguer = [];
    ticket.listAggreggates = [];
    ticket.client = { name: "", address: { street: "", number: "" } };
  }

  return { ...state, listDailyItemSale, ticket };
}
