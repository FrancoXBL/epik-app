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
    
    const [gastos, setGastos] = useState(0)
    const [listVentas, setListVentas] = useState(listDailyItemSale)

    return (
        <>
        <NavBar button1={{route: "/", text:"Home"}} button2={{route: "/admin", text:"Administracion"}}></NavBar>
        <HistorialVentasFilter />
        {listVentas.map((item) => <HistorialCard saleCard={item} />)}
        <HistorialVentasAddGastos gastos={gastos}/>
        <HistorialVentasBalance />

        </>
    )
}