import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";

/**
 * Show the footer of the ticket with the total of the sale
 */
export function TicketFooter() {
  const { ticket } = useContext(AppContext);

  return (
    <div>
      <span>Total:</span>
      <span>{ticket.total}</span>
    </div>
  );
}
