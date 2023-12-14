import { useEffect, useState } from "react";
import { thanks } from "./listThanks";

/**
 * Show a random greeting in the ticket
 */
export function TicketSaludo() {
  const [frase, setFrase] = useState("");
  useEffect(() => {
    const randomThanksIndex = Math.floor(Math.random() * thanks.length);
    setFrase(thanks[randomThanksIndex]);
  }, []);
  return <p className="font-mono">{frase}</p>;
}
