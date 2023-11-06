import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
import { HistorialCard } from "./historial-ventas-card/HistorialCard"
import { NavBar } from "../navBarComponent/NavBar"
import "../navBarComponent/navBar.css";

export default function HistorialVentas() {

    const { listDailyItemSale } = useContext(AppContext)

    return (
        <>
        <NavBar button1={{route: "/", text:"Home"}} button2={{route: "/admin", text:"Administracion"}}></NavBar>
        {listDailyItemSale.map((item) => <HistorialCard saleCard={item} />)}
        </>
    )
}