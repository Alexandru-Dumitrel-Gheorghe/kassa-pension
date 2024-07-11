import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container className="text-center">
        <Row>
          <Col md={4} className="text-center">
            <h5>Pensiunea Kassa Brașov</h5>
            <p>
              IJsbaanpad 12
              <br />
              1076 CV Brașov
              <br />
              România
              <br />
              <a href="tel:+40202405055">+40 20 240 50 55</a>
              <br />
              <a href="mailto:info@kassa.com">info@kassa.com</a>
              <br />
              KVK: 68681453
              <br />
              TVA: NL8575.47.422B01
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Mai multe</h5>
            <p>
              <a href="/">FAQ</a>
              <br />
              <a href="/">Declarație de confidențialitate</a>
              <br />
              <a href="/">Termeni și condiții</a>
              <br />
              <a href="/">Reguli interne</a>
              <br />
              <a href="/">Gestionați cookie-urile</a>
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Limba</h5>
            <p>
              <a href="/">Română</a>
              <br />
              <a href="/">Engleză</a>
              <br />
              <a href="/">Germană</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
