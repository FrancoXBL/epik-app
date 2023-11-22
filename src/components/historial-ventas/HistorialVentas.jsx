import { useContext, useState } from "react"
import { AppContext } from "../../provider/AppProvider"
import { HistorialCard } from "./historial-ventas-card/HistorialCard"
import { NavBar } from "../navBarComponent/NavBar"
import { HistorialVentasFilter } from "./historial-ventas-filter/HistorialVentasFilter"
import { HistorialVentasAddGastos } from "./historial-ventas-gastos/HistorialVentasAddGastos"
import { HistorialVentasBalance } from "./historial-ventas-balance/HistorialVentasBalance"
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {

    const { listDailyItemSale } = useContext(AppContext)

    const [sendFiltredList, setFiltredList] = useState(listDailyItemSale)
    
    return (
        <>
        <NavBar button1={{route: "/", text:"Home"}} button2={{route: "/admin", text:"Administracion"}}></NavBar>
        <HistorialVentasFilter filtredList={sendFiltredList} filter={setFiltredList}/>
        {sendFiltredList.map((item) => <HistorialCard saleCard={item} />)}
        <HistorialVentasAddGastos/>
        <HistorialVentasBalance />
        </>
    )
}