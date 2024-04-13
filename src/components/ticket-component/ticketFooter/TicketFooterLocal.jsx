import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import TicketSurcharge from "../ticketSurcharge/ticketSurcharge";

/**
 * Show the footer of the ticket with the total of the sale
 */
export function TicketFooterLocal() {
  const { ticket } = useContext(AppContext);

  return (
    <div className="flex bg-gray-1 rounded-md justify-between p-[5px]">
      <div className="w-full m-auto">
      <span>Total:</span>
      <span className="text-green-main">${ticket.total}</span>
      </div>
      {/* <TicketSurcharge /> */}
    </div>
  );
}