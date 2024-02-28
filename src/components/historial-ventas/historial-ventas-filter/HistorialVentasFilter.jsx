import { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "../../../constants/api.js";
import { filterItems } from "../../../features/filterList";
import { date } from "../../../features/date.js";
import MenuContainer from "../../menu-container/MenuContainer.jsx";

export function HistorialVentasFilter({ setFilteredList }) {
  const [itemNameFilter, setItemNameFilter] = useState("todos");
  const [payMethodFilter, setPayMethodFilter] = useState("todos");
  const [deliveryFilter, setDeliveryFilter] = useState("todos");
  const [dateFilter, setDateFilter] = useState(date);

  const [saleHistory, setSaleHistory] = useState([]);
  useEffect(() => {
    axios.get(`${API_KEY}sales-history`).then((res) => {
      setSaleHistory(res.data);
    });
  }, []);

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

  useEffect(() => {
    handleFilter();
  }, [saleHistory]);

  const handleFilter = () => {
    const filteredList = filterItems(saleHistory, {
      name: itemNameFilter,
      payMethod: payMethodFilter,
      delivery: deliveryFilter,
      date: dateFilter,
    });
    setFilteredList(filteredList);
  };

  return (
    <MenuContainer>
      <div className="flex">
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
              <option key={index} value={method.payMethod}>
                {method.payMethod}
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
              <option key={index} value={option.name}>
                {option.name}
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
        <div>
          <button className="p-16px rounded-lg hover:bg-epikYellow" onClick={handleFilter}>
            Filtrar
          </button>
        </div>
      </div>
    </MenuContainer>
  );
}
