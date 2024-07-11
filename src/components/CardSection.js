import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CardSection.css";

const CardSection = () => {
  return (
    <Container className="card-section mt-5">
      <Row>
        <Col md={4} className="mb-4">
          <Card className="hover-card">
            <Card.Img
              variant="top"
              src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Camera de Lux</Card.Title>
              <div className="card-hover-text">
                Răsfățați-vă într-o cameră luxoasă cu facilități de top.
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="hover-card">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Servicii Premium</Card.Title>
              <div className="card-hover-text">
                Bucurați-vă de cele mai bune servicii pe durata șederii dvs.
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="hover-card">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body className="card-body">
              <Card.Title className="card-title">Facilități Moderne</Card.Title>
              <div className="card-hover-text">
                Camere echipate cu facilități moderne pentru confortul dvs.
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;
