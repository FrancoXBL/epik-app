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
    <div>
      <div className="p-16px bg-delete-normal rounded-xl mb-2">
        <h1 className="text-white text-4xl">¿Seguro que quieres eliminar esta venta?</h1>
      </div>
      <div className="">
        <div className="">
          <BigButton
            title={"Aceptar y eliminar"}
            action={() => {
              handleDeleteClick(saleCard._id);
              setChange(change + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
