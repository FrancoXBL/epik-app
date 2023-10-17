import "./infoClientComponent.css";
import { AppContext } from "../../provider/AppProvider";
import { useContext } from "react";

export function InfoClient() {

  const { client, setClient } = useContext(AppContext)

  function changeName(data){
    const newClientInfo = {...client, name: data.target.value}
    setClient(newClientInfo)
  }

  function changeAddress(data, client){
    const newClientInfo = {...client, address:{street: data.target.value, number: client.address.number}}

    console.log(newClientInfo)
    setClient(newClientInfo)
  }
  function changeAddressNumber(data, client){
    const newClientInfo = {...client, address:{number: data.target.value, street: client.address.street}}

    console.log(newClientInfo)
    setClient(newClientInfo)
  }


  const name = "Nombre Cliente";

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
          <input onChange={(event) => {
            changeName(event)
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
          <input onChange={(event) => {
            changeAddress(event, client)
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
          <input onChange={(event) => {
            changeAddressNumber(event, client)
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
