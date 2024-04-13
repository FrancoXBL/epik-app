import { AppContext } from "../../../provider/AppProvider";
import { useContext, useState } from "react";
import { SET_SURCHARGE } from "../../../provider/actions";

export default function TicketSurcharge() {
    const { dispatch } = useContext(AppContext);
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <>
        <button
          className="w-10 h-auto bg-accent-100 hover:w-48 transition-all rounded-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            dispatch({ type: SET_SURCHARGE, payload: 1.1 });
          }}
        >
          {isHovered ? 'Recargo' : '+'}
        </button>
      </>
    );
  }
