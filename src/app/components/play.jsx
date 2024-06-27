import React from "react";
import { useState } from "react";

const Play = () => {
  const textOptions = [
    "Click the Button",
    "Gay is Okay!",
    "We love a Drag Queen Story Hour!",
    "Nick Gmitter is Transgender!",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleClick = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
      >
        {textOptions[currentTextIndex]}
      </button>
    </div>
  );
};

export default Play;
