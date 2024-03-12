import BigButtonServing from "../big-button/big-button-serving/BigButtonServin";
import { AppContext } from "../../provider/AppProvider";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_LISTITEM_TICKET_EXTRAS,
  ADD_LISTITEM_TICKET_PRODUCT,
  SET_TOTAL,
} from "../../provider/actions";
import toast from "react-hot-toast";

export default function ModalContent({ item, close }) {
  const [sendItem, setSendItem] = useState({
    name: item.name,
    type: item.type,
    serving: "",
    isVeggie: false,
    price: 0,
    observations: "",
    id: uuidv4(),
  });
  const { dispatch } = useContext(AppContext);

  return (
    <div className="w-[600px] h-auto">
      <div className="p-24px bg-gray-1 rounded-lg">
        <h1 className="text-4xl text-center">{item.name}</h1>
      </div>
      <div className="flex gap-3 mt-3 w-auto justify-around">
          <button className="text-white text-3xl w-3/6 h-24 bg-delete-hover rounded-lg"
            onClick={() => {
              setSendItem({ ...sendItem, isVeggie: false });
            }}
          >
            Carne
          </button>
          <button className="text-white text-3xl w-3/6 h-24 bg-green-main rounded-lg"
            onClick={() => {
              setSendItem({ ...sendItem, isVeggie: true });
            }}
          >
            Veggie
          </button>
      </div>
      <div className="flex gap-3 m-6">
        {item.specs.map((item) => (
          
          <BigButtonServing
            name={`${item.serving.charAt(0).toUpperCase() + item.serving.slice(1)}`}
            price={`$${item.price}`}
            action={() => {
              setSendItem({
                ...sendItem,
                serving: item.serving,
                price: item.price,
              });
            }}
          />
        ))}
      </div>
      <div className="flex m-6 gap-2 h-16">
      <input
          className="border-2 border-gray-2 rounded-lg px-16px text-lg w-full"
          type="text"
          placeholder="Escriba las anotaciones aqui"
          onChange={(e) => {
            setSendItem({ ...sendItem, observations: `(${e.target.value})` });
          }}
        />
      </div>
      <div className="flex m-6 gap-3 h-20 ">
      <input
          value={`${sendItem.type} ${sendItem.name} - ${sendItem.serving} $${
            sendItem.price
          } ${sendItem.observations} ${sendItem.isVeggie ? "Veggie" : ""}`}
          className="border-2 border-gray-2 rounded-lg w-5/6 px-16px text-lg"
          type="text"
          readOnly
        />
        <button
          className="bg-confirm-normal hover:bg-confirm-hover h-20 w-20 rounded-button"
          onClick={() => {
            if (sendItem.price === 0) {
              toast.error("Indique la forma en la que se sirve el producto");
            }
            if (item.type === "extra" && sendItem.price !== 0) {
              dispatch({
                type: ADD_LISTITEM_TICKET_EXTRAS,
                payload: sendItem,
              });
              dispatch({ type: SET_TOTAL, payload: undefined });
              close(false);
            } else {
              if (sendItem.price !== 0) {
                dispatch({
                  type: ADD_LISTITEM_TICKET_PRODUCT,
                  payload: sendItem,
                });
                dispatch({ type: SET_TOTAL, payload: undefined });
                close(false);
              }
            }
          }}
        >
          ➜
        </button>
      </div>
    </div>
  );
}
