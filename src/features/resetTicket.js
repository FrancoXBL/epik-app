export default function resetTicket(state){
  document.getElementById('nombreCliente').value = ''
  document.getElementById('direccion').value = ''
  document.getElementById('nombreCliente').ariaPlaceholder = 'Nombre Cliente'
  document.getElementById('direccion').ariaPlaceholder = 'Direccion'
    return ({...state, ticket: {
        total: 0,
        client: {
          name: "",
          address: { street: "", number: "" },
        },
        deliveryCost: 0,
        isTakeOut: false,
        listProducts: [],
        listExtras: [],
        orderNumber: Math.floor(Math.random() * 9000) + 1000,
      },})
}