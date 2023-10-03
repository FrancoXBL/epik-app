import { createContext, useState } from "react";
import { listBurgersExport } from "../data/listBurgers";
import { listExtrasExport, listAggreggates } from "../data/listExtras";

export const AppContext = createContext();

export function AppContextProvider(props) {
  
  const [listExtras, setListExtras] = useState(listExtrasExport);
  const [listBurgers, setListBurgers] = useState(listBurgersExport);
  const [total, setTotal] = useState(0)
  const [client, setClient] = useState({name:"Cliente", address: {street:"Calle", number:"Altura"}})

  return (
    <AppContext.Provider
      value={{
        total,
        client,
        listBurgers,
        listExtras,
        listAggreggates,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
