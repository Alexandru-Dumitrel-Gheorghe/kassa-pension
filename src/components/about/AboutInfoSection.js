import React, { useState } from "react";
import "./AboutInfoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faParking,
  faWifi,
  faBed,
  faBath,
  faCouch,
  faTv,
  faUtensils,
  faSpa,
  faTree,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const facilities = [
  { icon: faParking, text: "Parcare privată gratuită" },
  { icon: faWifi, text: "Internet wireless gratuit" },
  { icon: faUtensils, text: "Bucătărie complet utilată" },
  { icon: faBed, text: "Lenjerie de pat și garderobă" },
  { icon: faBath, text: "Baie privată cu articole de toaletă" },
  { icon: faCouch, text: "Zonă de living confortabilă" },
  { icon: faTv, text: "TV cu ecran plat și canale prin cablu" },
  { icon: faTree, text: "Grădină și zonă de picnic" },
  { icon: faSpa, text: "Servicii de wellness și înfrumusețare" },
];

const AboutInfoSection = () => {
  const [showFacilities, setShowFacilities] = useState(false);

  const handleToggleFacilities = () => {
    setShowFacilities(!showFacilities);
  };

  return (
    <div className="about-info-section">
      <div className="about-info-content">
        <h2 className="about-info-title" onClick={handleToggleFacilities}>
          Descoperă facilitățile noastre.
          <FontAwesomeIcon
            icon={showFacilities ? faChevronUp : faChevronDown}
            className="about-info-toggle-icon"
          />
        </h2>
        <div
          className={`about-info-facilities-list ${
            showFacilities ? "open" : ""
          }`}
        >
          {facilities.map((facility, index) => (
            <div key={index} className="about-info-facility-item">
              <FontAwesomeIcon
                icon={facility.icon}
                className="about-info-facility-icon"
              />
              <p>{facility.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutInfoSection;
