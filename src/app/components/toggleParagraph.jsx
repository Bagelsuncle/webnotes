import React, { useState } from "react";

const ToggleParagraph = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleParagraph = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-4">
      <button
        onClick={toggleParagraph}
        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
      >
        ▼
      </button>
      {isVisible && (
        <p className="mt-4">
          This is a paragraph that will be toggled on and off.
        </p>
      )}
    </div>
  );
};

export default ToggleParagraph;
