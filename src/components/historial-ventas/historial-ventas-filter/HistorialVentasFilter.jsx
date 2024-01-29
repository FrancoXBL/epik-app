import { useEffect, useState } from "react";
import axios from 'axios'
import API_KEY from "../../../constants/api.js";
import { filterItems } from "../../../features/filterList";

export function HistorialVentasFilter({ setFilteredList }) {

  const [itemNameFilter, setItemNameFilter] = useState("todos");
  const [payMethodFilter, setPayMethodFilter] = useState("todos");
  const [deliveryFilter, setDeliveryFilter] = useState("todos");
  const [dateFilter, setDateFilter] = useState("todos");

  const [saleHistory, setSaleHistory] = useState([])
  useEffect(() => {
    axios.get(`${API_KEY}sales-history`).then((res) => {
      setSaleHistory(res.data)
    });
  }, []);

  const [delivery, setDelivery] = useState([])
  useEffect(() => {
    axios.get(`${API_KEY}deliverys`).then((res) => {
      setDelivery(res.data)
    });
  }, []);

  const [payMethods, setPayMethods] = useState([])
  useEffect(() => {
    axios.get(`${API_KEY}paymethods`).then((res) => {
      setPayMethods(res.data)
    });
  }, []);



  useEffect(() => {
    handleFilter();
  }, [saleHistory]);

  const handleFilter = () => {
    const filteredList = filterItems(saleHistory, {
      name: itemNameFilter,
      payMethod: payMethodFilter,
      delivery: {name:deliveryFilter},
      date: dateFilter,
    });
    console.log(dateFilter)
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
            <option key={index} value={option}>
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
      
      <button onClick={handleFilter}>Filtrar</button>
    </>
  );
}