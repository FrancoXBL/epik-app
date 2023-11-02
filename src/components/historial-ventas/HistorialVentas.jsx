import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
import { HistorialCard } from "./historial-ventas-card/HistorialCard"

export default function HistorialVentas() {

    const { listDailyItemSale } = useContext(AppContext)
    listDailyItemSale.push({client:{name:"fran", address:{street:"peron", number:70}}, payMethod: "Credito", amount: 700})

    return (
        <>
        {listDailyItemSale.map((item) => <HistorialCard saleCard={item} />)}
        </>
    )
}