export function TiketHeader({ clientHeader }) {
  return (
    <div>
      <p className="text-center"> 🍔 TICKET VENTA 🍔 </p>
      <hr />
      <span className="capitalize block font-inherit">Cliente: {clientHeader.name} 👑</span>
      <span className="capitalize block">
        Direccion: {clientHeader.address.street} {clientHeader.address.number} 🏰
      </span>
    </div>
  );
}
