import React from "react";
import FlowerDiv from "../UI/FlowerDiv";

const Header = () => {
  return (
    <header className="h-[100vh] flex flex-col items-center justify-center">
      <div className="h-[40%] mt-12 sm:mt-24 md:mt-36">
        <FlowerDiv>
          <section className="p-8 flex flex-col items-center justify-center gap-2">
            <h1 className="p-4 text-4xl sm:text-6xl md:text-9xl font-bold">Hi! I am Iván</h1>
            <p className="text-xl sm:text-2xl md:text-4xl">Welcome to my portfolio</p>
            <p className="mx-4 text-sm sm:text-md md:text-xl font-family-secondary italic">
              I am a full stack developer with a passion for creating
              beautiful and minimalistic websites
            </p>
          </section>
        </FlowerDiv>
      </div>
      <div className="h-[60%] w-0.5 border-r-2 border-white border-dotted"></div>
    </header>
  );
};

export default Header;
