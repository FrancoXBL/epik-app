import { AppContext } from "../../../provider/AppProvider";
import { useContext, useState } from "react";
import { carneExtraValue } from "../../../data/itemsList";

export function TicketBody({ listTicketBurgers }) {
  const { setListTicketBurger, reOrderId } = useContext(AppContext);

  function handleClickAdd(burger){
    const newList = listTicketBurgers.map((item) => {
      if(item.id == burger.id){
        const newPrice = parseInt(item.price) + carneExtraValue
        const newPriceString = newPrice.toString()
        return {...item, price: newPriceString, extra: item.extra + 1}
      }
      return item
    })

    setListTicketBurger(newList)
  }

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
        <p>
          <span className="capitalize">{burguer.name}</span> <span>{burguer.serving}</span> + <span>{burguer.extra}</span> <button onClick={() => handleClickAdd(burguer)}>➕</button> - $
          <span>{burguer.price}</span>{" "}

          <button className="RiDeleteBack2Fill"
            onClick={() => {
              handleClick(burguer);
            }}
          >
            ❌
          </button>
        </p>
      ))}
    </div>
  );
}
