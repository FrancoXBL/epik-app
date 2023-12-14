import { WindowBurgerComponent } from "../window-burger-component/WindowComponent/WindowComponent";
import { AderesosComponent } from "../window-aderesos-component/AderesosSelect/WindowAderesosComponent";
import { InfoClient } from "../infoClientComponent/InfoClientComponent";
import WindowSalesComponent from "../window-sales-component/windowSalesComponent";
import TicketComponent from "../ticket-Component/TicketComponent";
import { useState, useEffect } from "react";
import { AppContext } from "../../provider/AppProvider";
import { SET_IS_TAKE_OUT } from "../../provider/actions";
import { MdDeliveryDining, MdRestaurant } from "react-icons/md";
import BigButton from "../big-button/BigButton";
import BigButtonContainer from "../big-button/BigButtonContainer";
import StepperMenu from "../stepper-menu/StepperMenu";
import { useStepper } from "../../hooks/useStepper";
import MenuContainer from "../menu-container/MenuContainer";
import CollapsibleContainer from "../collapsible-container/CollapsibleContainer";

import { useContext } from "react";
const list = [
  <BigButtonContainer>
    <BigButton title="Epika" icon={""} action={() => setIsTakeOut(true)} />
    <BigButton title="Lancelot" icon={""} action={() => setIsTakeOut(false)} />
    <BigButton title="Epika" icon={""} action={() => setIsTakeOut(true)} />
    <BigButton title="Epika" icon={""} action={() => setIsTakeOut(true)} />
    <BigButton title="Lancelot" icon={""} action={() => setIsTakeOut(false)} />
    <BigButton title="Lancelot" icon={""} action={() => setIsTakeOut(false)} />
  </BigButtonContainer>,
  <BigButtonContainer>
    <BigButton title="Queso azul" icon={""} action={() => setIsTakeOut(true)} />
    <BigButton
      title="Papas extra"
      icon={""}
      action={() => setIsTakeOut(false)}
    />
  </BigButtonContainer>,
];

export default function Home() {
  const { dispatch } = useContext(AppContext);
  const { activeStep, handleNext, handleBack } = useStepper(0);
  const [openCollapsible, setOpenCollapsible] = useState(null);

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
    <div style={{ height: "60vh" }} className="flex gap-2 w-2/3 m-auto p-4">
      <MenuContainer>
        <div className="flex flex-col justify-between h-full">
          <StepperMenu
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          >
            <MenuContainer cleanContainer>
              <BigButtonContainer>
                <BigButton
                  title="Para llevar"
                  icon={<MdDeliveryDining />}
                  action={() => setIsTakeOut(true)}
                />
                <BigButton
                  title="Local"
                  icon={<MdRestaurant />}
                  action={() => setIsTakeOut(false)}
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
                    onClick={() => handleOnClick(index)}
                  >
                    {Item}
                  </CollapsibleContainer>
                ))}
              </div>
            </MenuContainer>
          </StepperMenu>
          <div className="">
            <button className="p-4 h-full border m-auto" onClick={handleBack}>
              Atras
            </button>
          </div>
        </div>
      </MenuContainer>
      <div className="w-96">
        <TicketComponent />
      </div>
    </div>
  );
}
