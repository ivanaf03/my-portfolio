import React from "react";

import useIsVisible from "../../hooks/use-is-visible";

const ScrollingSmoothyDiv = ({ children }) => {
  const ref = React.useRef(null);
  const isVisible = useIsVisible(ref);

  return (
    <div ref={ref} className={`transition-opacity ease-in duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
};

export default ScrollingSmoothyDiv;