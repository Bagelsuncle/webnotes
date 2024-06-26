import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const StepOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex shadow-lg rounded-md justify-center bg-red-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step One: Create Repo
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇<FontAwesomeIcon icon="ml-16 fa-regular fa-arrow-down shadow-lg" />
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <div className="text-2xl text-blue-950 font-bold flex">
            <div className="flex flex-col ml-8 text-orange-950 text-xl list-decimal ">
              <li>Create a Repo in GitHub</li>
              <li>Copy Repo Link</li>
              <li>Clone Repo to Local Machine</li>
              <li>&quot;cd&quot; to proper directory</li>
              <li>git clone (REPO)</li>
              <li>CD to Repo</li>
              <li> NPX create-next-app@latest (.)</li>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepOne;
