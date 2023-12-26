import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import {
  DELETE_BURGER,
  INCREASE_ITEM_EXTRA,
  SET_TOTAL,
  VEGGIE_BURGER,
} from "../../../provider/actions";
import { TicketDivider } from "../TicketComponent";
/**
 * Show the list of burgers in the current sale
 * @param {Array} listTicketBurgers - List of burgers in the current sale inside of tickets
 */
export function TicketBody({ listTicketBurgers }) {
  const { dispatch } = useContext(AppContext);

  function handleClickAdd(id) {
    dispatch({ type: INCREASE_ITEM_EXTRA, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }
  function handleDelete(id) {
    dispatch({ type: DELETE_BURGER, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  function handleVeggie(id) {
    dispatch({ type: VEGGIE_BURGER, payload: id });
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
        console.log(burguer);
        return (
          <p className="pb-1" key={burguer.id}>
            <span>{`${burguer.name}, ${burguer.serving}`}</span>
            <span>{` ...$${burguer.price}`}</span>
            <button
              className="RiDeleteBack2Fill"
              onClick={() => {
                handleDelete(burguer.id);
              }}
            >
              ❌
            </button>
          </p>
        );
      })}
    </div>
  );
}
