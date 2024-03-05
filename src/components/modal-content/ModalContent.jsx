import BigButton from "../big-button/BigButton";
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
    id: uuidv4()
  });
  const { dispatch } = useContext(AppContext);

  return (
    <>
      <div className="block m-6">
        <BigButton title={item.name} />
      </div>
      <div className="flex gap-3 m-6">
        <BigButton
          title={"Carne"}
          action={() => {
            setSendItem({ ...sendItem, isVeggie: false });
          }}
        />
        <BigButton
          title={"Veggie"}
          action={() => {
            setSendItem({ ...sendItem, isVeggie: true });
          }}
        />
      </div>
      <div className="flex gap-3 m-6">
        {item.specs.map((item) => (
          <BigButton
            title={`${item.serving}  $${item.price}`}
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
      <div className="flex m-6 gap-3 h-10  ">
        <input
          value={`${sendItem.type} ${sendItem.name} - ${sendItem.serving} $${sendItem.price} ${sendItem.observations} ${sendItem.isVeggie ? "Veggie" : ""}`}
          className="border-2 border-black rounded-button  w-full px-16px"
          type="text"
          readOnly
        />
      </div>
      <div className="flex m-6 gap-3 h-20 ">
        <input
          className="border-2 border-black rounded-button  w-5/6"
          type="text"
          onChange={(e) => {
            setSendItem({ ...sendItem, observations: `(${e.target.value})` });
          }}
        />
        <button
          className="bg-bg-200 h-20 w-20 rounded-button"
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
    </>
  );
}
