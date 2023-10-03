import { AppContext } from "../../../provider/AppProvider"
import { useContext } from "react"
import { ExtrasCard } from "../ExtrasCard/ExtrasCard"
import "./windowAderesosComponent.css"

export function AderesosComponent() {

    const { listExtras } = useContext(AppContext)

    return (
        <div className="windowAdereso">
            {listExtras.map((extra, index) => (
                <ExtrasCard extraItem={extra} />
            ))}
        </div>
    )
}