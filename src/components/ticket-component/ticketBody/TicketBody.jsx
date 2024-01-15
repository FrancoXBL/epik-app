import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import {
  DELETE_PRODUCT,
  INCREASE_ITEM_EXTRA,
  SET_TOTAL,
  VEGGIE_PRODUCT,
} from "../../../provider/actions";
import { TicketDivider } from "../TicketComponent";


/**
 * Show the list of burgers in the current sale
 * @param {Array} listTicketBurgers - List of burgers in the current sale inside of tickets
 */
export function TicketBody({ listTicketBurgers, isPrintTicket }) {
  const { dispatch } = useContext(AppContext);

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

  function handleClickAdd(id) {
    dispatch({ type: INCREASE_ITEM_EXTRA, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }
  function handleDelete(id) {
    dispatch({ type: DELETE_PRODUCT, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  function handleVeggie(id) {
    dispatch({ type: VEGGIE_PRODUCT, payload: id });
  }

  function isVeggie(condition) {
    if (condition) {
      return " V";
    }
    return "";
  }

  return (
    <div>
      <p className="flex justify-between">
        <span>Descripcion</span>
        <span>Precio</span>
      </p>
      <TicketDivider />
      {listTicketBurgers.map((burguer) => {
        return (
          <p className="pb-1" key={burguer.id}>
            <span>{`${burguer.name}, ${burguer.serving}`}</span>
            <span>{` ...$${burguer.price}`}</span>
            { deleteIcon(isPrintTicket, burguer.id) }
          </p>
        );
      })}
    </div>
  );
}
