import { useEffect, useState } from "react";
import { AppContext } from "../../../provider/AppProvider";
import { useContext } from "react";
import { v4 as uuidv4, validate } from "uuid";
import { ADD_LIST_GASTO } from "../../../provider/actions";

export function HistorialVentasAddGastos({ gastos }) {
  const { dispatch } = useContext(AppContext);

  const [gasto, setGasto] = useState(0);
  const [tipoGasto, setTipoGasto] = useState("otro");

  const handleClick = () => {
    dispatch({
      type: ADD_LIST_GASTO,
      payload: { gasto, id: uuidv4(), tipoGasto },
    });
  };

  return (
    <div>
      <label htmlFor="">Ingresar Gastos:</label>
      <select
        name=""
        id=""
        onChange={(e) => {
          setTipoGasto(e.target.value);
        }}
      >
        <option value="otro">otro</option>
        <option value="caja">caja</option>
        <option value="negocio">negocio</option>
      </select>
      <input
        type="number"
        onChange={(e) => {
          setGasto(e.target.value);
        }}
      />
      <button onClick={() => handleClick()}>Sumar Gasto</button>

    </div>
  );
}
