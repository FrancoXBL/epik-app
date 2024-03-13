export default function verifyInfoSale(ticket){

    console.log("Entreee")
    // Verifica si el nombre contiene solo letras y espacios
  if (!/^[A-Za-z\s]+$/.test(ticket.client.name) || ticket.client.name === '') {
    return "El nombre del cliente es obligatorio y solo debe contener letras y espacios.";
  }
  
  // Verifica si la dirección (calle) contiene solo letras
  if (!/^[A-Za-z0-9\s]+$/.test(ticket.client.address.street) && ticket.isTakeOut === true) {
    return "La direccion completa del pedido es obligatoria.";
  }
  
  // Si isTakeOut es verdadero, verifica que el costo de entrega sea mayor que 0
  if (ticket.isTakeOut && ticket.deliveryCost <= 0) {
    return "Indique el monto del envio.";
  }
  
  // Verifica que al menos una de las listas tenga al menos un elemsto
  if (ticket.listProducts.length === 0 && ticket.listExtras.length === 0) {
    return "Debe haber al menos un producto o un extra en el pedido.";
  }
  
  // Si todas las validaciones son exitosas
  return true;
}
