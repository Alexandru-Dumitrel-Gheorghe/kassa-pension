import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h1 className="section-heading">
              Bine ați venit la Pensiunea Kassa,
            </h1>
            <p className="section-description">
              Situată în inima Brașovului, unde tradiția <br></br> și confortul
              modern se întâlnesc pentru a vă <br></br> oferi o experiență de
              neuitat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section;
