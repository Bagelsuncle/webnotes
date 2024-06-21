import React from "react";
import Nav from "./components/nav";
import Steps from "./components/steps";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className=" flex justify-center">
        <Nav />
      </div>
      <div>
        <Steps />
      </div>
    </div>
  );
};

export default Home;
