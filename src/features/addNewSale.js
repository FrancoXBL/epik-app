
import toast from "react-hot-toast";
export default function addNewSale(state, {payMethod, delivery, id, date}) {
  let { ticket, listDailyItemSale } = state;
  if (ticket.listProducts.length === 0 && ticket.listExtras.length === 0) {
    toast.error("No hay productos en la lista", {
      icon: "😥",
    });
  } else {
    const addItemDailyItemSale = [];
    ticket.listProducts.map((item) => {
      const sendItem = {
        name: item.name,
        serving: item.serving,
        price: item.price,
        veggie: item.veggie,
        extra: item.extra,
      };
      addItemDailyItemSale.push(sendItem);
    });

    ticket.listExtras.map((item) => {
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
    ticket.listProducts = [];
    ticket.listExtras = [];
    ticket.client = { name: "", address: { street: "", number: "" } };
    ticket.orderNumber = Math.floor(Math.random() * 9000) + 1000,
    toast.success("Venta realizada con éxito", {
      icon: "👏",
    });
  }

  console.log(listDailyItemSale)

  return { ...state, listDailyItemSale, ticket };
}
