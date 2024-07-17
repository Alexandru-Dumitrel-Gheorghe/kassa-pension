import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaBicycle,
  FaWalking,
  FaSkiing,
  FaHiking,
  FaUniversity,
  FaShoePrints,
  FaSnowflake,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "./Activitati.css";

const activities = [
  {
    icon: <FaUniversity />,
    title: "Tur sau curs despre cultura locală",
    extra: "Cost suplimentar",
  },
  {
    icon: <FaBicycle />,
    title: "Tururi cu bicicleta",
    extra: "Cost suplimentar",
  },
  {
    icon: <FaWalking />,
    title: "Tururi de mers pe jos",
    extra: "Cost suplimentar",
  },
  { icon: <FaShoePrints />, title: "Echipament de badminton", extra: "" },
  { icon: <FaSkiing />, title: "Școală de schi", extra: "Cost suplimentar" },
  {
    icon: <FaSnowflake />,
    title: "Depozit schiuri",
    extra: "Cost suplimentar",
  },
  { icon: <FaHiking />, title: "Drumeții", extra: "Cost suplimentar" },
  { icon: <FaSkiing />, title: "Schi", extra: "În afara locației" },
];

const Activitati = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="business-activities-section">
      <Container className="text-center">
        <h2 className="business-activities-title" onClick={toggleAccordion}>
          Activități {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h2>
        <div className={`business-activities-content ${isOpen ? "open" : ""}`}>
          <Row>
            {activities.map((activity, index) => (
              <Col
                key={index}
                md={4}
                className="text-center business-activity-card"
              >
                <div className="business-activity-icon">{activity.icon}</div>
                <h5>{activity.title}</h5>
                <p>{activity.extra}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Activitati;
