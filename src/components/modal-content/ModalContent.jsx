import BigButtonServing from "../big-button/big-button-serving/BigButtonServin";
import { AppContext } from "../../provider/AppProvider";
import { useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_LISTITEM_TICKET_EXTRAS,
  ADD_LISTITEM_TICKET_PRODUCT,
  SET_TOTAL,
} from "../../provider/actions";
import toast from "react-hot-toast";
import { TbMeat } from "react-icons/tb";
import { TbMeatOff } from "react-icons/tb";


export default function ModalContent({ item, close }) {
  
  useEffect(() => {
    const manejarEscape = (e) => {
      if (e.key === 'Escape') {
        close(false)
      }
    };

    window.addEventListener('keydown', manejarEscape);

    return () => {
      window.removeEventListener('keydown', manejarEscape);
    };
  }, []); 

  const [selectedServing, setSelectedServing] = useState(null);
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
  const handleClick = () => {
    if (sendItem.price === 0) {
      toast.error("Indique la forma en la que se sirve el producto");
    }
    if (item.type === "extra" && sendItem.price !== 0) {
      dispatch({
        type: ADD_LISTITEM_TICKET_EXTRAS,
        payload: sendItem,
      });
      dispatch({ type: SET_TOTAL, payload: undefined });
      toast.success("Extra agregado")
      close(false);
    } else {
      if (sendItem.price !== 0) {
        dispatch({
          type: ADD_LISTITEM_TICKET_PRODUCT,
          payload: sendItem,
        });
        dispatch({ type: SET_TOTAL, payload: undefined });
        toast.success("Producto agregado")
        close(false);
      }
    }
  };
  const showResume = (sendItem) => {
    return `${sendItem.type} ${sendItem.name} - ${sendItem.serving} $${
      sendItem.price
    } ${sendItem.observations} ${sendItem.isVeggie ? "Veggie" : ""}`;
  };
  return (
    <div className="w-[600px] h-auto">
      <div className="p-24px bg-gray-1 rounded-lg ">
        <h1 className="text-5xl text-center">{item.type.toUpperCase()} {item.name.toUpperCase()}</h1>
      </div>
      <div className="flex gap-3 my-6">
        {item.specs.map((item) => (
          <BigButtonServing
            key={item.serving}
            name={`${
              item.serving.charAt(0).toUpperCase() + item.serving.slice(1)
            }`}
            price={`$${item.price}`}
            isSelected={item.serving === selectedServing}
            action={() => {
              setSelectedServing(item.serving);
              // Aquí también estableces tu sendItem, como antes
              setSendItem({
                ...sendItem,
                serving: item.serving,
                price: item.price,
              });
            }}
          />
        ))}
      </div>
      <div className="flex gap-3 mt-3 w-auto justify-around"></div>
      <div className="flex my-6 gap-3 h-16">
        <p className="text-2xl text-center m-auto w-2/6">Producto Veggie:</p>
        <div className="flex p-16px w-4/6 gap-3 rounded-lg bg-gray-1">
        <button
          className={!sendItem.isVeggie ? "text-primary-100 text-3xl h-full border-2 border-primary-100 w-full bg-gray-1 rounded-lg" : "text-gray-2 text-3xl h-full w-full border-2 border-gray-2 bg-gray-1 rounded-lg" }
          onClick={() => {
            setSendItem({ ...sendItem, isVeggie: false });
          }}
        >
          <TbMeat className="m-auto" />
        </button>
        <button
          className={!sendItem.isVeggie ? "text-gray-2 text-3xl h-full w-full border-2 border-gray-2 bg-gray-1 rounded-lg" : "text-green-main w-full text-3xl h-full border-2 border-green-main rounded-lg bg-gray-1" }
          onClick={() => {
            setSendItem({ ...sendItem, isVeggie: true });
          }}
        >
          <TbMeatOff className="m-auto" />
        </button>
        </div>
      </div>
      <div className="flex my-6 gap-3 h-16">
        <input
          className="border-2 border-gray-2 rounded-lg px-16px text-lg w-full"
          type="text"
          placeholder="Escriba las anotaciones aqui"
          onChange={(e) => {
            setSendItem({ ...sendItem, observations: `(${e.target.value})` });
          }}
        />
      </div>
      <div className="border-2 rounded-lg p-16px border-gray-2 flex justify-between my-6 gap-3">
        <div className="block w-full">
        <p>Resumen:</p>
          <p className="py-24px rounded-lg text-2xl w-5/6" readOnly>
            {showResume(sendItem)}
          </p>
        </div>
          <button
            className="bg-confirm-normal hover:bg-confirm-hover py-24px w-20 rounded-button"
            onClick={handleClick}
          >
            ➜
          </button>
      </div>
    </div>
  );
}
