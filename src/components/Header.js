import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <video className="header-video" autoPlay muted loop>
        <source
          src={`${process.env.PUBLIC_URL}/video/review.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        <h1>Pensiunea Kassa</h1>
        <p className="tagline">
          Experimentează luxul și confortul în inima Brașovului
        </p>
        <button className="book-now-button">Book Now</button>
      </div>
      <button className="scroll-down-button" onClick={scrollToNextSection}>
        ↓
      </button>
    </div>
  );
};

export default Header;
