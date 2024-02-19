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
export function TicketBody({ listTicketProducts, isPrintTicket }) {
  const { dispatch } = useContext(AppContext);

  console.log(listTicketProducts)

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

  function handleDelete(id) {
    dispatch({ type: DELETE_PRODUCT, payload: id });
    dispatch({ type: SET_TOTAL, payload: undefined });
  }

  function handleVeggie(id) {
    dispatch({ type: VEGGIE_PRODUCT, payload: id });
  }


  return (
    <div>
      <p className="flex justify-between">
        <span>Descripcion</span>
        <span>Precio</span>
      </p>
      <TicketDivider />
      {listTicketProducts.map((p) => {
        return (
          <p className="pb-1" key={p.id}>
            <span>{`${p.name} ${p.serving}`}</span>
            <span>{` ${p.isVeggie ? "Veg" : ""}`}</span>
            <span>{` ${p.observations ? `${p.observations}` : ""}`}</span>
            <span>{` $${p.price}`}</span>
            { deleteIcon(isPrintTicket, p.id) }
          </p>
        );
      })}
    </div>
  );
}
