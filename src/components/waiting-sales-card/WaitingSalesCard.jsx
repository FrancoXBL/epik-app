import { useContext, useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../constants/api";
import { AppContext } from "../../provider/AppProvider";
import { DELETE_WAITING_SALE } from "../../provider/actions";
import toast from "react-hot-toast";

export default function WaitingSalesCard({ sale, deliverys, payMethods }) {
  const { dispatch } = useContext(AppContext);
  
  const [sendItem, setSendItem] = useState({sale, delivery: deliverys[0].name, payMethod: payMethods[0].payMethod})
  const handleConfirm = () => {
    axios.post(`${API_KEY}sales-history`, sendItem)
  };

  const handleDeleteSale = () => {
    dispatch({type: DELETE_WAITING_SALE, payload: sale.id})
  }

  return (
    <div className="fixed w-6 h-6 rounded border-black">
      <p>
        {sale.ticket.client.name}
        {sale.ticket.client.address.name}
        {sale.ticket.total}
      </p>
      <select id="payMethod" onChange={(e) => setSendItem({...sendItem, payMethod: e.target.value})}>
        {payMethods.map((method, index) => (
          <option key={index} value={method.payMethod}>
            {method.payMethod}
          </option>
        ))}
      </select>
      <select id="delivery" onChange={(e) => setSendItem({...sendItem, delivery: e.target.value})}>
        {deliverys.map((delivery, index) => (
          <option key={index} value={delivery.name}>
            {delivery.name}
          </option>
        ))}
      </select>
      <button onClick={() => {
        handleDeleteSale()
      }}>X</button>
      <button
        onClick={() => {
          handleConfirm();
          handleDeleteSale();

          toast.success('Venta completada!')
        }}
      >
        VVVV
      </button>
    </div>
  );
}
