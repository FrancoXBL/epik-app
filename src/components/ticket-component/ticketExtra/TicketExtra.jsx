import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { DELETE_EXTRA, SET_TOTAL } from "../../../provider/actions";
import toast from "react-hot-toast";

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
          toast.error("Extra eliminado")
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

  function showResume(p) {
    return `${p.name} ${p.serving} $${p.price}`;
  }

  return (
    <>
      {listTicketExtras.map((p) => {
        return (
          <div className="flex justify-between gap-3 hover:bg-gray-1 rounded-sm">
            <>{showResume(p)}</>
            <>{deleteIcon(isPrintTicket, p.id)}</>
          </div>
        );
      })}
    </>
  );
}
