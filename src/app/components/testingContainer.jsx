import React, { useState } from "react";

const TestingContainer = () => {
  const [Onions, setOnions] = useState(0);
  const [Taps, setTaps] = useState(0);

  const pressButton = () => {
    setOnions((prevOnions) => prevOnions + 1);
  };

  const TapPress = () => {
    setTaps((prevTap) => prevTap + 5);
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="flex justify-center w-56 gap-3">
          <div
            onClick={pressButton}
            className="flex justify-center text-2xl bg-teal-500 hover:bg-teal-600 text-purple-100 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            <button>Onion</button>
          </div>
          <div
            onClick={TapPress}
            className="flex justify-center text-2xl bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 "
          >
            <button>Press</button>
          </div>
        </div>
      </div>
      <div className="text-2xl flex justify-center mt-8"> Onions: {Onions}</div>
      <div className="text-2xl flex justify-center"> Press Count: {Taps}</div>
    </div>
  );
};

export default TestingContainer;
