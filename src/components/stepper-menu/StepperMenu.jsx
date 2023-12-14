import React, { useEffect, useState } from "react";

function StepperMenu({ activeStep, handleNext, handleBack, children }) {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    setSteps(React.Children.toArray(children));
  }, [children]);

  return (
    <>
      <div className="flex flex-row justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col w-full items-center justify-center ${
              activeStep === index ? "bg-primary-100" : "bg-primary-200"
            } p-2 `}
          ></div>
        ))}
      </div>
      <div className="border-radius rounded-xl p16 h-80 border-box">
        {steps[activeStep]}
      </div>
    </>
  );
}

export default StepperMenu;
