import "./infoClientComponent.css";
import { useContext } from "react";
import { SET_CLIENT } from "../../provider/actions";
import { AppContext } from "../../provider/AppProvider";

export function InfoClient() {
  const { ticket, dispatch } = useContext(AppContext);

  function changeClientData(data, change) {
    if (change == "name") {
      var newClientInfo = { ...ticket.client, name: data.target.value };
    }
    if (change == "street") {
      var newClientInfo = {
        ...ticket.client,
        address: {
          street: data.target.value,
          number: ticket.client.address.number,
        },
      };
    }
    if (change == "number") {
      var newClientInfo = {
        ...ticket.client,
        address: {
          number: data.target.value,
          street: ticket.client.address.street,
        },
      };
    }

    dispatch({ type: SET_CLIENT, payload: newClientInfo });
  }

  const labelCss = "h-8";
  const inputCss = "h-8 rounded-md";
  const containerCss = "flex gap-2";
  const flexCol = "flex w-45 flex-col";
  return (
    <div className="">
      <div className={`${containerCss}`}>
        <div className={`${flexCol}`}>
          <label className={`${labelCss} `} htmlFor="clientnombre">
            Nombre Cliente
          </label>
          <input
            onChange={(event) => {
              changeClientData(event, "name");
            }}
            className={`${inputCss}`}
            name="clientnombre"
            type="text"
            placeholder="Nombre cliente"
          />
        </div>
        <div className={`${flexCol}`}>
          <label className={`${labelCss}`} htmlFor="direccion">
            Direccion
          </label>
          <input
            onChange={(event) => {
              changeClientData(event, "street");
            }}
            className={`${inputCss}`}
            name="direccion"
            type="text"
            placeholder="Direccion"
          />
        </div>
        <div className={`${flexCol}`}>
          <label className={`${labelCss}`} htmlFor="altura">
            Altura
          </label>
          <input
            onChange={(event) => {
              changeClientData(event, "number");
            }}
            className={`${inputCss}`}
            name="altura"
            type="text"
            placeholder="Altura"
          />
        </div>
      </div>
    </div>
  );
}
