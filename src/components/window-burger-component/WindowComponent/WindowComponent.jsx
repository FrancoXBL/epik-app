import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { BurgerCard } from "../BurgerCard/BurgerCard";
import { BurgerSelect } from "../BurgerSelect/BurgerSelect";
import "./windowBurger.css";

export function WindowBurgerComponent() {
  const { listBurgers } = useContext(AppContext);
  return (
    <div className="windowBurger">
      <BurgerSelect />
      {listBurgers.map((burger, index) => (
        <BurgerCard burger={burger} />
      ))}
    </div>
  );
}
