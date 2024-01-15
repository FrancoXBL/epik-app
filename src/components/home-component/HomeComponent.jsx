import "./HomeComponents.css";
import { InfoClient } from "../infoClientComponent/InfoClientComponent";
import TicketComponent from "../ticket-component/TicketComponent";
import { useState, useEffect } from "react";
import { AppContext } from "../../provider/AppProvider";
import { SET_IS_TAKE_OUT } from "../../provider/actions";
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

export default function Home() {
  const { dispatch } = useContext(AppContext);
  const { activeStep, handleNext, handleBack } = useStepper(0);
  const [openCollapsible, setOpenCollapsible] = useState(null);

  const setIsTakeOut = (value) => {
    handleNext();
    dispatch({ type: SET_IS_TAKE_OUT, payload: value });
  };

  const [list, setList] = useState([
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
  ])
  const handleOnClick = (index) => {
    setOpenCollapsible(index);
  };
  useEffect(() => {
    setOpenCollapsible(0);
  }, [activeStep]);
  return (
    <div style={{ maxWidth: "1070px" }}>
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
                      title="Para llevar"
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
                        onClick={() => handleOnClick(index)}
                      >
                        {Item}
                      </CollapsibleContainer>
                    ))}
                  </div>
                </MenuContainer>

                <MenuContainer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nobis sapiente consequuntur velit, veritatis sunt in
                  voluptatum, reprehenderit voluptate assumenda magnam quas
                  iusto cum sit expedita facilis autem magni quasi.
                  <ul>
                    <li>asas</li>
                    <li>asas</li>
                    <li>asas</li>
                  </ul>
                </MenuContainer>
                <MenuContainer>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem quos fugiat, itaque vel, numquam a nostrum cum ab unde
                  qui quam beatae ut esse repellendus ipsam cupiditate laborum
                  voluptatum consequuntur!
                  <button>asas</button>
                  <button>asas</button> <button>asas</button>
                </MenuContainer>
                <MenuContainer>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque possimus, est fugit incidunt illum hic obcaecati sint
                  dolorem facere nostrum totam eos fuga nulla velit libero
                  deserunt dolorum nam voluptatum. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Neque possimus, est fugit
                  incidunt illum hic obcaecati sint dolorem facere nostrum totam
                  eos fuga nulla velit libero deserunt dolorum nam voluptatum.
                </MenuContainer>
              </StepperMenu>
            </div>
          </MenuContainer>
        </div>
        <div className="back">
          <Button
            disabled={activeStep === 0}
            action={handleBack}
            type={BUTTON_TYPES.secondary}
          />
        </div>
        <div>
          <Button action={() => {}} type={BUTTON_TYPES.delete} />
        </div>
        <div className="ticket h-full box-border max-h-[480px]">
          <TicketComponent isPrintTicket={false}/>
        </div>
        <div>
          <Button action={() => { printTicket("forPrint") }} type={BUTTON_TYPES.confirm} />
        </div>
      </div>
    </div>
    // <div style={{ height: "70vh" }} className="flex gap-2 w-2/3 m-auto p-4">

    //   <div className="w-96">
    //
    //   </div>
    // </div>
  );
}
