export function SaleCard({ saleItem }) {
  console.log(saleItem);
  return (
    <div>
      {saleItem.list.map((item) => (
        <span>
          {item.name}, {item.serving} -${item.price}
        </span>
      ))}
      <span>Total: {saleItem.amount}</span>
      <span>Pago en: {saleItem.payMethod}</span>
    </div>
  );
}
