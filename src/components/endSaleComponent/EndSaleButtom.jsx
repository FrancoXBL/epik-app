import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
import { ADD_NEW_SALE } from "../../provider/actions"

export function EndSaleButton() {
    const botonCapo = "text-2xl ml-1 w-40 h-20 rounded-md color-white bg-primary-100"

    const { dispatch } = useContext(AppContext)

    const handleClick = () => {
        dispatch({type:ADD_NEW_SALE, payload:undefined})
    }

    return <button className={`${botonCapo}`} onClick={() => {handleClick()}}>Holasoy endsale</button>
}