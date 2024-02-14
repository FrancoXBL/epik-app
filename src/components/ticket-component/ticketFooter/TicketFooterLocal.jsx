import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { TicketDivider } from "../TicketComponent";

/**
 * Show the footer of the ticket with the total of the sale
 */
export function TicketFooterLocal() {
  const { ticket } = useContext(AppContext);

  return (
    <div>
      <span>Total:</span>
      <span>{ticket.total}</span>
    </div>
  );
}