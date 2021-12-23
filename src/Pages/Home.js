//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
//import Services from "../Sections/Services/index";
//import Testimonials from "../Sections/Testimonials/index";
import Contact from "../Sections/Contact/index";
import About2 from "../Sections/About2/index";
import About3 from "../Sections/About3/index";

import React, { useState, useRef, useEffect } from 'react';


const Home = () => {

  return (
    <Container>
      <HeroSection />
      <About />
      <About2 />
      <About3 />
      <Contact />
    </Container>
  );
};

export default Home;
