import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_EXTRA, SET_TOTAL } from "../../../provider/actions";

/**
 * Show the list of extras in the current sale
 * @param {Array} listTicketExtras - List of extras in the current sale inside of ticket
 */
export function TicketExtra({ isPrintTicket }) {
  const { ticket, dispatch } = useContext(AppContext);

  function handleDelete(id) {
    dispatch({ type: DELETE_EXTRA, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  function deleteIcon(condition, id){
    if (condition){
      return ''
    }
    return (<button
      className="RiDeleteBack2Fill"
      onClick={() => {
        handleDelete(id);
      }}
    >
      ❌
    </button>)
  }

  if (ticket.listExtras.length === 0) {
    return (
      <>
        <hr />
        <p>Sin extras!</p>
      </>
    );
  }

  return (
    <>
      <hr />
      {ticket.listExtras.map((extra) => (
        <div>
          <span className="capitalize">
            {extra.name} - {extra.serving} - ${extra.price}
          </span>{" "}
          { deleteIcon(isPrintTicket, extra.id) }
        </div>
      ))}
    </>
  );
}
