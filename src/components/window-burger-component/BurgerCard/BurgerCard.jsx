import "./BurgerCard.css";
// import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from "react-icons/tb";
import {
  PiNumberCircleOneBold,
  PiNumberCircleTwoBold,
  PiNumberCircleThreeBold,
} from "react-icons/pi";
export function BurgerCard({ burger, listVariants }) {
  const buttoncss =
    "ml-1 bg-bg-100 w-10 h-10 rounded-md bg-primary-200 text-bg-200 hover:bg-primary-100";
  const buttonCssIcon = "w-full text-2xl";

  return (
    <div className="flex py-1 border-b border-b-bg-100">
      <div className="flex-1 leading-10 h-10">
        <p>{burger}</p>
      </div>
      <div className="flex-1 flex justify-end ml-8">
        {listVariants.map((variant) => {
          return (
            <button className={`${buttoncss}`}>
              <variant.icon className={buttonCssIcon}></variant.icon>
            </button>
          );
        })}
      </div>
    </div>
  );
}
