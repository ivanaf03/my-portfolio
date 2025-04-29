import React from "react";

const ArrowListItemButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer flex items-center justify-between w-full h-full m-2 p-4 bg-gradient-to-r from-eerie-black to-white rounded-r-3xl hover:bg-white hover:text-onyx transition-transform duration-300 hover:translate-x-4"
    >        
    <p className="ml-4 text-lg">{children}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
    </button>
  );
};  

export default ArrowListItemButton;