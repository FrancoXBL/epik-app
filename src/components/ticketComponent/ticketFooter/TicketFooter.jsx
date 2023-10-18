import { useContext, useEffect } from "react";
import { AppContext } from "../../../provider/AppProvider";

export function TicketFooter() {
  const { ticket } = useContext(AppContext);
  return (
    <div>
      <span>Total:</span>
      <span>{ticket.total}</span>
    </div>
  );
}
