export function TicketBody({ listTicketBurgers }) {
  
  if (listTicketBurgers.length === 0) {
    return (
      <>
        <hr />
        <p>Hamburguesa</p>
      </>
    );
  }

  return (
    <div>
      <hr />
      {listTicketBurgers.map((burguer) => (
        <p>
          <span>{burguer.name}</span> <span>{burguer.serving}</span> - $
          <span>{burguer.price}</span>
        </p>
      ))}
    </div>
  );
}
