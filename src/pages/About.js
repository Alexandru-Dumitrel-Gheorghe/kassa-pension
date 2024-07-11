import React from "react";
import MyNavbar from "../components/Navbar";
import HeaderAbout from "../components/about/HeaderAbout"; // Importă componenta HeaderAbout
import "../components/about/HeaderAbout.css"; // Importă fișierul CSS pentru componenta HeaderAbout

const About = () => {
  return (
    <div>
      <MyNavbar />
      <HeaderAbout />
    </div>
  );
};

export default About;
