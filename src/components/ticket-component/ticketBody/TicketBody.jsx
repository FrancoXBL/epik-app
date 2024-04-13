import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import {
  DELETE_PRODUCT,
  SET_TOTAL,
  VEGGIE_PRODUCT,
} from "../../../provider/actions";
import { TicketDivider } from "../TicketComponent";
import toast from "react-hot-toast";



/**
 * Show the list of burgers in the current sale
 * @param {Array} listTicketBurgers - List of burgers in the current sale inside of tickets
 */
export function TicketBody({ listTicketProducts, isPrintTicket }) {
  const { dispatch } = useContext(AppContext);

  function deleteIcon(condition, id){
    if (condition){
      return ''
    }
    return (<button
      className="RiDeleteBack2Fill"
      onClick={() => {
        handleDelete(id)
        toast.error("Producto eliminado")
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

  const showResume = (p) => {
    return `${p.name} ${p.serving} ${p.isVeggie ? "Veg" : "" } ${p.observations ? `${p.observations}` : ""}  $${p.price}`
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
          <div className="flex justify-between gap-3 hover:bg-gray-1 rounded-sm">
            <>
            { showResume(p) }
            </>
            <>
            { deleteIcon(isPrintTicket, p.id) }
            </>
          </div>
        );
      })}
    </div>
  );
}
