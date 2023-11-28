import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { ADD_NEW_SALE } from "../../provider/actions";
import { v4 as uuidv4, validate } from "uuid";

/**
 * Show the button to end the sale
 */
export function EndSaleButton() {
  const buttonStyles = "text-xl ml-1 p-4 rounded-md color-white bg-primary-100";

  const { dispatch, delivery } = useContext(AppContext);

  const [payMethod, setPayMethod] = useState("efectivo");

  const [cadete, setCadete] = useState("");

  useEffect(() => {
    setCadete(delivery[0]);
  }, []);

  const [deliveryCost, setDeliveryCost] = useState(0);

  const handleClick = () => {
    dispatch({
      type: ADD_NEW_SALE,
      payload: {
        payMethod,
        delivery: { name: cadete, deliveryCost },
        id: uuidv4(),
      },
    });
  };

  return (
    <>
      <select
        placeholder="Seleccione metodo de pago"
        onChange={(e) => setPayMethod(e.target.value)}
      >
        <option value="efectivo">Efectivo</option>
        <option value="transferencia">Transferencia</option>
        <option value="debito">Debito</option>
        <option value="credito">Credito</option>
        <option value="promo">Promo</option>
      </select>
      <select
        placeholder="Seleccione el cadete"
        onChange={(e) => setCadete(e.target.value)}
      >
        {delivery.map((i) => (
          <option value={i}>{i}</option>
        ))}
      </select>
      <label htmlFor="">Precio envio:</label>
      <input
        type="number"
        onChange={(e) => {
          setDeliveryCost(e.target.valueAsNumber);
        }}
      />
      <button
        className={`${buttonStyles}`}
        onClick={() => {
          handleClick();
        }}
      >
        TERMINAR VENTA
      </button>
    </>
  );
}
