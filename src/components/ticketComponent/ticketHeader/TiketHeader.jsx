import "./tiketHeader.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { useBlinkEffect } from "../../../hooks/useBlinkEffect";
export function TiketHeader() {
  const {
    ticket: { client },
  } = useContext(AppContext);
  const isNameBlinking = useBlinkEffect([client.name]);
  const isAddressBlinking = useBlinkEffect([
    client.address.street,
    client.address.number, 
  ]);

  return (
    <div>
      <p className="text-center"> 🍔 TICKET VENTA 🍔 </p>
      <hr />
      <span
        className={`capitalize py-2 block font-inherit ${
          isNameBlinking ? "fade" : ""
        }`}
      >
        Cliente: {client.name} {client.name ? "👑" : ""}
      </span>
      <span
        className={`capitalize  py-2 block ${isAddressBlinking ? "fade" : ""} `}
      >
        Direccion: {client.address.street} {client.address.number}
        {client.address.street || client.address.number ? "🏠" : ""}
      </span>
    </div>
  );
}
