import { useContext, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { useSearchParams } from "react-router-dom";

export function HistorialVentasFilter({ filter, filtredList }) {
  const { payMethods, delivery } = useContext(AppContext);

  const [itemFilter, setItemFilter] = useState({
    payMethod: "todos",
    delivery: "todos",
    date: "todos",
  });

  const handleClick = () => {
    console.log(itemFilter);
  };

  return (
    <>
      <label htmlFor="">Nombre</label>
      <input type="text" />
      <div>
        <select
          onChange={(e) => {
            setItemFilter({ ...itemFilter, payMethod: e.target.value });
          }}
        >
          <option value="todos">todos</option>
          {payMethods.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          onChange={(e) => {
            setItemFilter({ ...itemFilter, delivery: e.target.value });
          }}
        >
          <option value="todos">todos</option>
          {delivery.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          onChange={(e) => {
            setItemFilter({ ...itemFilter, date: e.target.value });
          }}
          type="date"
          id="date"
        />
      </div>
      <button onClick={() => handleClick()}>Filtrar!</button>
    </>
  );
}
