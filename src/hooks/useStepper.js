import { useState } from "react";

export function useStepper(initialStep = 0) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);
  };

  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    console.log(activeStep);
  };

  return { activeStep, handleNext, handleBack };
}
