import { useContext, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { TicketDivider } from "../TicketComponent";
import { SET_DELIVERY_COST, SET_TOTAL } from "../../../provider/actions";

/**
 * Show the footer of the ticket with the total of the sale
 */
export function TicketFooterTakeOut({ isPrintTicket }) {
  const { ticket, dispatch } = useContext(AppContext);

  return (
    <div>
      {isPrintTicket ? (
        <>
          <p>Precio Envio: {ticket.deliveryCost}</p>
        </>
      ) : (
        <>
          <span>Precio Envio:</span>
          <input
            type="number"
            onChange={(e) => {
              dispatch({
                type: SET_DELIVERY_COST,
                payload: parseInt(e.target.value),
              });
              dispatch({ type: SET_TOTAL, payload: undefined });
            }}
          />
        </>
      )}
      <span>Total:</span>
      <span>{ticket.total}</span>
    </div>
  );
}
