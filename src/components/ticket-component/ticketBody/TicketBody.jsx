import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import {
  DELETE_BURGER,
  INCREASE_ITEM_EXTRA,
  SET_TOTAL,
  VEGGIE_BURGER,
} from "../../../provider/actions";

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

  if (listTicketBurgers.length === 0) {
    return (
      <>
        <hr />
        <p>Hamburguesa</p>
      </>
    );
  }

  return (
    <div>
      <hr />
      {listTicketBurgers.map((burguer) => {
        console.log(burguer);
        return (
          <p className="pb-1" key={burguer.id}>
            <span>
              {`${burguer.name}, ${burguer.serving}${isVeggie(
                burguer.veggie
              )}. Medallon Extra x${burguer.extra}`}
              <button onClick={() => handleClickAdd(burguer.id)}>➕</button>
            </span>
            <span>{` ...$${burguer.price}`}</span>
            <button
              className="RiDeleteBack2Fill"
              onClick={() => {
                handleVeggie(burguer.id);
              }}
            >
              🥦
            </button>
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
