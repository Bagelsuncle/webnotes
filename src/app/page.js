import React from "react";
import Nav from "./components/nav";
import Steps from "./components/steps";

const Home = () => {
  return (
    <div className="h-screen">
      <div className=" flex justify-center">
        <Nav />
      </div>
      <Steps />
    </div>
  );
};

export default Home;
