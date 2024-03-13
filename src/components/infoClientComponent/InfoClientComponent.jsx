import "./infoClientComponent.css";
import { useContext, useEffect } from "react";
import { SET_CLIENT } from "../../provider/actions";
import { AppContext } from "../../provider/AppProvider";

export function InfoClient() {
  const { ticket, dispatch } = useContext(AppContext);

  console.log(ticket)

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
    dispatch({ type: SET_CLIENT, payload: newClientInfo });
  }


  const inputCss = "h-[40px] px-[12px] py-[8px] mb-[16px] w-full rounded-md bg-gray-1 text-bg-300";
  const containerCss = "flex gap-4 w-full justify-between";
  const flexCol = "flex w-45 flex-col w-full";

  if(ticket.isTakeOut === true){
    return (
      <>
        <div className={`${containerCss}`}>
          <div className={`${flexCol}`}>
            <input
              onChange={(event) => {
                changeClientData(event, "name");
              }}
              className={`${inputCss}`}
              name="clientnombre"
              type="text"
              id="nombreCliente"
              placeholder="Nombre cliente"
            />
          </div>
          <div className={`${flexCol}`}>
            <input
              onChange={(event) => {
                changeClientData(event, "street");
              }}
              className={`${inputCss}`}
              name="direccion"
              type="text"
              id="direccion"
              placeholder="Direccion"
            />
          </div>
        </div>
      </>
    );
  } else if(ticket.isTakeOut === false) {
    return (
      <>
        <div className={`${containerCss}`}>
          <div className={`${flexCol}`}>
            <input
              onChange={(event) => {
                changeClientData(event, "name");
              }}
              className={`${inputCss}`}
              name="clientnombre"
              type="text"
              id="nombreCliente"
              placeholder="Nombre cliente"
            />
          </div>
        </div>
      </>
    );
  } else {
    return (<></>)
  }
}
