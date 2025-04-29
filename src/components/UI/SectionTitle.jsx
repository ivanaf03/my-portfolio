import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <p className="text-2xl sm:text-4xl md:text-6xl mb-2 sm:mb-8 md:mb-16">{children}</p>
  );
};

export default SectionTitle;