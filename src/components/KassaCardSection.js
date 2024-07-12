import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./KassaCardSection.css";

const KassaCardSection = () => {
  return (
    <Container className="kassa-card-section mt-5">
      <Row>
        <Col md={6} className="mb-4">
          <div className="kassa-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1661676056771-f6c2711249e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Camera de Lux"
            />
            <div className="kassa-card-title">Camera de Lux</div>
            <div className="kassa-card-hover-text">
              Răsfățați-vă într-o cameră luxoasă cu facilități de top.
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="kassa-card">
            <img
              src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Servicii Premium"
            />
            <div className="kassa-card-title">Servicii Premium</div>
            <div className="kassa-card-hover-text">
              Bucurați-vă de cele mai bune servicii pe durata șederii dvs.
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="kassa-card">
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Facilități Moderne"
            />
            <div className="kassa-card-title">Facilități Moderne</div>
            <div className="kassa-card-hover-text">
              Camere echipate cu facilități moderne pentru confortul dvs.
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="kassa-card">
            <img
              src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Atmosferă Relaxantă"
            />
            <div className="kassa-card-title">Atmosferă Relaxantă</div>
            <div className="kassa-card-hover-text">
              Un loc liniștit pentru a vă relaxa și a vă bucura de șederea dvs.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KassaCardSection;
