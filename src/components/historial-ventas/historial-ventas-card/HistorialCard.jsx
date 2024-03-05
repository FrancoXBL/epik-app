import { useState } from "react";
import Modal from "../../modal/Modal";
import MenuContainer from "../../menu-container/MenuContainer";
import ModalContentDeleteSale from "../../modal/ModalContentDeleteSale";
export function HistorialCard({ saleCard, change, setChange }) {

  const [isFoodComposerOpen, setIsFoodComposerOpen] = useState(false);

  const handleFoodComposerClose = () => {
    setIsFoodComposerOpen(false);
  };

  return (
    <>
      <MenuContainer>
        <div>
          <span>
            {saleCard.sale.ticket.client.name} -{" "}
            {saleCard.sale.ticket.client.address.street}{" "}
            {saleCard.sale.ticket.client.address.number}, $
            {saleCard.sale.ticket.total}
          </span>
          <span>{saleCard.payMethod}</span>
          <button onClick={() => {
            setIsFoodComposerOpen(true)
          }}>❌</button>
          <Modal
            isOpen={isFoodComposerOpen}
            onClose={handleFoodComposerClose}
          >
            <ModalContentDeleteSale close={setIsFoodComposerOpen} saleCard={saleCard} change={change} setChange={setChange} />
          </Modal>
        </div>
      </MenuContainer>
    </>
  );
}
