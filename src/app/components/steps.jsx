import React from "react";
import ApiCall from "./steps/apicall";
import Databases from "./steps/databases";
import Git from "./steps/git";
import Vercel from "./steps/vercel";

const Steps = () => {
  return (
    <div className="text-3xl font-semibold">
      <ApiCall />
      <Databases />
      <Git />
      <Vercel />
    </div>
  );
};

export default Steps;
