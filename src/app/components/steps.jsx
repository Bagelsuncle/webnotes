import React from "react";
import ApiCall from "./steps/api-call";
import Databases from "./steps/databases";
import Git from "./steps/git";
import Vercel from "./steps/vercel";
import StepOne from "./steps/step-one";
import StepTwo from "./steps/step-two";
import StepThree from "./steps/step-three";
import StepFour from "./steps/step-four";

const Steps = () => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
      {/* <Git />
      <Vercel />
      <Databases />
      <ApiCall /> */}
    </div>
  );
};

export default Steps;

// Create a Repo in Git Hub
// Copy Repo Link
// Clone Repo to Local Machine
//  "Cd" to proper dir
//  git clone {repo}
// cd to {repo}
// create next-app@latest
// npx create-next@latest .
// NOW you have a template
// Clean out pages
// wipe global CSS (keep TW)
// add to GitHUB
// git add .
// git commit -m "first push"
// "git push"
// NOW your local changes are in GitHub
// Deploy with Vercel
// Create New Next Project
// Import/connect to github project
// Deploy Side Button
// Vercel Website is now ready
// To connect a custom domain add the vercel provided "A" and "CNAME" record to your domain provider
// any new "git push will update github and vercel "
// Create a components dir in your local project.
// Create any needed component
// import components into parent component
// pass needed props
// build API endpoints
// Create pages Dir
// Create API Dir within the pages dir
// Create API endpoint with a (.) JS file extension
// Import API code
// Create postgres DB with Vercel
// Follow Vercel instructions
// import vercel/postgres npm package with npm i {package}
// import local env vars into repo via vercel command
// Use "sql" statement in Vercel to create table
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
