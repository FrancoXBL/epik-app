export default function ModalInfoSale({ close, sale }) {
  console.log(sale);
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white border rounded-lg shadow-2xl p-24px"
        style={{ minWidth: "600px" }}
      >
        <div className="w-full m-auto text-3xl bg-gray-1 rounded-xl p-24px">
          <h1 className="text-center">👑{sale.sale.ticket.client.name} #{sale.sale.ticket.orderNumber}👑</h1>
        </div>
        <div className="w-full m-auto text-2xl bg-gray-1 rounded-xl p-16px mt-1">
          <h1 className="text-center">
            {sale.sale.ticket.client.address.street == ""
              ? "Local"
              : sale.sale.ticket.client.address.street + ' Envio: $' + sale.sale.ticket.deliveryCost}
          </h1>
        </div>
        <div className="w-full m-auto text-lg bg-gray-1 rounded-xl p-16px mt-2 block border-2">
  {sale.sale.ticket.listProducts && sale.sale.ticket.listProducts.length > 0 ? (
    sale.sale.ticket.listProducts.map((i) => (
      <div key={i.name + i.serving}>
        {i.type} {i.name} {i.serving} {i.isVeggie ? "veggie" : ""} - ${i.price}
      </div>
    ))
  ) : (
    <div>Sin productos</div>
  )}
</div>
<div className="w-full m-auto text-lg bg-gray-1 rounded-xl p-16px mt-2 block border-2">
  {sale.sale.ticket.listExtras && sale.sale.ticket.listExtras.length > 0 ? (
    sale.sale.ticket.listExtras.map((i) => (
      <div key={i.name + i.serving}>
        {i.name} {i.serving} {i.isVeggie ? "veggie" : ""} - ${i.price}
      </div>
    ))
  ) : (
    <div>Sin extras</div>
  )}
</div>

        <div className="w-full m-auto text-3xl bg-gray-1 rounded-xl p-24px mt-3">
          <h1 className="text-center">Total: ${sale.sale.ticket.total} en {sale.payMethod}</h1>
        </div>
      </div>
    </div>
  );
}
