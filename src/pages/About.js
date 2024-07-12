// src/pages/About.js
import React from "react";
import MyNavbar from "../components/Navbar";
import HeaderAbout from "../components/about/HeaderAbout"; // Import the HeaderAbout component
import AboutCardSection from "../components/about/AboutCardSection"; // Import the AboutCardSection component
import AboutInfoSection from "../components/about/AboutInfoSection"; // Import the AboutInfoSection component

const About = () => {
  return (
    <div>
      <MyNavbar />
      <HeaderAbout />
      <AboutInfoSection /> {/* Include the AboutInfoSection component */}
      <AboutCardSection /> {/* Include the AboutCardSection component */}
    </div>
  );
};

export default About;
