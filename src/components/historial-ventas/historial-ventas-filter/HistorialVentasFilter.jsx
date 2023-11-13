import { useContext } from "react";
import { AppContext } from "../../../provider/AppProvider";


export function HistorialVentasFilter({ listVentas }) {

    const { listItems, payMethods, delivery } = useContext(AppContext)

  return (
    <>
    <label htmlFor="">Nombre</label>
    <input type="text" />
      <div>
        <select name="" id="">
         {listItems.map((i) => (<option value="">{i.name}</option>))}
        </select>
      </div>
      <div>
        <select name="" id="">
        {payMethods.map((i) => (<option value="">{i}</option>))}
        </select>
      </div>
      <div>
        <select name="" id="">
        {delivery.map((i) => (<option value="">{i}</option>))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Fecha:</label>
        <input type="date" name="" id="date" />
      </div>
      <button>Filtrar!</button>
    </>
  );
}
