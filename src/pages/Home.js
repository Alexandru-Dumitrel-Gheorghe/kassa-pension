import React from "react";
import MyNavbar from "../components/Navbar";
import Header from "../components/Header";
import Section from "../components/Section";
import InfoSection from "../components/InfoSection";
import KassaCardSection from "../components/KassaCardSection";
import ReviewsSection from "../components/ReviewsSection";
import Cookies from "../components/Cookies/Cookies";
import ScrollToTop from "../components/ScrollToTop";
import BusinessFacilities from "../components/informatii/BusinessFacilities";
import Activitati from "../components/informatii/Activitati";

const Home = () => {
  return (
    <>
      <MyNavbar />
      <Header />
      <div id="next-section">
        <Section />
      </div>
      <InfoSection />
      <KassaCardSection />
      <BusinessFacilities />
      <ReviewsSection />
      <Activitati />
      <Cookies />
      <ScrollToTop />
    </>
  );
};

export default Home;
