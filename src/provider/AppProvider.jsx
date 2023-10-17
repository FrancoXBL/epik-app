import { createContext, useState } from "react";
import { items } from "../data/itemsList";


export const AppContext = createContext();

export function AppContextProvider(props) {
  const calcularTotal = (list) => {
    let total = 0

    list.map((item) => {
      total += parseInt(item.price)
    })
    
    return total
  };
  const [listItems, setListItems] = useState(items);
  const [total, setTotal] = useState(0);
  const [client, setClient] = useState({
    name: "Cliente",
    address: { street: "Calle", number: "Altura" },
  });
  const [listTicketBurguer, setListTicketBurger] = useState([]);
  const [listTicketAggreggates, setListTicketAggreggates] = useState([]);

  const reOrderId = (list) => {
    
    const newList = list.map((item, index) => ({...item, id: index + 1}));

    return newList;
  };

  return (
    <AppContext.Provider
      value={{
        total,
        client,
        setClient,
        listItems,
        listTicketBurguer,
        listTicketAggreggates,
        setListTicketBurger,
        setListTicketAggreggates,
        calcularTotal,
        setTotal,
        reOrderId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
