import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 bg-onyx shadow-sm shadow-white">
      <p className="text-sm sm:text-md md:text-lg font-mono">
        Made with ❤️ by Iván Álvarez Fernández
      </p>
      <p className="text-sm sm:text-md md:text-lg font-mono">
        <a
          href="https://github.com/ivanaf03"
          className="text-onyx underline"
        >
          ivanaf03
        </a>
      </p>
    </footer>
  );
};

export default Footer;