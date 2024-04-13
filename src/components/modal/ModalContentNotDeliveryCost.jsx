import BigButton from "../big-button/BigButton";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import { ADD_WAITING_SALE, DELETE_SALE } from "../../provider/actions";

export default function ModalContentNotDeliveryCost({ close, back, print }) {
  const { dispatch } = useContext(AppContext);
  const handleClick = () => {
    dispatch({ type: ADD_WAITING_SALE, payload: undefined });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white border rounded-lg shadow-2xl p-24px"
        style={{ minWidth: "600px" }}
      >
        <div className="px-12 py-8 border-b ">
          <h1 className="text-4xl font-semibold">Atencion!</h1>
        </div>
        <div className="px-12 py-8">
          <p className="mb-8 text-lg p-16px">
            Estas por aceptar una venta con el envio sin costo!.
          </p>
          <div className="flex justify-end gap-8">
            <button
              onClick={async () => {
                await close(false);
                back();
                handleClick();
                print("forPrint");
              }}
              className="p-24px text-xl text-white bg-delete-normal hover:bg-delete-hover focus:outline-none rounded-lg transition duration-150 ease-in-out"
            >
              Continuar sin costo
            </button>
            <button
              onClick={() => {
                close(false);
              }}
              className="p-24px text-xl bg-gray-1 hover:bg-gray-2  rounded-lg transition ease-in-out"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
