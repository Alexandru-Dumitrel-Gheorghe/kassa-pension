import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>© Pensiunea Kassa</p>
          </Col>
          <Col md={6} className="text-right">
            <p>Designed and Developed by Alexandru</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
