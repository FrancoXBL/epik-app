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
          {saleCard.client.name} - {saleCard.client.address.street}{" "}
          {saleCard.client.address.number}
        </span>
        {saleCard.list.map((item, index) => (
          <span key={index}>
            {item.name},{isVeggie(item.veggie)} {item.serving}{" "}
            {wExtras(item.extra) || ""} ...${item.price}
          </span>
        ))}
        <span>{saleCard.payMethod}</span>
        <span>{saleCard.amount}</span>
        <button>✏️</button>
        <button onClick={() => handleDeleteClick(saleCard.id)}>❌</button>
      </div>
    </>
  );
}
