import { AppContext } from "../../provider/AppProvider";
import { DELETE_SPENT } from "../../provider/actions";
import { useContext } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function ModalDeleteSpent({ close, list, change, setChange  }) {
  const { dispatch } = useContext(AppContext);

  const deleteSpent = (payload) => {
    dispatch({ type: DELETE_SPENT, payload });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white border rounded-lg shadow-2xl p-24px gap-4 flex flex-col"
        style={{ minWidth: "600px" }}
      >
        {list.map((i) => {
          return (
            <div className="flex p-16px py-8 border justify-between">
              <div>
                Se gasto en: {i.description} - ${i.spent}
              </div>
              <div
                className="hover:cursor-pointer h-7 w-7"
                onClick={() => {
                  deleteSpent(i._id);
                  setChange(change + 1)
                  close(false)
                }}
              >
                <RiDeleteBack2Fill className="m-auto text-3xl text-delete-hover text-center text-middle" />
              </div>
            </div>
          );
        })}
        <div className="hover:cursor-pointer rounded-lg bg-accent-100 text-2xl text-white text-center p-24px" onClick={() => {
            close(false)
        }}>Cerrar</div>
      </div>
    </div>
  );
}
