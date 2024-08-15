import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../../constants/api.js";
import { filterItems } from "../../../features/filterList";
import MenuContainer from "../../menu-container/MenuContainer.jsx";

export function HistorialVentasFilter({list, setList, change}) {
  const [itemNameFilter, setItemNameFilter] = useState("todos");
  const [payMethodFilter, setPayMethodFilter] = useState("todos");
  const [deliveryFilter, setDeliveryFilter] = useState("todos");


  const [delivery, setDelivery] = useState([]);
  useEffect(() => {
    axios.get(`${API_KEY}deliverys`).then((res) => {
      setDelivery(res.data);
    });
  }, []);

  const [payMethods, setPayMethods] = useState([]);
  useEffect(() => {
    axios.get(`${API_KEY}paymethods`).then((res) => {
      setPayMethods(res.data);
    });
  }, []);


  const handleFilter = () => {
    const filteredList = filterItems(list, {
      name: itemNameFilter,
      payMethod: payMethodFilter,
      delivery: deliveryFilter,
    });
    setList(filteredList)
    
  };

  return (
    <MenuContainer>
      <div className="flex justify-between items-center text-lg h-full">
        <input
          className="p-16px text-lg border-gray-2 rounded-xl"
          placeholder="Nombre"
          type="text"
          id="itemName"
          onChange={(e) => setItemNameFilter(e.target.value)}
        />

        <div className="flex gap-3">
          <label className="m-auto"
          htmlFor="payMethod">Pago en:</label>
          <select
            id="payMethod"
            className="bg-gray-1 p-16px m-auto rounded-xl"
            onChange={(e) => setPayMethodFilter(e.target.value)}
          >
            <option value="todos">Todos</option>
            {payMethods.map((method, index) => (
              <option key={index} value={method.payMethod}>
                {method.payMethod}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="delivery">Delivery: </label>
          <select
          className="bg-gray-1 p-16px m-auto rounded-xl"
            id="delivery"
            onChange={(e) => setDeliveryFilter(e.target.value)}
          >
            <option value="todos">Todos</option>
            {delivery.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <button
            className="p-16px rounded-lg bg-confirm-normal hover:bg-confirm-hover w-full"
            onClick={handleFilter}
          >
            Filtrar
          </button>
        </div>
      </div>
    </MenuContainer>
  );
}
