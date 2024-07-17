import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLanguage,
} from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container className="text-center">
        <Row>
          <Col md={4} className="text-center">
            <h5>Pensiunea Kassa Brașov</h5>
            <p>
              <FaMapMarkerAlt className="contact-icon" /> IJsbaanpad 12
              <br />
              1076 CV Brașov
              <br />
              România
              <br />
              <a href="tel:+40202405055">
                <FaPhone className="contact-icon" /> +40 20 240 50 55
              </a>
              <br />
              <a href="mailto:info@kassa.com">
                <FaEnvelope className="contact-icon" /> info@kassa.com
              </a>
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
              <a href="/">
                <FaLanguage className="contact-icon" /> Română
              </a>
              <br />
              <a href="/">
                <FaLanguage className="contact-icon" /> Engleză
              </a>
              <br />
              <a href="/">
                <FaLanguage className="contact-icon" /> Germană
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
