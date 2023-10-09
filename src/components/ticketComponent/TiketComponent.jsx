import { TiketHeader } from "./ticketHeader/TiketHeader";
import { TicketFooter } from "./ticketFooter/TicketFooter";
import { TicketSaludo } from "./ticketSaludo/TicketSaludo";
import { TicketBody } from "./ticketBody/TicketBody";
import { TicketExtra } from "./ticketExtra/TicketExtra";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

export function TicketComponent() {
  const { client, total, listTicketBurguer, listTicketAggreggates } = useContext(AppContext);
  return (
    <div className="font-mono">
      <TiketHeader clientHeader={client} />
      <TicketBody listTicketBurgers={listTicketBurguer} />
      <TicketExtra listTicketExtras={listTicketAggreggates} />
      <TicketFooter totalMount={total} />
      <TicketSaludo />
    </div>
  );
}
