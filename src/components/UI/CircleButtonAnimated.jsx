import React from "react";

const CircleButtonAnimated = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-20 md:w-30 md:h-30 flex items-center justify-center bg-onyx border-2 border-white rounded-full cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
    >
      <span className="text-base md:text-lg">{children}</span>
    </button>
  );
};

export default CircleButtonAnimated;