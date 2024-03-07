import { useContext, useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../constants/api";
import { AppContext } from "../../provider/AppProvider";
import { DELETE_WAITING_SALE } from "../../provider/actions";
import toast from "react-hot-toast";
import { date as DateString } from "../../features/date";


export default function WaitingSalesCard({ sale }) {
  const { dispatch } = useContext(AppContext);

  const [firstDelivery, setFirstDelivery] = useState('')
  const [firstPayMethod, setFirstPayMethod] = useState('')

  const [deliverys, setDeliverys] = useState([]);

  useEffect(() => {
    axios.get(`${API_KEY}deliverys`).then((res) => {
      setDeliverys(res.data);
      setFirstDelivery(res.data[0].name)
    });
  }, []);


  ///////////// PAYMETHODS ///////////
  const [payMethods, setPayMethods] = useState([]);
  useEffect(() => {
    axios.get(`${API_KEY}paymethods`).then((res) => {
      setPayMethods(res.data);
      setFirstPayMethod(res.data[0].payMethod)
    });
  }, []);

  const [sendItem, setSendItem] = useState({
    sale,
    delivery: firstDelivery,
    payMethods: firstPayMethod,
    date: DateString(),
  });

  const handleConfirm = () => {
    axios.post(`${API_KEY}sales-history`, sendItem);
  };

  const handleDeleteSale = () => {
    dispatch({ type: DELETE_WAITING_SALE, payload: sale.id });
  };

  return (
    <div className="flex gap-6 p-16px bg-white rounded-md">
      <div className="">
        <div className="mb-4">
          <p className="font-bold">
            {sale.ticket.client.name} {sale.ticket.client.address.name} #{sale.ticket.orderNumber}
          </p>
          <p>Total: ${sale.ticket.total}</p>
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
      <div className="flex flex-col gap-3 justify-around">
        <button
          onClick={() => {
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-delete-normal shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex-1 w-0 p-4">
                  <div className="flex p-24px items-start">
                    <div className="ml-3 flex-1">
                      <p className="text-lg font-bold text-white text-gray-900">
                        Por favor confirme que quiere eliminar el pedido en espera
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l">
                  <button
                    onClick={() => {
                      handleDeleteSale()
                    }}
                    className="bg-white w-20 border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    ❌
                  </button>
                </div>
              </div>
            ));
          }}
          className="h-20 w-20 bg-delete-normal rounded-md"
        >
          
        </button>
        <button
          onClick={() => {
            handleConfirm();
            handleDeleteSale();
            toast.success("Venta completada!");
          }}
          className="h-20 w-20 bg-epikYellow rounded-md"
        >
          
        </button>
      </div>
    </div>
  );
}
