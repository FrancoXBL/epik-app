import "./HomeComponents.css";
import { InfoClient } from "../infoClientComponent/InfoClientComponent";
import TicketComponent from "../ticket-component/TicketComponent";
import { useState, useEffect } from "react";
import { AppContext } from "../../provider/AppProvider";
import {
  ADD_LISTITEM_TICKET_PRODUCT,
  ADD_LISTITEM_TICKET_EXTRAS,
  SET_IS_TAKE_OUT,
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

// import fetchData from '../../api/fetchData.js'

export default function Home() {
  const { dispatch } = useContext(AppContext);
  const { activeStep, handleNext, handleBack } = useStepper(0);
  const [openCollapsible, setOpenCollapsible] = useState(null);
  const [selectItem, setSelectItem] = useState();

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
                setSelectItem(item);
                handleNext();
                console.log(item);
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
                setSelectItem(item);
                handleNext();
                console.log(item);
              }}
            />
          ))}
        </BigButtonContainer>,
      ]);
    });
  }, []);

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
                  <div className="flex h-full gap-2 w-100">
                    {selectItem === undefined ? (
                      <></>
                    ) : (
                      <>
                      <>
                        <BigButton title={selectItem.name} />
                      </>
                        {selectItem.specs.map((item) => (
                          <BigButton
                            title={`${item.serving} - ${item.price}`}
                          />
                        ))}
                        <BigButton title={"Veggie"} />
                      </>
                    )}
                  </div>
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
          <TicketComponent isPrintTicket={false} />
        </div>
        <div>
          <Button
            action={() => {
              printTicket("forPrint");
            }}
            type={BUTTON_TYPES.confirm}
          />
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
