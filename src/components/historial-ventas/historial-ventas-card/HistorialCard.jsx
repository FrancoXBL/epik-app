import { useState } from "react";
import Modal from "../../modal/Modal";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalContentDeleteSale from "../../modal/ModalContentDeleteSale";
import { IoIosMore } from "react-icons/io";
import ModalInfoSale from "../../modal/ModalInfoSale";
export function HistorialCard({ saleCard, change, setChange }) {
  const [isFoodComposerOpen, setIsFoodComposerOpen] = useState(false);

  const handleFoodComposerClose = () => {
    setIsFoodComposerOpen(false);
  };

  const [isModalInfoSaleOpen, setIsModalInfoSaleOpen] = useState(false);

  const handleModalInfoSaleClose = () => {
    setIsModalInfoSaleOpen(false);
  };

  return (
    <div className="my-3 flex bg-white h-auto p-16px rounded-xl justify-between">
      <div className="grid text-base w-auto">
        <div>Nombre: {saleCard.sale.ticket.client.name}</div>
        {saleCard.sale.ticket.isTakeOut === true ? (
          <div>Direccion: {saleCard.sale.ticket.client.address.street}</div>
        ) : (
          "-"
        )}
        <div>Monto: ${saleCard.sale.ticket.total}</div>
        <div>Metodo de pago: {saleCard.payMethod}</div>
        {saleCard.sale.ticket.isTakeOut === true ? (
          <div>
            Cadete: {saleCard.delivery} - ${saleCard.sale.ticket.deliveryCost}
          </div>
        ) : (
          "-"
        )}
        <div>Pedido: #{saleCard.sale.ticket.orderNumber}</div>
      </div>
      <div className="flex flex-col justify-between w-1/3 gap-3">
        <button
          onClick={() => {
            setIsFoodComposerOpen(true);
          }}
          className="h-full bg-delete-normal rounded-xl "
        >
          <RiDeleteBin6Line className="m-auto text-2xl text-white"/>
        </button>
        <button
          onClick={() => {
            setIsModalInfoSaleOpen(true);
          }}
          className="h-full bg-confirm-normal rounded-xl"
        >
          <IoIosMore className="m-auto text-2xl" />
        </button>
      </div>
      <Modal isOpen={isFoodComposerOpen} onClose={handleFoodComposerClose}>
        <ModalContentDeleteSale
          close={setIsFoodComposerOpen}
          saleCard={saleCard}
          change={change}
          setChange={setChange}
        />
      </Modal>
      <Modal isOpen={isModalInfoSaleOpen} onClose={handleModalInfoSaleClose}>
          <ModalInfoSale close={setIsModalInfoSaleOpen} sale={saleCard} />
      </Modal>
    </div>
  );
}
