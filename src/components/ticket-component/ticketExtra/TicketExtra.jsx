import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_EXTRA, SET_TOTAL } from "../../../provider/actions";
import { TicketDivider } from "../TicketComponent";

/**
 * Show the list of extras in the current sale
 * @param {Array} listTicketExtras - List of extras in the current sale inside of ticket
 */
export function TicketExtra({ listTicketExtras, isPrintTicket }) {
  const { dispatch } = useContext(AppContext);

  function handleDelete(id) {
    dispatch({ type: DELETE_EXTRA, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  function deleteIcon(condition, id) {
    if (condition) {
      return "";
    }
    return (
      <button
        className="RiDeleteBack2Fill"
        onClick={() => {
          handleDelete(id);
        }}
      >
        ❌
      </button>
    );
  }

  if (listTicketExtras.length === 0) {
    return (
      <>
        <p>Sin extras!</p>
      </>
    );
  }

  return (
    <>
      {listTicketExtras.map((p) => {
        return (
          <p className="pb-1" key={p.id}>
            <span>{`${p.name} ${p.serving}`}</span>
            <span>{` $${p.price}`}</span>
            {deleteIcon(isPrintTicket, p.id)}
          </p>
        );
      })}
    </>
  );
}
