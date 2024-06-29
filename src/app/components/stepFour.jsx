import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepFour = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex shadow-lg rounded-md justify-center bg-yellow-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step Four: Create Components
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇<FontAwesomeIcon icon="fa-regular fa-arrow-down shadow-lg" />
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <div className="text-2xl text-blue-950 font-bold flex">
            <ol className="flex flex-col ml-24 text-orange-950 text-xl list-decimal ">
              <li>Create components DIR in local project</li>
              <li>Create any needed components</li>
              <li>Import Components into parent component</li>
              <li>Pass needed Props</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepFour;
