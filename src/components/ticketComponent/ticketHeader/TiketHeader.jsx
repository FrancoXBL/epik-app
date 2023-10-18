import "./tiketHeader.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
export function TiketHeader() {
  const [blinkName, setBlinkname] = useState(false);
  const [blinkAddres, setBlinkAddres] = useState(false);
  const {
    ticket: { client },
  } = useContext(AppContext);

  useEffect(() => {
    setBlinkname(true);
    const timeoutId = setTimeout(() => {
      setBlinkname(false);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [client.name]);

  useEffect(() => {
    setBlinkAddres(true);
    const timeoutId = setTimeout(() => {
      setBlinkAddres(false);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [client.address.street, client.address.number]);

  return (
    <div>
      <p className="text-center"> 🍔 TICKET VENTA 🍔 </p>
      <hr />
      <span
        className={`capitalize py-2 block font-inherit ${
          blinkName ? "fade" : ""
        }`}
      >
        Cliente: {client.name} {client.name ? "👑" : ""}
      </span>
      <span className={`capitalize  py-2 block ${blinkAddres ? "fade" : ""} `}>
        Direccion: {client.address.street} {client.address.number}
        {client.address.street || client.address.number ? "🏠" : ""}
      </span>
    </div>
  );
}
