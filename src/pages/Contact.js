import React from "react";
import MyNavbar from "../components/Navbar";
import HeaderContact from "../components/contact/HeaderContact";
import ContactForm from "../components/contact/ContactForm"; // Import the new ContactForm component
import ScrollToTop from "../components/ScrollToTop";

const ContactPage = () => {
  return (
    <>
      <MyNavbar />
      <HeaderContact />
      <ContactForm />
      <ScrollToTop />
    </>
  );
};

export default ContactPage;
