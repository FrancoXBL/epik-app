import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { filterItems } from "../../../features/filterList";

export function HistorialVentasFilter({ setFilteredList }) {
  const { listDailyItemSale, payMethods, delivery } = useContext(AppContext);

  const [itemNameFilter, setItemNameFilter] = useState("todos");
  const [payMethodFilter, setPayMethodFilter] = useState("todos");
  const [deliveryFilter, setDeliveryFilter] = useState("todos");
  const [dateFilter, setDateFilter] = useState("todos");

  useEffect(() => {
    handleFilter();
  }, [listDailyItemSale]);

  const handleFilter = () => {
    const filteredList = filterItems(listDailyItemSale, {
      name: itemNameFilter,
      payMethod: payMethodFilter,
      delivery: deliveryFilter,
      date: dateFilter,
    });
    setFilteredList(filteredList);
  };

  return (
    <>
      <label htmlFor="itemName">Nombre</label>
      <input
        type="text"
        id="itemName"
        onChange={(e) => setItemNameFilter(e.target.value)}
      />
      
      <div>
        <label htmlFor="payMethod">Método de Pago:</label>
        <select
          id="payMethod"
          onChange={(e) => setPayMethodFilter(e.target.value)}
        >
          <option value="todos">todos</option>
          {payMethods.map((method, index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="delivery">Delivery: </label>
        <select
          id="delivery"
          onChange={(e) => setDeliveryFilter(e.target.value)}
        >
          <option value="todos">todos</option>
          {delivery.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          onChange={(e) => setDateFilter(e.target.value)}
          type="date"
          id="date"
        />
      </div>
      
      <button onClick={handleFilter}>Filtrar</button>
    </>
  );
}