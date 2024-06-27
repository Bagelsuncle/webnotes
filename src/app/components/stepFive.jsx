import React from "react";
import { useState } from "react";

const StepFive = () => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex m-2 p-2 shadow-lg rounded-md justify-center bg-red-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step Five: Create API Endpoint
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇️
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <p className="text-2xl text-blue-950 font-bold flex">
            <ol className="pl-80 flex flex-col ml-8 text-orange-950 text-xl list-decimal ">
              <li>Create Pages DIR</li>
              <li>Create API DIR within Pages DIR</li>
              <li>Import API Code</li>
              <li>Create Postgres DB with Vercel</li>
              <li>Follow Vercel Instructions</li>
              <li>Import Vercel/Postgress package with 'npm i (package)</li>
              <li>
                Import Local Enviornment Variables into Repo with Vercel Command
              </li>
              <li>Use SQL statement in Vercel to create a table</li>
            </ol>
          </p>
        </div>
      )}
    </div>
  );
};
export default StepFive;
