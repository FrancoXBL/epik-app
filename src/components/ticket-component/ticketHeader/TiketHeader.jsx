import "./tiketHeader.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { useBlinkEffect } from "../../../hooks/useBlinkEffect";

const setDate = () => {
  const date = new Date();
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} * ${date.getHours()}:${date.getMinutes()}`;
};

export function TiketHeader() {

  const {
    ticket: { client, orderNumber, isTakeOut },
  } = useContext(AppContext);
  const isNameBlinking = useBlinkEffect([client.name]);
  const isAddressBlinking = useBlinkEffect([
    client.address.street,
    client.address.number,
  ]);

  const [currentDate, setCurrentDate] = useState(setDate());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(setDate());
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="text-center flex flex-col">
        {`Pedido #${orderNumber === undefined ? '0' : orderNumber}`} <span>{currentDate}</span>
      </p>
      <br />
      <span
        className={`capitalize pb-2 block font-inherit text-center ${
          isNameBlinking ? "fade" : ""
        }`}
      >
        {client.name} {client.name ? "👑" : "CLIENTE"}
      </span>
      <span
        className={`capitalize text-center pb-2 block ${
          isAddressBlinking ? "fade" : ""
        } `}
      >
        {client.address.number}
        {isTakeOut === true ? client.address.street : "LOCAL"}
      </span>
      <br />
    </div>
  );
}
