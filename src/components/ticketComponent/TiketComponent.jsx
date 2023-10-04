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
      <TicketBody listTicketBurgers={[{name:"Epika", quantity:"2", price:"2400"}]} />
      <TicketExtra listTicketExtras={[{name:"Cheddar", price:"200"}]} />
      <TicketFooter totalMount={total} />
      <TicketSaludo />
    </div>
  );
}
