export default function resetTicket(state){
    return ({...state, ticket: {
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
      },})
}