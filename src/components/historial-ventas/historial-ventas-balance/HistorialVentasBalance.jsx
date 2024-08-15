import { useEffect, useState } from "react";
import createObjetAmountDayInfo from "../../../features/createObjetAmountDayInfo";
import axios from "axios";
import API_KEY from "../../../constants/api";
import printTicket from "../../../features/printTicket";

export function HistorialVentasBalance({ list, date }) {
  const [dayInfo, setDayInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [typeBalance, setTypeBalance] = useState(0);



  useEffect(() => {
    const dayList = list.filter((i) => i.date === date);

    const fetchPayMethods = async () => {
      try {
        const res = await axios.get(`${API_KEY}paymethods`);
        setDayInfo(createObjetAmountDayInfo(dayList, res.data));
      } catch (error) {
        console.error("Failed to fetch pay methods:", error);
      }
    };
    fetchPayMethods();
  }, [list, date]);

  useEffect(() => {
    const totalVentas = dayInfo.reduce(
      (acc, currentItem) => acc + currentItem.total,
      0
    );
    setTotal(totalVentas);
  }, [dayInfo, list, date]);

  return (
    <div>
      <div className="text-2xl border-bg-100 border flex justify-between rounded-xl p-16px mb-3">
        <div>Balance total diario: </div>
        <div className="text-6xl">${total}</div>
      </div>
      <div className="text-xl border-bg-100 border flex justify-between rounded-xl p-16px">
        <div className="my-auto">Ver el total de mis ventas en:</div>
        <select
          className="bg-gray-1 p-16px rounded-xl"
          onChange={(e) => {
            setTypeBalance(
              dayInfo.map((i) => {
                if (i.name === e.target.value) {
                  return i.total;
                }
              })
            );
          }}
        >
          <option disabled selected value="">
            Seleccionar
          </option>
          {dayInfo.map((item) => {
            return <option className="bg-gray-1">{item.name}</option>;
          })}
        </select>
        <div className="text-4xl w-1/5 my-auto">${typeBalance}</div>
      </div>
    </div>
  );
}
