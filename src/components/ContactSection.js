import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Pensiunea Kassa Brasov</h5>
            <p>
              IJsbaanpad 12
              <br />
              1076 CV Brasov
              <br />
              Romania
              <br />
              <a href="tel:+31202405055">+49 20 240 50 55</a>
              <br />
              <a href="mailto:info@olympichotel.nl">info@kassa.com</a>
              <br />
              KVK: 68681453
              <br />
              VAT: NL8575.47.422B01
            </p>
          </Col>
          <Col md={4}>
            <h5>More</h5>
            <p>
              <a href="#">FAQ</a>
              <br />
              <a href="#">Privacy Statement</a>
              <br />
              <a href="#">Terms & Conditions</a>
              <br />
              <a href="#">Houserules</a>
              <br />
              <a href="#">Manage cookies</a>
            </p>
          </Col>
          <Col md={4}>
            <h5>Language</h5>
            <p>
              <a href="#">Română</a>
              <br />
              <a href="#">English</a>
              <br />
              <a href="#">Deutsch</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
