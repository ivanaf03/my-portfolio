import React from "react";

const NavBarButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg font-medium cursor-pointer transition-transform duration-500 hover:scale-125"
    >
      {children}
    </button>
  );
};

export default NavBarButton;
