import React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./stepFive";

const Steps = () => {
  return (
    <div className="flex">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      <StepFive />
    </div>
  );
};

export default Steps;
