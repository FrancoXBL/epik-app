import { useContext, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { filterItems } from "../../../features/filterList"

export function HistorialVentasFilter({ setFilteredList }) {
  
  const { listDailyItemSale, payMethods, delivery } = useContext(AppContext);

  const [itemFilter, setItemFilter] = useState({
    name:"todos",
    payMethod: "todos",
    delivery: "todos",
    date: "todos",
  });


  function handleClick() {
    const newList = filterItems(listDailyItemSale, itemFilter)
    setFilteredList(newList)
  }
 
  return (
    <>
      <label htmlFor="">Nombre</label>
      <input type="text" onChange={(e) => {
        setItemFilter({...itemFilter, name: e.target.value})
      }} />
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
      <button onClick={() => handleClick()}>Filtrar</button>
    </>
  );
}
