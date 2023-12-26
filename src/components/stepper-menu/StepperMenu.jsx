import "./StepperMenu.css";
import React, { useEffect, useState, useRef } from "react";
const left = Symbol("left");
const right = Symbol("right");
function StepperMenu({ activeStep, handleNext, handleBack, children }) {
  const [steps, setSteps] = useState([]);
  const [animateDirection, setAnimateDirection] = useState(left); // ["left", "right"
  const [prevActiveStep, setPrevActiveStep] = useState(0);

  const handleAnimation = () => {
    if (animateDirection === left) {
      return (
        <div
          key={`${activeStep}-${animateDirection.toString()}`}
          className="animate__animated animate__slideOutLeft absolute top-0 left-0 w-full h-full"
        >
          {steps[activeStep - 1]}
        </div>
      );
    }
    if (animateDirection === right) {
      return (
        <div
          key={`${activeStep}-${animateDirection.toString()}`}
          className="animate__animated animate__slideOutRight absolute top-0 left-0 w-full h-full"
        >
          {steps[activeStep + 1]}
        </div>
      );
    }
  };
  useEffect(() => {
    setSteps(React.Children.toArray(children));
  }, [children]);

  useEffect(() => {
    if (prevActiveStep > activeStep) {
      console.log("right");
      setAnimateDirection(right);
    }
    if (prevActiveStep < activeStep) {
      console.log("left");
      setAnimateDirection(left);
    }
    setPrevActiveStep(activeStep);
  }, [activeStep]);

  return (
    <>
      <div className="flex flex-row justify-between">
        {/* <span onClick={handleBack}>back</span>
        <span onClick={handleNext}>next</span> */}
      </div>
      {/* <div className="flex flex-row justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center justify-center ${
              activeStep === index ? "bg-primary-100" : "bg-primary-200"
            } p-2 `}
          ></div>
        ))}
      </div> */}
      <div className="border-radius overflow-hidden	 relative rounded-xl p16 h-full border-box">
        {handleAnimation()}
        <div
          key={activeStep}
          className="delay__entrance animate__animated absolute top-0 left-0 w-full h-full"
        >
          {steps[activeStep]}
        </div>
      </div>
    </>
  );
}

export default StepperMenu;
