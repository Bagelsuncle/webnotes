"use client";
import React from "react";
import Nav from "./components/nav";
import Links from "./components/links";
import Steps from "./components/stepOne";
import StepOne from "./components/stepOne";

import StepTwo from "./components/stepTwo";
import StepFour from "./components/stepFour";
import StepFive from "./components/stepFive";
import StepThree from "./components/stepThree";

const StepsArray = [
  { title: "Step 1 create New Repo", text: "Step 1 Description" },
  {
    title: "Step 2: Prepare for first push to Git Hub",
    text: "Step 2 Description",
  },
  {
    title: "Step 3: Deploy with Vercel",
    text: "Step 3 Description",
  },
  {
    title: "Step 4: Create Components in VS code",
    text: "Step 2 Description",
  },
];

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Nav />
        <div className="max-w-screen-full flex justify-center flex-col">
          <Steps />

          <Links />
        </div>
      </div>
    </div>
  );
};

export default Home;
