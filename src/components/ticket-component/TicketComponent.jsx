import { TiketHeader } from "./ticketHeader/TiketHeader";
import { TicketFooter } from "./ticketFooter/TicketFooter";
import { TicketSaludo } from "./ticketSaludo/TicketSaludo";
import { TicketBody } from "./ticketBody/TicketBody";
import { TicketExtra } from "./ticketExtra/TicketExtra";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import { EndSaleButton } from "../endSaleComponent/EndSaleButtom";
import TicketInferior from "../../assets/ticket_inferior.svg?react";
import TicketSuperior from "../../assets/ticket_superior.svg?react";

export const TicketDivider = () => (
  <span className="py-4 block text-middle">*************************</span>
);
/**
 * Show the ticket of the current sale
 */
export default function TicketComponent() {
  const { ticket } = useContext(AppContext);
  return (
    <div className="font-mono h-full box-border font-semibold">
      <TicketSuperior />
      <div className="bg-white py-[14px] px-[28px] max-h-[480px] h-full box-border">
        <TiketHeader />
        <TicketBody listTicketBurgers={ticket.listBurguer} />
        <TicketExtra listTicketExtras={ticket.listAggreggates} />
        <TicketFooter />
        <TicketSaludo />
      </div>
      <TicketInferior />
    </div>
  );
}