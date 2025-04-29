import React from "react";

import ScrollingSmoothyDiv from "./components/UI/ScrollingSmoothyDiv";
import Header from "./components/page-components/Header";
import AboutMe from "./components/page-components/AboutMe";
import Projects from "./components/page-components/Projects";
import Skills from "./components/page-components/Skills";
import Experience from "./components/page-components/Experience";
import Contact from "./components/page-components/Contact";
import Footer from "./components/page-components/Footer";

const App = () => {
  return (
    <>
      <ScrollingSmoothyDiv>
        <Header />
      </ScrollingSmoothyDiv>
      <ScrollingSmoothyDiv>
        <AboutMe />
      </ScrollingSmoothyDiv>
      <ScrollingSmoothyDiv>
        <Projects />
      </ScrollingSmoothyDiv>
      <ScrollingSmoothyDiv>
        <Experience />
      </ScrollingSmoothyDiv>
      <ScrollingSmoothyDiv>
        <Skills />
      </ScrollingSmoothyDiv>
      <ScrollingSmoothyDiv>
        <Contact />
      </ScrollingSmoothyDiv>
      <Footer/>
    </>
  );
};

export default App;
