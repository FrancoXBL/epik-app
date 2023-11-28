import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { ADD_NEW_SALE } from "../../provider/actions";
import { v4 as uuidv4 } from "uuid";
import { date as DateString } from "../../features/date"; // Suponiendo que tengas una función para obtener la fecha en formato dd/mm/aa

export function EndSaleButton() {
  const buttonStyles = "text-xl ml-1 p-4 rounded-md color-white bg-primary-100";

  const { dispatch, delivery } = useContext(AppContext);

  const [payMethod, setPayMethod] = useState("efectivo");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [deliveryCost, setDeliveryCost] = useState(0);

  useEffect(() => {
    setSelectedDelivery(delivery[0]);
  }, []);

  const handleClick = () => {
    dispatch({
      type: ADD_NEW_SALE,
      payload: {
        payMethod,
        delivery: { name: selectedDelivery, deliveryCost },
        id: uuidv4(),
        date: DateString(), // Usar la función para obtener la fecha en formato dd/mm/aa
      },
    });
  };

  return (
    <div>
      <label htmlFor="paymentMethod">Método de pago:</label>
      <select
        id="paymentMethod"
        onChange={(e) => setPayMethod(e.target.value)}
        value={payMethod}
      >
        <option value="efectivo">Efectivo</option>
        <option value="transferencia">Transferencia</option>
        <option value="debito">Débito</option>
        <option value="credito">Crédito</option>
        <option value="promo">Promo</option>
      </select>

      <label htmlFor="deliveryOption">Opción de entrega:</label>
      <select
        id="deliveryOption"
        onChange={(e) => setSelectedDelivery(e.target.value)}
        value={selectedDelivery}
      >
        {delivery.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="deliveryCost">Precio de envío:</label>
      <input
        id="deliveryCost"
        type="number"
        value={deliveryCost}
        onChange={(e) => setDeliveryCost(e.target.valueAsNumber)}
      />

      <button className={buttonStyles} onClick={handleClick}>
        TERMINAR VENTA
      </button>
    </div>
  );
}
