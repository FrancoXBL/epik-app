import { useState } from "react";
import ModalPromotionPrice from "../../modal/ModalPromotionPrice";
import Modal from "../../modal/Modal";


export default function TicketPromotion() {
    const [isHovered, setIsHovered] = useState(false);
    const [isPromotion, setIsPromotion] = useState(false)
    const [isPromotionOpen, setPromotionOpen] = useState(false);

    const handleFoodComposerClose = () => {
      setPromotionOpen(false);
    };
  
    return (
      <>
      <Modal isOpen={isPromotionOpen}>
        <ModalPromotionPrice close={handleFoodComposerClose} isPromotion={setIsPromotion}/>
      </Modal>
      <>
        <button
          className={"w-10 h-auto bg-accent-100 hover:w-48 transition-all rounded-full"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => {
            if(!isPromotion){
              setPromotionOpen(true)
            }
          }}
        >
          {isHovered ? 'Promocion!' : '+'}
        </button>
      </>
      </>
    );
  }
