import { useContext, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { ADD_NEW_SALE } from "../../provider/actions";

export function EndSaleButton() {
  const botonCapo =
    "text-2xl ml-1 w-40 h-20 rounded-md color-white bg-primary-100";

  const { dispatch } = useContext(AppContext);

  const [payMethod, setPayMethod] = useState('')

  const handleClick = () => {
    dispatch({ type: ADD_NEW_SALE, payload: payMethod });
  };

  return (
    <>
        <select name="" id="" placeholder="Seleccione metodo de pago"
        onChange={e => setPayMethod(e.target.value)}>
            <option value="efectivo">Efectivo</option>
            <option value="transferencia">Transferencia</option>
            <option value="debito">Debito</option>
            <option value="credito">Credito</option>
            <option value="promo">Promo</option>
        </select>
      <button
        className={`${botonCapo}`}
        onClick={() => {
          handleClick();
        }}
      >
        TERMINAR VENTA
      </button>
    </>
  );
}
