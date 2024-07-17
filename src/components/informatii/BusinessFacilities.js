import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaChalkboardTeacher, FaGlassCheers } from "react-icons/fa";
import "./BusinessFacilities.css";

const BusinessFacilities = () => {
  return (
    <div className="business-facilities-section">
      <Container className="text-center">
        <h2 className="business-facilities-title">Facilități Business</h2>
        <Row>
          <Col md={6} className="text-center business-facility-card">
            <FaChalkboardTeacher className="business-facility-icon" />
            <h5>Săli de Conferință</h5>
            <p>
              Avem săli de conferință dotate cu echipamente moderne pentru a vă
              ajuta să organizați întâlniri de succes.
            </p>
          </Col>
          <Col md={6} className="text-center business-facility-card">
            <FaGlassCheers className="business-facility-icon" />
            <h5>Petreceri</h5>
            <p>
              Organizați petreceri și evenimente speciale în spațiile noastre
              elegante și bine echipate.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusinessFacilities;
