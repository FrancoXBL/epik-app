import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";

export function TicketBody({ listTicketBurgers }) {
  const { setListTicketBurger, reOrderId } = useContext(AppContext);

  function handleClick(burger) {
    const newList = listTicketBurgers.filter((item) => {
      if (item.id !== burger.id) {
        return item;
      }
    });
    const setNewList = reOrderId(newList);
    setListTicketBurger(setNewList);
  }

  if (listTicketBurgers.length === 0) {
    return (
      <>
        <hr />
        <p>Hamburguesa</p>
      </>
    );
  }

  return (
    <div>
      <hr />
      {listTicketBurgers.map((burguer) => (
        <p
          onClick={() => {
            handleClick(burguer);
          }}
        >
          <span>{burguer.name}</span> <span>{burguer.serving}</span> - $
          <span>{burguer.price}</span>
        </p>
      ))}
    </div>
  );
}
