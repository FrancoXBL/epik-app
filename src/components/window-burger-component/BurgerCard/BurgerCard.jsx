import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { v4 as uuidv4 } from "uuid";
import { ADD_LISTITEM_TICKET_BURGER } from "../../../provider/actions";
import "./BurgerCard.css";
export function BurgerCard({ burger }) {
  const { dispatch } = useContext(AppContext);

  const buttoncss =
    "ml-1 bg-bg-100 w-10 h-10 rounded-md bg-primary-200 text-bg-200 hover:bg-primary-100";
  const buttonCssIcon = "w-full text-2xl";

  const handleClick = (variant, burgerName) => {
    const payload = createBurgerTicket(
      burgerName,
      variant.serving,
      variant.price
    );
    dispatch({ type: ADD_LISTITEM_TICKET_BURGER, payload });
  };

  const createBurgerTicket = (name, serving, price) => {
    return { id: uuidv4(), name, serving, price, extra: 0 };
  };

  return (
    <div className="flex py-1 border-b border-b-bg-100">
      <div className="flex-1 leading-10 h-10">
        <p className="capitalize">{burger.name}</p>
      </div>
      <div className="flex-1 flex justify-end ml-8">
        {burger.specs.map((variant, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(variant, burger.name)}
              className={`${buttoncss}`}
            >
              <variant.icon className={buttonCssIcon}></variant.icon>
            </button>
          );
        })}
      </div>
    </div>
  );
}
