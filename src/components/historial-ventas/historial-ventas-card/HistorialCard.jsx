export function HistorialCard({ saleCard  }) {
  return (
    <div>
      <span>
        {saleCard.client.name} - {saleCard.client.address.street}{" "}
        {saleCard.client.address.number}
      </span>
      <span>{saleCard.payMethod}</span>
      <span>{saleCard.amount}</span>
      <button>✏️</button>
      <button>❌</button>
    </div>
  );
}
