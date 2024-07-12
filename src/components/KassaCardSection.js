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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229650.jpg?k=6a440b9105b3e30114175bd0df4e5a17215a74f4d9f508096db70333f59e3659&o=&hp=1"
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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1"
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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229569.jpg?k=1d6feb261ec3218271b48c63dd2104ecfc0d45d75f9c6cf54a2193ea7518ff99&o=&hp=1"
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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933423.jpg?k=a114d1eb74df051761c655bd12fda96c8bf62f79ba1a1ff339535d473cd64833&o=&hp=1"
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
