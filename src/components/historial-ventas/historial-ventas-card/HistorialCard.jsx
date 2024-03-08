import { useState } from "react";
import Modal from "../../modal/Modal";
import MenuContainer from "../../menu-container/MenuContainer";
import ModalContentDeleteSale from "../../modal/ModalContentDeleteSale";
export function HistorialCard({ saleCard, change, setChange }) {

  console.log(saleCard)
  const [isFoodComposerOpen, setIsFoodComposerOpen] = useState(false);

  const handleFoodComposerClose = () => {
    setIsFoodComposerOpen(false);
  };

  return (
    <div className="my-3">
      <MenuContainer>
        <div className="flex gap-9 text-base justify-between">
            <div>
            Nombre: {saleCard.sale.ticket.client.name}
            </div>
            <div>
            Direccion: {saleCard.sale.ticket.client.address.street}
            </div>
            <div>
            Monto: $
            {saleCard.sale.ticket.total}
            </div>
            <div>
           Metodo de pago: {saleCard.payMethod}
            </div>
            <div>
           Cadete: {saleCard.delivery}
            </div>
            <div>
           Pedido #: {saleCard.sale.ticket.orderNumber}
            </div>
          <button onClick={() => {
            setIsFoodComposerOpen(true)
          }}>❌</button>
          </div>
          <Modal
            isOpen={isFoodComposerOpen}
            onClose={handleFoodComposerClose}
          >
            <ModalContentDeleteSale close={setIsFoodComposerOpen} saleCard={saleCard} change={change} setChange={setChange} />
          </Modal>
      </MenuContainer>
    </div>
  );
}
