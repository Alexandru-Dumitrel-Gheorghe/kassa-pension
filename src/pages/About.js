import React from "react";
import MyNavbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <h1>About</h1>
        <p>Informații despre noi.</p>
      </div>
    </div>
  );
};

export default About;
