import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_AGGREGGATE, SET_TOTAL } from "../../../provider/actions";

export function TicketExtra() {
  const { ticket, dispatch } = useContext(AppContext);

  console.log("/////// ticket desde ticket extra ->", ticket )

  function handleClick(id) {
       dispatch({type: DELETE_AGGREGGATE, payload: id})
       dispatch({type: SET_TOTAL, payload: undefined})
    };

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
