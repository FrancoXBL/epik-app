import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
import { HistorialCard } from "./historial-ventas-card/HistorialCard"

export default function HistorialVentas() {

    const { listDailyItemSale } = useContext(AppContext)

    return (
        <>
        {listDailyItemSale.map((item) => <HistorialCard saleCard={item} />)}
        </>
    )
}