import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";

export function ExtrasCard({ extraItem }) {

  const {listTicketAggreggates, setListTicketAggreggates } = useContext(AppContext)

  function createExtraTicket(name, serving, price) {
    return { name, serving, price }
  }

  function agregarExtraTicket(item){
    return [...listTicketAggreggates, item]
  }

  return (
    <button
    onClick={() => {
      const sendItem = createExtraTicket(
        extraItem.name,
        extraItem.specs[0].serving, 
        extraItem.specs[0].price);
      const newArray = agregarExtraTicket(sendItem)
      setListTicketAggreggates(newArray)
    }}
     className="p-4 bg-primary-200 text-bg-200 m-2 rounded-md hover:bg-primary-100">
      {extraItem.name} - {extraItem.specs[0].serving} - <span>
        ${extraItem.specs[0].price}</span>
    </button>
  );
}
