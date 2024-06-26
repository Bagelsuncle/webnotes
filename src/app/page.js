import React from "react";
import Nav from "./components/nav";
import Steps from "./components/steps";
import Links from "./components/links";
import StepOne from "./components/steps/step-one";
import StepTwo from "./components/steps/step-two";
import StepThree from "./components/steps/step-three";
import StepFour from "./components/steps/step-four";

const Home = () => {
  return (
    <div className="bg-amber-500">
      <Nav />
      <div className="flex justify-center">
        <div className="flex bg-blue-500 justify-start ">
          <Links />
          <div className="flex bg-gray-500 justify-end mt-10">
            <Steps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
