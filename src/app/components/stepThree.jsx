import React from "react";
import { useState } from "react";

const StepThree = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex m-2 p-2 shadow-lg rounded-md justify-center bg-red-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step Three: Deploy With Vercel
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇️
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <p className="text-2xl text-blue-950 font-bold flex">
            <ol className="ml-72 flex flex-col ml-8 text-orange-950 text-xl list-decimal ">
              <li>Create new Next Project</li>
              <li>Import connect to Git Hub Project</li>
              <li>Deploy Site Button</li>
              <li>Vercel Website Now Ready</li>
              <li>To connect a custom domain</li>
              <li>Add the Vercel provided "A" and "CName" to your provider</li>
              <li> New Git Push will update Vercel and Git Hub</li>
            </ol>
          </p>
        </div>
      )}
    </div>
  );
};

export default StepThree;
