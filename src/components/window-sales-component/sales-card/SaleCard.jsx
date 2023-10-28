export function SaleCard({ saleItem }) {
  console.log(saleItem);

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
      {saleItem.list.map((item) => (
        <span>
          {item.name},{isVeggie(item.veggie)} {item.serving} {wExtras(item.extra)} ...${item.price}
        </span>
      ))}
      <span>Total: {saleItem.amount}</span>
      <span>Pago en: {saleItem.payMethod}</span>
    </div>
  );
}
