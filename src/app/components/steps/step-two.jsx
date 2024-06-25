import React from "react";

export const StepTwo = () => {
  return (
    <div className="bg-zinc-200 w-max p-5 shadow-md rounded-xl my-2">
      <h1 className="text-lg font-semibold">
        Step 2: Prepare for first push to Git Hub
      </h1>
      <ol>
        <li>Wipe Global CSS (Keep Tailwind)</li>
        <li>IN VS CODE TERMINAL:</li>
        <li> "git add ."</li>
        <li>"git commit -m "first push""</li>
        <li>"git push"</li>
      </ol>
    </div>
  );
};

export default StepTwo;
