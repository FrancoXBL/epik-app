export function TicketFooter({totalMount}){

    return (
        <div className="ticketFooter">
            <span className="totalTitle">Total:</span>
            <span className="totalMount">{totalMount}</span>
        </div>
    )
}