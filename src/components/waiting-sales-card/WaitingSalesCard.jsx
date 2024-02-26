import { useContext, useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../constants/api";
import { AppContext } from "../../provider/AppProvider";
import { DELETE_WAITING_SALE } from "../../provider/actions";
import toast from "react-hot-toast";
import { date as DateString } from "../../features/date";

export default function WaitingSalesCard({ sale, deliverys, payMethods }) {
  const { dispatch } = useContext(AppContext);

  const [sendItem, setSendItem] = useState({
    sale,
    delivery: deliverys[0].name,
    payMethod: payMethods[0].payMethod,
    date: DateString(),
  });
  const handleConfirm = () => {
    axios.post(`${API_KEY}sales-history`, sendItem);
  };

  const handleDeleteSale = () => {
    dispatch({ type: DELETE_WAITING_SALE, payload: sale.id });
  };

  return (
    <div className="flex justify-between w-48 bg-white rounded-md">
      <div className="flex flex-col min-w-full">
        <div className="mb-4">
          <p className="font-bold">
            {sale.ticket.client.name} {sale.ticket.client.address.name} #{" "}
          </p>
          <p>Total: {sale.ticket.total}</p>
        </div>
        <select
          id="payMethod"
          onChange={(e) =>
            setSendItem({ ...sendItem, payMethod: e.target.value })
          }
          className="text-sm py-0.5 px-1 w-20 h-10 bg-gray-50 border border-gray-300 rounded shadow-sm min-w-full"
        >
          {payMethods.map((method, index) => (
            <option key={index} value={method.payMethod}>
              {method.payMethod}
            </option>
          ))}
        </select>
        <select
          id="delivery"
          onChange={(e) =>
            setSendItem({ ...sendItem, delivery: e.target.value })
          }
          className="text-sm py-0.5 px-1 w-20 h-10 bg-gray-50 border border-gray-300 rounded shadow-sm mt-2 min-w-full"
        >
          {deliverys.map((delivery, index) => (
            <option key={index} value={delivery.name}>
              {delivery.name}
            </option>
          ))}
        </select>
      </div>
      {/* Grupo de la izquierda: Botones */}
      <div className="flex flex-col">
        <button
          onClick={() => handleDeleteSale()}
          className=""
        >
          ❌
        </button>
        <button
          onClick={() => {
            handleConfirm();
            handleDeleteSale();
            toast.success("Venta completada!");
          }}
          className=""
        >
          ✅
        </button>
      </div>
    </div>
  );
}
