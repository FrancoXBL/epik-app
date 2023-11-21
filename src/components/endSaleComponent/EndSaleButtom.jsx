import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import { ADD_NEW_SALE } from "../../provider/actions";

/**
 * Show the button to end the sale
 */
export function EndSaleButton() {
  const buttonStyles = "text-xl ml-1 p-4 rounded-md color-white bg-primary-100";
  const { dispatch } = useContext(AppContext);
  const handleClick = () => {
    dispatch({ type: ADD_NEW_SALE, payload: undefined });
  };
  return (
    <button
      className={`${buttonStyles}`}
      onClick={() => {
        handleClick();
      }}
    >
      Terminar Venta
    </button>
  );
}
