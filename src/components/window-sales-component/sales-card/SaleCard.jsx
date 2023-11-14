export function SaleCard({ saleItem }) {

  function isVeggie(condition){
    if(condition){
      return " V"
    }
    return ""
  }

  function wExtras(extra){
    if(extra === 0){
      return ""
    }
    return ` + ${extra}`
  }



  return (
    <div>
      <span>Cliente: {saleItem.client.name} - {saleItem.client.address.street} {saleItem.client.address.number} </span>
      <span>Total: {saleItem.amount} </span>
      <span>Pago en: {saleItem.payMethod}</span>
      <span>Cadete: {saleItem.cadete}</span>
    </div>
  );
}
