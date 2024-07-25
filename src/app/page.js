"use client";
import React, { useEffect } from "react";
import Nav from "./components/nav";
import Links from "./components/links";
import TestingContainer from "./components/testingContainer";
import StepList from "./components/stepList";
import ExperimentingContainer from "./components/experimentingContainer";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/webnotes");
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data
        setCoffeeShops(data);
      } catch (error) {
        console.error("Error fetching coffee shops:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-slate-100 flex justify-center mb-4">
        <div className="">
          <div className="max-w-screen-full flex justify-center flex-col">
            <StepList />
            <Links />
            <TestingContainer />
            <ExperimentingContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
