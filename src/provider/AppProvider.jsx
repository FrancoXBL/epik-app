import { createContext, useState } from "react";
import { items } from "../data/itemsList";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [listItems, setListItems] = useState(items)
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({
    name: "Cliente",
    address: { street: "Calle", number: "Altura" },
  });
  const [listTicketBurguer, setListTicketBurger] = useState([]);
  const [listTicketAggreggates, setListTicketAggreggates] = useState([]);

  return (
    <AppContext.Provider
      value={{
        total,
        client,
        listItems,
        listTicketBurguer,
        listTicketAggreggates,
        setListTicketBurger,
        setListTicketAggreggates
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
