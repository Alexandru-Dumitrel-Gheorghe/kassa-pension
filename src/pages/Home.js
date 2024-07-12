import React from "react";
import MyNavbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import InfoSection from "../components/InfoSection";
import KassaCardSection from "../components/KassaCardSection"; // Importă componentul KassaCardSection
import ReviewsSection from "../components/ReviewsSection";
import Cookies from "../components/Cookies/Cookies"; // Importă componentul Cookies

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Header />
      <Section />
      <InfoSection />
      <KassaCardSection /> {/* Afișează componentul KassaCardSection */}
      <ReviewsSection />
      <Cookies /> {/* Afișează componentul Cookies */}
    </>
  );
};

export default Home;
