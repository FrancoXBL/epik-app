import { useContext, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { HistorialCard } from "./historial-ventas-card/HistorialCard";
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter";
import { HistorialVentasAddGastos } from "./historial-ventas-gastos/HistorialVentasAddGastos";
import { HistorialVentasBalance } from "./historial-ventas-balance/HistorialVentasBalance";
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {
  const { listDailyItemSale } = useContext(AppContext);

  const [sendFiltredList, setFilteredList] = useState(listDailyItemSale);

  const [itemFilter, setItemFilter] = useState({
    name:"todos",
    payMethod: "todos",
    delivery: "todos",
    date: "todos",
  });

  return (
    <>
      <HistorialVentasFilter setFilteredList={setFilteredList} setItemFilter={setItemFilter} itemFilter={itemFilter} />
      {sendFiltredList.map((item) => (
        <HistorialCard saleCard={item} setFilteredList={setFilteredList} itemFilter={itemFilter}  />
      ))}
      {/* <HistorialVentasAddGastos/>
        <HistorialVentasBalance /> */}
    </>
  );

}
