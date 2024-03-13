export default function deleteWaitingSale(state, payload){
    const { waitingSales } = state

    const newList = waitingSales.filter((sale) => sale.id !== payload )

    return {
        ticket: {
          total: 0,
          client: {
            name: "",
            address: { street: "", number: "" },
          },
          deliveryCost: 0,
          isTakeOut: undefined,
          listProducts: [],
          listExtras: [],
          orderNumber: Math.floor(Math.random() * 9000) + 1000,
        },
        waitingSales: newList,
      };
}