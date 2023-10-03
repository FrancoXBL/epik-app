export function TiketHeader({ clientHeader }) {
  return (
    <div>
      <p >--- 🍔 TICKET VENTA 🍔 ---</p>
      <hr />
      <span className="font-inherit">Cliente:{clientHeader.name}</span>
      <hr />
      <span className="">
        Direccion: {clientHeader.address.street} {clientHeader.address.number}
      </span>
    </div>
  );
}
