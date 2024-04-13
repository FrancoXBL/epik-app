import { useEffect, useState } from "react";
import createObjetAmountDayInfo from "../../../features/createObjetAmountDayInfo";
import axios from "axios";
import API_KEY from "../../../constants/api";
import { date } from "../../../features/date";

export function HistorialVentasBalance(list) {
  const [dayInfo, setDayInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [dateString, setDateString] = useState(date())


  useEffect(() => {
    const dayList = list.list.filter((i)=> i.date === dateString )

    const fetchPayMethods = async () => {
      try {
        const res = await axios.get(`${API_KEY}paymethods`);
        setDayInfo(createObjetAmountDayInfo(dayList, res.data));
      } catch (error) {
        console.error("Failed to fetch pay methods:", error);
      }
    };
    fetchPayMethods();
  }, []); // Dependencias vacías para ejecutar una vez al montar el componente

  useEffect(() => {
    // Calcula el total cada vez que dayInfo cambie
    const totalVentas = dayInfo.reduce((acc, currentItem) => acc + currentItem.total, 0);
    setTotal(totalVentas);
  }, [dayInfo]); // Dependencia dayInfo para recalcular cuando cambie

  return (
    <div>
      <p>Ventas diarias totales: {total}</p>
    </div>
  );
}
