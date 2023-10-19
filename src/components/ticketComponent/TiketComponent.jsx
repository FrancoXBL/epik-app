import { TiketHeader } from "./ticketHeader/TiketHeader";
import { TicketFooter } from "./ticketFooter/TicketFooter";
import { TicketSaludo } from "./ticketSaludo/TicketSaludo";
import { TicketBody } from "./ticketBody/TicketBody";
import { TicketExtra } from "./ticketExtra/TicketExtra";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

export function TicketComponent() {
  const { ticket } = useContext(AppContext);
  console.log("TICKET COMPONENT A ENVIAR", ticket);
  return (
    <div className="font-mono">
      <TiketHeader />
      <TicketBody listTicketBurgers={ticket.listBurguer} />
      <TicketExtra listTicketExtras={ticket.listAggreggates} />
      <TicketFooter />
      <TicketSaludo  />
    </div>
  );
}
