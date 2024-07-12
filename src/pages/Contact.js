import React from "react";
import MyNavbar from "../components/Navbar";
import HeaderContact from "../components/contact/HeaderContact";
import ContactForm from "../components/contact/ContactForm"; // Import the new ContactForm component

const ContactPage = () => {
  return (
    <>
      <MyNavbar />
      <HeaderContact />
      <ContactForm />
    </>
  );
};

export default ContactPage;
