import { TiketHeader } from "./ticketHeader/TiketHeader";
import { TicketFooterTakeOut } from "./ticketFooter/TicketFooterTakeOut";
import { TicketFooterLocal } from "./ticketFooter/TicketFooterLocal";
import { TicketSaludo } from "./ticketSaludo/TicketSaludo";
import { TicketBody } from "./ticketBody/TicketBody";
import { TicketExtra } from "./ticketExtra/TicketExtra";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";


export const TicketDivider = () => (
  <span className="py-4 block text-middle">*************************</span>
);
/**
 * Show the ticket of the current sale
 */
export default function TicketComponent({ isPrintTicket }) {
  const { ticket } = useContext(AppContext);
  return (
    <div className="font-mono h-full box-border font-semibold ">
      <div className="bg-white py-[14px] px-[28px] h-auto box-border rounded-xl">
        <TiketHeader />
        <TicketBody listTicketProducts={ticket.listProducts} isPrintTicket={isPrintTicket} />
        <TicketExtra listTicketExtras={ticket.listExtras} isPrintTicket={isPrintTicket} />
        {ticket.isTakeOut ? <TicketFooterTakeOut isPrintTicket={isPrintTicket} /> : <TicketFooterLocal />}
        <TicketSaludo />
      </div>
    </div>
  );
}
