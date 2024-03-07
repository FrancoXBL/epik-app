import BigButton from "../big-button/BigButton";
import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import { DELETE_SALE } from "../../provider/actions";

export default function ModalContentDeleteSale({
  close,
  saleCard,
  change,
  setChange,
}) {
  const { dispatch } = useContext(AppContext);
  const handleDeleteClick = (id) => {
    dispatch({ type: DELETE_SALE, payload: { id } });
  };

  return (
<div className="flex items-center justify-center">
  <div className="bg-white border rounded-lg shadow-2xl p-24px" style={{ minWidth: "600px" }}>
    <div className="px-12 py-8 border-b ">
      <h1 className="text-4xl font-semibold">¿Seguro que quieres eliminar esta venta?</h1>
    </div>
    <div className="px-12 py-8">
      <p className="mb-8 text-lg p-16px">Esta acción es irreversible y eliminará permanentemente la venta seleccionada.</p>
      <div className="flex justify-end gap-8">
        <button
          onClick={() => {
            handleDeleteClick(saleCard._id);
            setChange(change + 1);
          }}
          className="p-24px text-xl text-white bg-delete-normal hover:bg-delete-hover focus:outline-none rounded-lg transition duration-150 ease-in-out"
        >
          Aceptar y eliminar
        </button>
        <button
          onClick={() => {
            close(false);
            setChange(change + 1);
          }}
          className="p-24px text-xl bg-gray-1 hover:bg-gray-2  rounded-lg transition ease-in-out"
        >
          No eliminar y continuar
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
