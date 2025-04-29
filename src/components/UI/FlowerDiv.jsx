import React from "react";
import flower from "../../assets/flower.png";

const FlowerDiv = ({ children }) => {
  return (
    <article className="p-4 relative w-full h-full">
      <div className="border-2 border-white h-full w-full overflow-visible flex flex-col items-center justify-center">
        {children}
        <div className="absolute bg-eerie-black top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <img
            src={flower}
            alt="flower"
            className="animation-pulse"
          />
        </div>
        <div className="absolute bg-eerie-black top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <img
            src={flower}
            alt="flower"
          />
        </div>
        <div className="absolute bg-eerie-black bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <img
            src={flower}
            alt="flower"
          />
        </div>
        <div className="absolute bg-eerie-black bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <img
            src={flower}
            alt="flower"
          />
        </div>
      </div>
    </article>
  );
};

export default FlowerDiv;
