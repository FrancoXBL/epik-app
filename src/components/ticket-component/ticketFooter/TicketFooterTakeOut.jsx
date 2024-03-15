import { useContext, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { SET_DELIVERY_COST, SET_TOTAL } from "../../../provider/actions";

export function TicketFooterTakeOut({ isPrintTicket }) {
  const { ticket, dispatch } = useContext(AppContext);

  return (
    <div>
      {isPrintTicket ? (
        <>
          <p>Precio Envio: {ticket.deliveryCost}</p>
        </>
      ) : (
        <div className="flex justify-between items-center bg-gray-1 rounded-md p-[3px] px-[5px]">
          <span className="">Precio Envio:</span>
          <input 
          
          placeholder="$"
          className="placeholder-green-main text-green-main h-full px-[12px] py-[8px] w-2/5 rounded-md bg-gray-2"
          
            type="number"
            onChange={(e) => {
              dispatch({
                type: SET_DELIVERY_COST,
                payload: parseInt(e.target.value),
              });
              dispatch({ type: SET_TOTAL, payload: undefined });
            }}
          />
        </div>
      )}
      <span>Total:</span>
      <span>{ticket.total}</span>
    </div>
  );
}
