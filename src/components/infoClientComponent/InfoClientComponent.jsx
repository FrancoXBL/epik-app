import "./infoClientComponent.css";
import { useContext, useEffect } from "react";
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
    // if (change == "number") {
    //   var newClientInfo = {
    //     ...ticket.client,
    //     address: {
    //       number: data.target.value,
    //       street: ticket.client.address.street,
    //     },
    //   };
    // }
    dispatch({ type: SET_CLIENT, payload: newClientInfo });
  }


  const inputCss = "h-[40px] px-[12px] py-[8px] mb-[16px] w-full rounded-md bg-gray-1 text-bg-300";
  const containerCss = "flex gap-4 w-full justify-between";
  const flexCol = "flex w-45 flex-col w-full";
  return (
    <>
      <div className={`${containerCss}`}>
        <div className={`${flexCol}`}>
          {/* <label className={`${labelCss} `} htmlFor="clientnombre">
            Nombre Cliente
          </label> */}
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
          {/* <label className={`${labelCss}`} htmlFor="direccion">
            Direccion
          </label> */}
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
        {/* <div className={`${flexCol}`}>
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
        </div> */}
      </div>
    </>
  );
}
