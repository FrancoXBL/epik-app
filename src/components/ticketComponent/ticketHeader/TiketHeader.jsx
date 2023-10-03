export function TiketHeader({clientHeader}) {
  return (
    <div>
      <p className="ticketTitle">--- 🍔 TICKET VENTA 🍔 ---</p>
      <hr />
      <span className="clientName">Cliente:{clientHeader.name}</span>
      <hr />
      <span className="clientAddress">Direccion: {clientHeader.address.street} {clientHeader.address.number}</span>
    </div>
  );
}
