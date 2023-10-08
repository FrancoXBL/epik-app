import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { BurgerCard } from "../BurgerCard/BurgerCard";
import { BurgerSelect } from "../BurgerSelect/BurgerSelect";
import "./windowBurger.css";

export function WindowBurgerComponent() {
  const { listItems } = useContext(AppContext);

  const listBurgers = listItems.filter((item) =>{
    if(item.type == "burger"){
      return item
    }
  })

  return (
    <div className="bg-bg-300 p-8 rounded-lg ">
      <h3 className="text-center text-xl pb-4">Burguer</h3>
      <BurgerSelect />
      {listBurgers.map((burger, index) => (
        <BurgerCard key={index} burger={burger} />
      ))}
    </div>
  );
}
