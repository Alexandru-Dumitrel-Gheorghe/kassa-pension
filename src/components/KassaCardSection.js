import React from "react";
import { Container } from "react-bootstrap";
import "./KassaCardSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faTv,
  faParking,
  faUtensils,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const KassaCardSection = () => {
  return (
    <Container className="kassa-card-section mt-5">
      <h2 className="section-title">Facilități</h2>
      <div className="facilities-list">
        <div className="facility-item">
          <FontAwesomeIcon icon={faWifi} className="facility-icon" />
          WiFi Gratuit
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faTv} className="facility-icon" />
          Televizor
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faParking} className="facility-icon" />
          Parcare Gratuită
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faUtensils} className="facility-icon" />
          Grătar
        </div>
        <div className="facility-item">
          <FontAwesomeIcon icon={faCoffee} className="facility-icon" />
          Cafenea
        </div>
      </div>
      <div className="kassa-cards-container">
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1"
            alt="Servicii Premium"
          />
          <div className="kassa-card-title">Servicii Premium</div>
          <div className="kassa-card-hover-text">
            Bucurați-vă de cele mai bune servicii pe durata șederii dvs.
          </div>
        </div>
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
            alt="Facilități Moderne"
          />
          <div className="kassa-card-title">Facilități Moderne</div>
          <div className="kassa-card-hover-text">
            Camere echipate cu facilități moderne pentru confortul dvs.
          </div>
        </div>
        <div className="kassa-card">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933423.jpg?k=a114d1eb74df051761c655bd12fda96c8bf62f79ba1a1ff339535d473cd64833&o=&hp=1"
            alt="Atmosferă Relaxantă"
          />
          <div className="kassa-card-title">Atmosferă Relaxantă</div>
          <div className="kassa-card-hover-text">
            Un loc liniștit pentru a vă relaxa și a vă bucura de șederea dvs.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default KassaCardSection;
