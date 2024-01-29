import { useState, useEffect } from "react";
import axios from 'axios'
import { HistorialCard } from "./historial-ventas-card/HistorialCard";
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter";
import API_KEY from '../../constants/api.js'
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {

  const [sendFilteredList, setFilteredList] = useState();

  useEffect(() => {
    axios.get(`${API_KEY}sales-history`).then((res) => {
      setFilteredList(res.data);
    });
  }, []);


  return (
    <>
      <HistorialVentasFilter setFilteredList={setFilteredList} />
      {
        sendFilteredList ? (
          sendFilteredList.map((item) => (<HistorialCard saleCard={item} />))
        ) : (
          <>
          <h1>Cargando ventas...</h1>
          </>
        )
      }
    </>
  );

}
