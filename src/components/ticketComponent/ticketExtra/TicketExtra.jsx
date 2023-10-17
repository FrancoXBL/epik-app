import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";

export function TicketExtra({ listTicketExtras }) {
  const { setListTicketAggreggates, reOrderId } = useContext(AppContext);

  function handleClick(extra) {
    console.log(listTicketExtras);
    const newList = listTicketExtras.filter((item) => {
      if (item.id !== extra.id) {
        return item;
      }
    });

    console.log(newList);
    const setNewList = reOrderId(newList);
    setListTicketAggreggates(setNewList);
  }

  if (listTicketExtras.length === 0) {
    return (
      <>
        <hr />
        <p>Sin extras!</p>
      </>
    );
  }

  return (
    <>
      <hr />
      {listTicketExtras.map((extra) => (
        <div>
          <span className="capitalize">
            {extra.name} - {extra.serving} - ${extra.price}
          </span>{" "}
          <button onClick={() => handleClick(extra)}>❌</button>
        </div>
      ))}
    </>
  );
}
