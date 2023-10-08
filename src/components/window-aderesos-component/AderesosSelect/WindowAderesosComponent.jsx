import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import { ExtrasCard } from "../ExtrasCard/ExtrasCard";
import "./windowAderesosComponent.css";

export function AderesosComponent() {
  const { listItems } = useContext(AppContext);

  const listExtras = listItems.filter((item, index) => {
    if(item.type == "aderezo"){
      return item
    }
  })


  return (
    <div className="p-8 rounded-lg bg-bg-300 flex flex-col	">
      <h3 className="text-center text-xl pb-4">Aderezos</h3>
      {listExtras.map((extra, index) => (
        <ExtrasCard key={index} extraItem={extra} />
      ))}
    </div>
  );
}
