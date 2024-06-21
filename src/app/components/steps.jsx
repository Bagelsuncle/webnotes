import React from "react";
import ApiCall from "./steps/api-call";
import Databases from "./steps/databases";
import Git from "./steps/git";
import Vercel from "./steps/vercel";
import StepOne from "./steps/step-one";

const Steps = () => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <StepOne />
      <Git />
      <Vercel />
      <Databases />
      <ApiCall />
    </div>
  );
};

export default Steps;
