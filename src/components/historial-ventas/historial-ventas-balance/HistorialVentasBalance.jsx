import { useEffect, useState } from "react"
import getDayInfo from "../../../features/getDayInfo"

export function HistorialVentasBalance(list){

    const [dayInfo, setDayInfo] = useState()

    useEffect(() => {
        setDayInfo(getDayInfo(list))
    },[])
    
    console.log(dayInfo)
    
    return(
        <>
        {/* Ingresos totales del dia: {total} */}
        </>
    )
}