import "./HomeComponents.css";
import { InfoClient } from "../infoClientComponent/InfoClientComponent";
import TicketComponent from "../ticket-component/TicketComponent";
import { useState, useEffect } from "react";
import WaitingSales from "../waiting-sales/WaitingSales";
import { AppContext } from "../../provider/AppProvider";
import {
  RESET_TICKET,
  SET_IS_TAKE_OUT,
  ADD_WAITING_SALE,
} from "../../provider/actions";
import { Button } from "../button/Button";
import BigButton from "../big-button/BigButton";
import BigButtonContainer from "../big-button/BigButtonContainer";
import StepperMenu from "../stepper-menu/StepperMenu";
import { useStepper } from "../../hooks/useStepper";
import MenuContainer from "../menu-container/MenuContainer";
import CollapsibleContainer from "../collapsible-container/CollapsibleContainer";
import TakeAway from "../../assets/epik-takeaway.png";
import Local from "../../assets/epik-local.png";
import { BUTTON_TYPES } from "../../constants/buttonTypes";
import { useContext } from "react";
import printTicket from "../../features/printTicket";
import axios from "axios";
import API_KEY from "../../constants/api";
import Modal from "../modal/Modal";
import ModalContent from "../modal-content/ModalContent";
import toast from "react-hot-toast";
import verifyInfoSale from "../../features/verifyInfoSale";
import ModalContentNotDeliveryCost from "../modal/ModalContentNotDeliveryCost";
import ModalResetTicket from "../modal/ModalResetTicket";

export default function Home() {
  const { dispatch, ticket } = useContext(AppContext);
  const { activeStep, handleNext, handleBack } = useStepper(0);
  const [openCollapsible, setOpenCollapsible] = useState(null);
  const [selectedItem, setSelectedItem] = useState();
  const [isFoodComposerOpen, setIsFoodComposerOpen] = useState(false);
  const [isNotDeliveryCostComposerOpen, setIsNotDeliveryCostComposerOpen] =
    useState(false);
  const [isResetTicketOpen, setResetTicketOpen] = useState(false);

  const handleFoodComposerClose = () => {
    setIsFoodComposerOpen(false);
  };
  const handleResetTicketClose = () => {
    setResetTicketOpen(false);
  };

  /////////////////////////// FETCH DATA ///////////////////////////////////
  const [list, setList] = useState([]);
  const [sendListMain, setSendListMain] = useState([]);
  const [sendListExtra, setSendListExtra] = useState([]);

  useEffect(() => {
    axios.get(`${API_KEY}products`).then((res) => {
      /////////////////////////// CREATE LISTS //////////////////////////////////
      const newListExtra = res.data.filter((item) => item.type === "extra");
      setSendListExtra(newListExtra);

      const newListMain = res.data.filter((item) => item.type !== "extra");
      setSendListMain(newListMain);

      setList([
        <BigButtonContainer key="main">
          {newListMain.map((item) => (
            <BigButton
              key={item.id}
              title={item.name}
              icon={""}
              action={() => {
                setSelectedItem(item);
                setIsFoodComposerOpen(true);
              }}
            />
          ))}
        </BigButtonContainer>,
        <BigButtonContainer key="extra">
          {newListExtra.map((item) => (
            <BigButton
              key={item.id}
              title={item.name}
              icon={""}
              action={() => {
                setSelectedItem(item);
                setIsFoodComposerOpen(true);
              }}
            />
          ))}
        </BigButtonContainer>,
      ]);
    });
  }, []);

  /////////////// SELECCIONA SI ES ENVIO O LOCAL /////////////
  const setIsTakeOut = (value) => {
    handleNext();
    dispatch({ type: SET_IS_TAKE_OUT, payload: value });
  };

  const handleOnClick = (index) => {
    setOpenCollapsible(index);
  };
  useEffect(() => {
    setOpenCollapsible(0);
  }, [activeStep]);
  return (
    <div className="fixed top-9 left-16 w-max h-max">
      <Modal isOpen={isResetTicketOpen}>
        <ModalResetTicket close={handleResetTicketClose} back={handleBack} />
      </Modal>
      <Modal isOpen={isNotDeliveryCostComposerOpen}>
        <ModalContentNotDeliveryCost
          close={setIsNotDeliveryCostComposerOpen}
          back={handleBack}
          print={printTicket}
          ticket
        />
      </Modal>

      <div className="grid__container">
        <div className="menu">
          <MenuContainer>
            <div className="flex flex-col justify-between h-full">
              <InfoClient />
              <StepperMenu
                activeStep={activeStep}
                handleBack={handleBack}
                handleNext={handleNext}
              >
                <MenuContainer cleanContainer>
                  <BigButtonContainer>
                    <BigButton
                      title="Local"
                      icon={Local}
                      action={() => setIsTakeOut(false)}
                    />
                    <BigButton
                      title="Envio"
                      icon={TakeAway}
                      action={() => setIsTakeOut(true)}
                    />
                  </BigButtonContainer>
                </MenuContainer>
                <MenuContainer cleanContainer>
                  <div className="flex h-full gap-2 w-100">
                    {list.map((Item, index) => (
                      <CollapsibleContainer
                        key={index}
                        title={`Menu ${index + 1}`}
                        index={index}
                        isOpen={openCollapsible === index}
                        onClick={() => {
                          handleOnClick(index);
                        }}
                      >
                        {Item}
                      </CollapsibleContainer>
                    ))}
                  </div>
                  <Modal
                    isOpen={isFoodComposerOpen}
                    onClose={handleFoodComposerClose}
                  >
                    <div>
                      <MenuContainer>
                        <ModalContent
                          close={setIsFoodComposerOpen}
                          item={selectedItem}
                        ></ModalContent>
                      </MenuContainer>
                    </div>
                  </Modal>
                </MenuContainer>
              </StepperMenu>
            </div>
          </MenuContainer>
        </div>
        <div className="back">
          <Button
            disabled={activeStep === 0}
            action={() => {
              handleBack();
              dispatch({ type: SET_IS_TAKE_OUT, payload: undefined });
            }}
            type={BUTTON_TYPES.secondary}
          />
        </div>
        <div>
          <Button
            action={() => {
              setResetTicketOpen(true);
            }}
            type={BUTTON_TYPES.delete}
          />
        </div>
        <div className="ticket h-auto box-border">
          <TicketComponent isPrintTicket={false} />
        </div>
        <div>
          <Button
            action={() => {
              if (
                ticket.isTakeOut &&
                ticket.deliveryCost == 0 &&
                verifyInfoSale(ticket) === true
              ) {
                setIsNotDeliveryCostComposerOpen(true);
              } else if (verifyInfoSale(ticket) === true) {
                dispatch({ type: ADD_WAITING_SALE, payload: undefined });
                handleBack();
                printTicket("forPrint");
              } else {
                toast.error(verifyInfoSale(ticket));
              }
            }}
            type={BUTTON_TYPES.confirm}
          />
        </div>
      </div>
      <div className="flex w-[755px] h-56 gap-5 p-16px">
        <WaitingSales />
      </div>
    </div>
  );
}
