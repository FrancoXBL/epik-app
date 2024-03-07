import { useState, useEffect } from "react";
import axios from "axios";
import { HistorialCard } from "./historial-ventas-card/HistorialCard";
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter";
import { HistorialVentasBalance } from "./historial-ventas-balance/HistorialVentasBalance.jsx";
import API_KEY from "../../constants/api.js";
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {
  const [sendFilteredList, setFilteredList] = useState();
  const [completeList, setCompleteList] = useState();
  const [change, setChange] = useState(1)

  useEffect(() => {
    axios.get(`${API_KEY}sales-history`).then((res) => {
      const data = res.data
      setFilteredList(data);
      setCompleteList(data);
    });
  }, [change]);

  return (
    <div className="fixed top-1/4 left-36 w-[1070px]">
      <div className="block w-full my-2">
        <HistorialVentasFilter setFilteredList={setFilteredList} />
      </div>
      <div>
      {sendFilteredList ? (
        sendFilteredList.map((item) => (
          <HistorialCard saleCard={item} setChange={setChange} change={change}  />
        ))
      ) : (
        <>
          <h1>Cargando ventas...</h1>
        </>
      )}
      </div>
            {completeList ? (
          <HistorialVentasBalance list={completeList} />
      ) : (
        <>
          <h1>...</h1>
        </>
      )}
    </div>
  );
}
