import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import { DELETE_BURGER, INCREASE_ITEM_EXTRA, SET_TOTAL, VEGGIE_BURGER } from "../../../provider/actions";

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
      {listTicketBurgers.map((burguer) => (
        <p key={burguer.id}>
                    <button
            className="RiDeleteBack2Fill"
            onClick={() => {
              handleVeggie(burguer.id);
            }}
          >
            🥦
          </button>
          <span>
            {`${burguer.name}, ${burguer.serving}. Medallon Extra x${burguer.extra}`}
            <button onClick={() => handleClickAdd(burguer.id)}>➕</button>
          </span>
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
      ))}
    </div>
  );
}
