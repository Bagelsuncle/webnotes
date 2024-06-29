import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepTwo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex shadow-lg rounded-md justify-center bg-yellow-300 flex-col">
      <div className="flex justify-center">
        <h1 className=" font-bold text-2xl text-blue-950">
          {" "}
          Step Two: First Commit to Git Hub
        </h1>
        <button onClick={toggleParagraph} className="text-3xl ">
          ⬇<FontAwesomeIcon icon="fa-regular fa-arrow-down shadow-lg" />
        </button>
      </div>

      {isVisible && (
        <div className="flex justify-center">
          <div className="text-2xl text-blue-950 font-bold flex">
            <ol className="flex flex-col ml-24 text-orange-950 text-xl list-decimal ">
              <li>Clean Out Pages</li>
              <li>Wipe Global CSS</li>
              <li>Add to Git Hub</li>
              <li>Git add (.)</li>
              <li>git commit - &quot;first push&quot;</li>
              <li>git push</li>
              <li>Now your local changes are in Git Hub</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
export default StepTwo;
