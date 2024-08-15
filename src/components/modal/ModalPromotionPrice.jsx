import { useContext, useState } from "react";
import { AppContext } from "../../provider/AppProvider";
import { SET_PROMOTION } from "../../provider/actions";
import toast from "react-hot-toast";

export default function ModalPromotionPrice({ close, isPromotion }) {
  const { dispatch } = useContext(AppContext);
  const handlePromotionPrice = (value) => {
    dispatch({ type: SET_PROMOTION, payload: value });
  };

  const [newPrice, setNewPrice] = useState(0);

  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white border rounded-lg shadow-2xl p-24px"
        style={{ minWidth: "600px" }}
      >
        <div className="px-12 py-8 border-b ">
          <h1 className="text-4xl font-semibold">
            Ingrese el precio de promocion!
          </h1>
        </div>
        <div className="px-12 py-8">
          <input
            type="number"
            onChange={(e) => {
              e.preventDefault()
              setNewPrice(e.target.value);
            }}
            className="h-14 w-full my-3 bg-gray-1 p-24px text-xl rounded-xl text-green-main"
          />
          <div className="flex justify-end gap-8">
            <button
              onClick={() => {
                if(newPrice != 0){
                  isPromotion(true)
                  handlePromotionPrice(newPrice)
                  close(false);
                } else {
                  toast.error('Ingrese un monto')
                }
              }}
              className="p-24px text-xl text-white bg-green-main hover:opacity-60 focus:outline-none rounded-lg transition duration-150 ease-in-out"
            >
              Listo!
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
