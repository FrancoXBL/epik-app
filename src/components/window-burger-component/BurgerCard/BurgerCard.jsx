import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import "./BurgerCard.css";
// import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
} from "react-icons/pi";

export function BurgerCard({ burger }) {
  const buttoncss =
    "ml-1 bg-bg-100 w-10 h-10 rounded-md bg-primary-200 text-bg-200 hover:bg-primary-100";
  const buttonCssIcon = "w-full text-2xl";

  const { listTicketBurguer, setListTicketBurger } = useContext(AppContext);

  const handleClick = (burger, variant) => {
    const sendItem = createBurgerTicket(
      burger.name,
      variant.serving,
      variant.price
    );
    const newArray = agregarBurgerTicket(sendItem);
    setListTicketBurger(newArray);
  };

  function createBurgerTicket(name, serving, price) {
    return { name, serving, price };
  }

  function agregarBurgerTicket(item) {
    const addIdItem = { ...item, id: listTicketBurguer.length + 1 };
    return [...listTicketBurguer, addIdItem];
  }
  
  return (
    <div className="flex py-1 border-b border-b-bg-100">
      <div className="flex-1 leading-10 h-10">
        <p>{burger.name}</p>
      </div>
      <div className="flex-1 flex justify-end ml-8">
        {burger.specs.map((variant, index) => {
          return (
            <button
              onClick={() => {
                handleClick(burger, variant);
              }}
              className={`${buttoncss}`}
            >
              <variant.icon
                key={index}
                className={buttonCssIcon}
              ></variant.icon>
            </button>
          );
        })}
      </div>
    </div>
  );
}
