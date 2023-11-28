
import toast from "react-hot-toast";
export default function addNewSale(state, {payMethod, delivery, id, date}) {
  let { ticket, listDailyItemSale } = state;
  if (ticket.listBurguer.length === 0 && ticket.listAggreggates.length === 0) {
    toast.error("No hay productos en la lista", {
      icon: "😥",
    });
  } else {
    const addItemDailyItemSale = [];
    ticket.listBurguer.map((item) => {
      const sendItem = {
        name: item.name,
        serving: item.serving,
        price: item.price,
        veggie: item.veggie,
        extra: item.extra,
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
      delivery,
      id,
      date
    });


    ticket.total = 0;
    ticket.listBurguer = [];
    ticket.listAggreggates = [];
    ticket.client = { name: "", address: { street: "", number: "" } };
    toast.success("Venta realizada con éxito", {
      icon: "👏",
    });
  }

  console.log(listDailyItemSale)

  return { ...state, listDailyItemSale, ticket };
}
