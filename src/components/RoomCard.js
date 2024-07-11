import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RoomCard.css";

const RoomCard = ({ title, type, description, amenities, image, reverse }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/book-now", { state: { roomTitle: title } });
  };

  return (
    <Row className={`room-card ${reverse ? "flex-row-reverse" : ""}`}>
      <Col md={6} className="room-image-wrapper">
        <img src={image} alt={title} className="room-image" />
      </Col>
      <Col md={6} className="room-description">
        <h3>{title}</h3>
        <p>{type}</p>
        <p>{description}</p>
        <ul>
          {amenities.map((amenity, idx) => (
            <li key={idx}>{amenity}</li>
          ))}
        </ul>
        <Button className="book-button" onClick={handleBookNow}>
          BOOK THIS ROOM
        </Button>
      </Col>
    </Row>
  );
};

export default RoomCard;
