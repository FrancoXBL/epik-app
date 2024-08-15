import { useState, useEffect } from "react";
import axios from "axios";
import { HistorialCard } from "./historial-ventas-card/HistorialCard";
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter";
import { HistorialVentasBalance } from "./historial-ventas-balance/HistorialVentasBalance.jsx";
import API_KEY from "../../constants/api.js";
import "../navBarComponent/navBar.css";
import { date } from "../../features/date.js";
import { SpentsComponent } from "../spentsComponent/SpentsComponent.jsx";

export default function HistorialVentas() {
  const [completeList, setCompleteList] = useState([]);
  const [change, setChange] = useState(1);
  const [dayDate, setDayDate] = useState(date());
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios.get(`${API_KEY}sales-history/${dayDate}`).then((res) => {
      const data = res.data;
      setCompleteList(data);
    });
  }, [change, dayDate]);

  return (
    <div className="fixed top-0 left-36 w-[1070px]">
      <div className="block w-full my-3">
        <HistorialVentasFilter
          list={completeList}
          setList={setFilteredList}
          change={setChange}
        />
      </div>
      <div className="flex w-full gap-3">
      <div className="overflow-auto w-2/5 max-h-[550px]">
  {filteredList.length !== 0 ? (
    filteredList.map((item) => (
      <HistorialCard
        saleCard={item}
        setChange={setChange}
        change={change}
      />
    ))
  ) : completeList.length !== 0 ? (
    completeList.map((item) => (
      <HistorialCard
        saleCard={item}
        setChange={setChange}
        change={change}
      />
    ))
  ) : (
    <h1>Cargando ventas...</h1>
  )}
</div>
        <div className="w-3/5 h-full bg-white p-16px rounded-xl my-3">
          {completeList ? (
            <HistorialVentasBalance list={completeList} date={dayDate} />
          ) : (
            <div>
              <h1>...</h1>
            </div>
          )}
          <div className="w-full p-24px text-center text-4xl flex justify-between border-2 mt-3 rounded-sm">
            <h1>{dayDate}</h1>
            <input
              onChange={(e) => {
                setDayDate(e.target.value);
              }}
              type="date"
            />
          </div>
          <hr className="my-5" />
          <SpentsComponent />
        </div>
      </div>
    </div>
  );
}
