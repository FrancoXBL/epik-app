import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { ADD_LISTITEM_TICKET_AGGREGGATES, SET_TOTAL } from "../../../provider/actions";

export function ExtrasCard({extraItem}) {
  const { ticket, dispatch } = useContext(AppContext);

  function createExtraTicket(name, serving, price, id) {
    return { name, serving, price, id };
  }

  const handleClick = () => {
    const sendItem = createExtraTicket(
      extraItem.name,
      extraItem.specs[0].serving,
      extraItem.specs[0].price,
      ticket.listAggreggates.length + 1
    );
    dispatch({type:ADD_LISTITEM_TICKET_AGGREGGATES, payload: sendItem})
    dispatch({type: SET_TOTAL, payload: undefined})
  }
  

  return (
    <button
      onClick={() => {handleClick()}}
      className="p-4 bg-primary-200 text-bg-200 m-2 rounded-md hover:bg-primary-100"
    >
      {extraItem.name} - {extraItem.specs[0].serving} -{" "}
      <span>${extraItem.specs[0].price}</span>
    </button>
  );
}
