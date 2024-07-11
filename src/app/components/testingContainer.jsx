import React from "react";

const TestingContainer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center w-56 gap-3">
        <div className="flex justify-center text-2xl bg-teal-500 hover:bg-teal-600 text-purple-100 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          <button>Onion</button>
        </div>
        <div className="flex justify-center text-2xl bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 ">
          <button>Press</button>
        </div>
      </div>
    </div>
  );
};

export default TestingContainer;
