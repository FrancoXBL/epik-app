import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_AGGREGGATE, SET_TOTAL } from "../../../provider/actions";

/**
 * Show the list of extras in the current sale
 * @param {Array} listTicketExtras - List of extras in the current sale inside of ticket
 */
export function TicketExtra() {
  const { ticket, dispatch } = useContext(AppContext);

  function handleClick(id) {
    dispatch({ type: DELETE_AGGREGGATE, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  if (ticket.listAggreggates.length === 0) {
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
      {ticket.listAggreggates.map((extra) => (
        <div>
          <span className="capitalize">
            {extra.name} - {extra.serving} - ${extra.price}
          </span>{" "}
          <button onClick={() => handleClick(extra.id)}>❌</button>
        </div>
      ))}
    </>
  );
}
