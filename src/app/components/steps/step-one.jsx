import React from "react";

const StepOne = () => {
  return (
    <div className="bg-zinc-200 w-max p-5 shadow-md rounded-xl my-2">
      <h1 className="text-lg font-semibold">Step 1:</h1>
      <p>Create New Empty Repo on Git Hub</p>
      <ul>
        <li>Give Description</li>
        <li>Select Public or Private</li>
      </ul>
    </div>
  );
};

export default StepOne;
