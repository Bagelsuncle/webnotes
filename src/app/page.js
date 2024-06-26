import React from "react";
import Nav from "./components/nav";
import Links from "./components/links";
import Steps from "./components/steps";

const StepsArray = [
  { title: "Step 1 create New Repo", text: "Step 1 Description" },
  {
    title: "Step 2: Prepare for first push to Git Hub",
    text: "Step 2 Description",
  },
  {
    title: "Step 3: Deploy with Vercel",
    text: "Step 3 Description",
  },
  {
    title: "Step 4: Create Components in VS code",
    text: "Step 2 Description",
  },
];

const Home = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export default Home;
