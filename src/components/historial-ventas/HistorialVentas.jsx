import { useContext, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { HistorialCard } from "./historial-ventas-card/HistorialCard";
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter";
import { HistorialVentasAddGastos } from "./historial-ventas-gastos/HistorialVentasAddGastos";
import { HistorialVentasBalance } from "./historial-ventas-balance/HistorialVentasBalance";
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {
  const { listDailyItemSale } = useContext(AppContext);

  const [sendFilteredList, setFilteredList] = useState(listDailyItemSale);


  return (
    <>
      <HistorialVentasFilter setFilteredList={setFilteredList} />
      {sendFilteredList.map((item) => (<HistorialCard saleCard={item} />))}
    </>
  );

}
