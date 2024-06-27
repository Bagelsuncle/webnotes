import React from "react";
import { useState } from "react";

const StepOne = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex m-2 p-2 shadow-lg rounded-md justify-center bg-red-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step One: Create Repo
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇️
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <p className="text-2xl text-blue-950 font-bold flex">
            <ol className="flex flex-col ml-8 text-orange-950 text-xl list-decimal ">
              <li>Create a Repo in GitHub</li>
              <li>Copy Repo Link</li>
              <li>Clone Repo to Local Machine</li>
              <li>"cd" to proper directory</li>
              <li>git clone (REPO)</li>
              <li>CD to Repo</li>
              <li> NPX create-next-app@latest (.)</li>
            </ol>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepOne;
