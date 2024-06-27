import React from "react";
import { useState } from "react";

const StepFour = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex m-2 p-2 shadow-lg rounded-md justify-center bg-yellow-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step Four: Create Components
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇️
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <p className="text-2xl text-blue-950 font-bold flex">
            <ol className="flex flex-col ml-24 text-orange-950 text-xl list-decimal ">
              <li>Create components DIR in local project</li>
              <li>Create any needed components</li>
              <li>Import Components into parent component</li>
              <li>Pass needed Props</li>
            </ol>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepFour;
