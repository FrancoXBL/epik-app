import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_SALE } from "../../../provider/actions";

export function HistorialCard({ saleCard }) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteClick = (id) => {
    dispatch({ type: DELETE_SALE, payload: { id } });
  };

  const isVeggie = (condition) => (condition ? " V" : "");

  const wExtras = (extra) => (extra === 0 ? "" : ` + ${extra}`);

  return (
    <>
      <div>
        <span>
          {saleCard.sale.ticket.client.name} - {saleCard.sale.ticket.client.address.street}{" "}
          {saleCard.sale.ticket.client.address.number}, ${saleCard.sale.ticket.total}
        </span>
        <span>{saleCard.payMethod}</span>
        <button>✏️</button>
        <button onClick={() => handleDeleteClick(saleCard.id)}>❌</button>
      </div>
    </>
  );
}
