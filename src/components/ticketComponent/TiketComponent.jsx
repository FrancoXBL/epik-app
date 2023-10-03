import { TiketHeader } from "./ticketHeader/TiketHeader"
import { TicketFooter } from "./ticketFooter/TicketFooter"
import { TicketSaludo } from "./ticketSaludo/TicketSaludo"
import { useContext } from "react"
import { AppContext } from "../../provider/AppProvider"
export function TicketComponent() {

    const {client, total} = useContext(AppContext)

    return(
        <div className="tiketComponent">
            <TiketHeader clientHeader={client}/>
            <TicketFooter totalMount={total} />
            <TicketSaludo />
        </div>
    )
}