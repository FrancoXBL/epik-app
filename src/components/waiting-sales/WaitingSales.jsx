import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../provider/AppProvider";
import WaitingSalesCard from "../waiting-sales-card/WaitingSalesCard";
export default function WaitingSales() {

  const { waitingSales } = useContext(AppContext);
  
  return (
    <div className="flex h-full gap-3 w-auto px-16px bg-white rounded-[20px]">
      {waitingSales.map((sale) => (
        <WaitingSalesCard sale={sale} />
      ))}
    </div>
  );
}
