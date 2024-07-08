import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Simte energia</h2>
            <h1 className="section-heading">Pensiunea Kassa Brasov</h1>
            <p className="section-description">
              Simte energia vibrantă! Lângă Stadionul Olimpic, înconjurat de
              terenuri sportive și de idilicul Canal Stadion, vei găsi Hotelul
              Olympic. O locație unică, cu 309 camere decorate stilat pentru
              sportivi, călători de afaceri și de agrement. Vino și
              experimentează facilitățile noastre de primă clasă, paturile
              confortabile, bucătăria sănătoasă și sălile de întâlnire
              inspiratoare.
            </p>
          </Col>
        </Row>
        <Row className="text-center"></Row>
      </Container>
    </div>
  );
};

export default Section;
