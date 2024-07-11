import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>Rezervările directe beneficiază de</h2>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={4}>
            <p>
              <strong>Parcare accesibilă</strong>
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>
                Anulare gratuită până la ora 18:00 în ziua sosirii
              </strong>
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>
                Cel mai bun tarif prin intermediul site-ului nostru
              </strong>
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button variant="primary">BOOK NOW</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
