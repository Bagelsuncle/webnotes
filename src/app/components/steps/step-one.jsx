import React from "react";

const StepOne = () => {
  return (
    <div className="bg-zinc-200 w-max p-5 shadow-md rounded-xl my-2">
      <h1 className="text-lg font-semibold">Step 1: Create New Repo</h1>
      <ol>
        <li>Create new Repo and copy Link from GitHub (SSH)</li>
        <li>
          Clone repo to local Machine. IN TERMINAL (git clone (paste SSH))
        </li>
        <li>TERMINAL CD to recently cloned Repo</li>
        <li>Create Next App. IN TERMINAL (npx create-next@latest .)</li>
        <li>Now you have a template</li>
      </ol>
    </div>
  );
};

export default StepOne;
