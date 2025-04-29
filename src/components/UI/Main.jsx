import React from "react";
import SectionTitle from "./SectionTitle";

const Main = ({ children, title }) => {
    return (
        <main className="p-8 h-[100vh] w-full flex flex-col items-center">
      <div className="w-full md:w-[75%]">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </div>
      <div className="w-0.5 h-full mt-2 border-r-2 border-white border-dotted self-center" />
    </main>
  );
};

export default Main;