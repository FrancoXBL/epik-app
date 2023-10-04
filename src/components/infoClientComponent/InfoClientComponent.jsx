import "./infoClientComponent.css";
export function InfoClient() {
  const name = "Nombre Cliente";

  const labelCss = "h-6";
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
