// src/pages/ContactPages.js
import React from "react";
import MyNavbar from "../components/Navbar";
import HeaderContact from "../components/contact/HeaderContact";

const ContactPage = () => {
  return (
    <div>
      <MyNavbar />
      <HeaderContact />
      <div className="container mt-5">
        <h1>Contact</h1>
        <p>Informații despre contact.</p>
      </div>
    </div>
  );
};

export default ContactPage;
