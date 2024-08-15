import { useContext, useEffect, useState, useStepper } from "react";
import axios from "axios";
import API_KEY from "../../constants/api";
import { AppContext } from "../../provider/AppProvider";
import { DELETE_WAITING_SALE, END_SALE } from "../../provider/actions";
import toast from "react-hot-toast";
import { date as DateString } from "../../features/date";
import { ImCross } from "react-icons/im";
import Modal from "../modal/Modal";
import ModalDeleteWaitingSale from "../modal/ModalDeleteWaitingSale";
import { BiHappyBeaming } from "react-icons/bi";
import { FaRegSadCry } from "react-icons/fa";

export default function WaitingSalesCard({ sale }) {


  const { dispatch } = useContext(AppContext);

  const [deliverys, setDeliverys] = useState([]);
  const [deleteWaitingSaleOpen, setWaitingSaleOpen] = useState(false)

  const handleWaitingSaleClose = () => {
    setWaitingSaleOpen(false)
  }

  useEffect(() => {
    axios.get(`${API_KEY}deliverys`).then((res) => {
      setDeliverys(res.data);
    });
  }, []);

  ///////////// PAYMETHODS ///////////
  const [payMethods, setPayMethods] = useState([]);
  useEffect(() => {
    axios.get(`${API_KEY}paymethods`).then((res) => {
      setPayMethods(res.data);
    });
  }, []);

  const [sendItem, setSendItem] = useState({
    sale,
    delivery: "",
    payMethod: "",
    date: DateString(),
  });



  function verifyData(sendItem) {

    if (sendItem.sale.ticket.isTakeOut && sendItem.delivery === "") {
      toast.error("Seleccione el cadete que se encarga del envio");
      return false;
    }
    if (sendItem.sale.ticket.isTakeOut && sendItem.payMethod === "") {
      toast.error("Seleccione el metodo en el que se efectua le pago");
      return false;
    }
    if (!sendItem.sale.ticket.isTakeOut && sendItem.payMethod === "") {
      toast.error("Seleccione el metodo en el que se efectua le pago");
      return false;
    }

    return true;
  }

  function printIsTakeOut(condition) {
    if(condition === true){
      return (
       <select
         placeholder="Cadete"
         onChange={(e) => setSendItem({ ...sendItem, delivery: e.target.value })}
         className="text-sm py-0.5 px-1 w-20 h-8 bg-gray-50 border border-gray-300 rounded shadow-sm mt-2 min-w-full"
       >
         <option hidden selected>
           Cadete
         </option>
         {deliverys.map((delivery, index) => (
           <option key={index} value={delivery.name}>
             {delivery.name}
           </option>
         ))}
       </select>
     ) 
    }
  }

  return (
    <div className="flex gap-6 p-16px bg-gray-1 rounded-[10px] w-auto">
      <Modal isOpen={deleteWaitingSaleOpen}>
        <ModalDeleteWaitingSale close={handleWaitingSaleClose} sale={sale}/>
      </Modal>
      <div className="">
        <div className="mb-4">
          <p className="font-bold">
            {sale.ticket.client.name} {sale.ticket.client.address.name} #
            {sale.ticket.orderNumber}
          </p>
          <p>Total: ${sale.ticket.total}</p>
        </div>
        <select
          placeholder="Metodo de pago"
          onChange={(e) =>
            setSendItem({ ...sendItem, payMethod: e.target.value })
          }
          className="text-sm py-0.5 px-1 w-20 h-8 bg-gray-50 border border-gray-300 rounded shadow-sm min-w-full"
        >
          <option hidden selected>
            Metodo de pago
          </option>
          {payMethods.map((method, index) => (
            <option key={index} value={method.payMethod}>
              {method.payMethod}
            </option>
          ))}
        </select>
        { printIsTakeOut(sale.ticket.isTakeOut) }
      </div>
      <div className="flex flex-col gap-3 justify-around">
        <button
          onClick={() => {
            setWaitingSaleOpen(true)
          }}
          className="h-20 w-20 bg-delete-normal rounded-md"
        >
          <FaRegSadCry className="m-auto text-white text-3xl"/>
        </button>
        <button
          onClick={() => {
            if (verifyData(sendItem)) {
              dispatch({ type: END_SALE, payload: sendItem });
              toast.success("Venta completada!");
            }
          }}
          className="h-20 w-20 bg-green-main rounded-md"
        >
          <BiHappyBeaming className="m-auto text-3xl text-white"/>
        </button>
      </div>
    </div>
  );
}
