import axios from "axios";
import { useEffect, useState } from "react";
import API_KEY from "../../constants/api";
import { date } from "../../features/date";
import ModalAddSpent from "../modal/ModalAddSpent";
import ModalDeleteSpent from "../modal/ModalDeleteSpent";
import Modal from "../modal/Modal";
import calcDaySpents from "../../features/calcDaySpents";

export function SpentsComponent() {
  const [spents, setSpents] = useState([]);
  const [dayDate, setDayDate] = useState(date());
  const [modalSpentOpen, setModalSpentOpen] = useState(false);
  const [modalDeleteSpentOpen, setModalDeleteSpentOpen] = useState(false);
  const [totalSpents, setTotalSpets] = useState(0);
  const [change, setChange] = useState(0);

  const handleCloseModalSpent = () => {
    setModalSpentOpen(false);
  };
  const handleCloseModalDeleteSpent = () => {
    setModalDeleteSpentOpen(false);
  };

  useEffect(() => {
    axios.get(`${API_KEY}/spents/${dayDate}`).then((res) => {
      const data = res.data;
      setSpents(data);
      const newSpents = calcDaySpents(data);
      setTotalSpets(newSpents);
    });
  }, [change, modalSpentOpen]);

  return (
    <>
      <Modal isOpen={modalSpentOpen}>
        <ModalAddSpent
          close={handleCloseModalSpent}
          change={change}
          setChange={setChange}
        />
      </Modal>
      <Modal isOpen={modalDeleteSpentOpen}>
        <ModalDeleteSpent
          close={handleCloseModalDeleteSpent}
          list={spents}
          change={change}
          setChange={setChange}
        />
      </Modal>
      <div className="flex gap-3">
        <div
          onClick={() => {
            setModalSpentOpen(true);
          }}
          className="w-2/3 p-16px bg-accent-100 mt-4 rounded-button text-2xl text-white text-center hover:cursor-pointer"
        >
          Sumar Gasto
        </div>
        <div
          onClick={() => {
            setModalDeleteSpentOpen(true);
          }}
          className="w-1/3 p-16px bg-delete-normal mt-4 rounded-button text-2xl text-white text-center hover:cursor-pointer"
        >
          Eliminar Gasto
        </div>
      </div>
      <div className="text-2xl border-bg-100 border flex justify-between rounded-xl p-16px mb-3 mt-3">
        <div>Gastos diarios: </div>
        <div className="text-4xl">${totalSpents}</div>
      </div>
    </>
  );
}
