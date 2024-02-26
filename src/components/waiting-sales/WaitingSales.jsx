import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../provider/AppProvider";
import WaitingSalesCard from "../waiting-sales-card/WaitingSalesCard";
import axios from 'axios'
import API_KEY from "../../constants/api";
export default function WaitingSales() {
  ///////////// DELIVERYS ///////////
  const [deliverys, setDeliverys] = useState([]);

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
  const { waitingSales } = useContext(AppContext);

  return (
    <div className="flex h-full w-full">
      {waitingSales.map((sale) => (
        <WaitingSalesCard sale={sale} payMethods={payMethods} deliverys={deliverys} />
      ))}
    </div>
  );
}
