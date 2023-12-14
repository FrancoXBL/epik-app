import { TiketHeader } from "./ticketHeader/TiketHeader";
import { TicketFooter } from "./ticketFooter/TicketFooter";
import { TicketSaludo } from "./ticketSaludo/TicketSaludo";
import { TicketBody } from "./ticketBody/TicketBody";
import { TicketExtra } from "./ticketExtra/TicketExtra";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import { EndSaleButton } from "../endSaleComponent/EndSaleButtom";

/**
 * Show the ticket of the current sale
 */
export default function TicketComponent() {
  const { ticket } = useContext(AppContext);
  return (
    <div className="font-mono">
      <TiketHeader />
      <TicketBody listTicketBurgers={ticket.listBurguer} />
      <TicketExtra listTicketExtras={ticket.listAggreggates} />
      <TicketFooter />
      <br />
      <TicketSaludo />
      <EndSaleButton />
    </div>
  );
}
