import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
import { SaleCard } from "../../components/window-sales-component/sales-card/SaleCard"

export default function WindowSalesComponent(){

    const { listDailyItemSale } = useContext(AppContext)

    if(listDailyItemSale.length === 0){
        return (<h1>Aun no hay ventas</h1>)
    }
    
    return (<>
    {listDailyItemSale.map((item) => (
        <SaleCard saleItem={item} />
    ))}
    </>)
}