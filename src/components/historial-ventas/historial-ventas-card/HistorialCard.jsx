import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_SALE } from "../../../provider/actions";

export function HistorialCard({ saleCard }) {

  const { dispatch } = useContext(AppContext)

  const handleDeleteClick = (id) => {
    dispatch({type: DELETE_SALE, payload: {id}})
  }

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
      
      <span>
        {saleCard.client.name} - {saleCard.client.address.street}{" "}
        {saleCard.client.address.number}
      </span>
      {saleCard.list.map((item) => (
        <span>
          {item.name},{isVeggie(item.veggie)} {item.serving} {wExtras(item.extra) === undefined ?  wExtras(item.extra) : ""} ...${item.price}
        </span>
      ))}
      <span>{saleCard.payMethod}</span>
      <span>{saleCard.amount}</span>
      <button>✏️</button>
      <button onClick={() => handleDeleteClick(saleCard.id)}>❌</button>
    </div>
  );
}
