import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ReviewsSection.css";

const ReviewsSection = () => {
  return (
    <div className="reviews-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>Experiențele oaspeților noștri</h2>
          </Col>
        </Row>
        <Row className="text-center mb-4">
          <Col md={4}>
            <p>
              <strong>TripAdvisor</strong>
            </p>
            <p>4.0/5.0</p>
            <p>* Personalul a fost foarte util *</p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Booking.com</strong>
            </p>
            <p>8.6/10</p>
            <p>
              "Vederea este uimitoare, una dintre cele mai bune pe care le-am
              avut."
            </p>
          </Col>
          <Col md={4}>
            <p>
              <strong>Google</strong>
            </p>
            <p>4.5/5.0</p>
            <p>"Ce lux! :) Ne-am bucurat de șederea noastră"</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewsSection;
