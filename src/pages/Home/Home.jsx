import React from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
