import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./RoomCardsSection.css";

const rooms = [
  {
    title: "Camera Aur",
    type: "Camera de Lux",
    description:
      "Căutați cea mai luxoasă ședere la Hotelul Olimpic? Alegeți camera Aur și rezervați acum! Camera este perfectă pentru o escapadă romantică.",
    images: [
      "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Camera Argint",
    type: "Camera de Lux",
    description:
      "Bucurați-vă de șederea dvs. în Camera Argint, cu facilități moderne și o frumoasă vedere a Brașovului.",
    images: [
      "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Camera Bronz",
    type: "Camera Confort",
    description:
      "Camera Bronz oferă confort și stil, perfectă pentru o ședere scurtă în Brașov.",
    images: [
      "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    title: "Camera Platină",
    type: "Camera de Lux",
    description:
      "Răsfățați-vă în Camera Platină cu facilități premium și o vedere spectaculoasă.Răsfățați-vă în Camera Platină cu facilități premium și o vedere spectaculoasă.Răsfățați-vă în Camera Platină cu facilități premium și o vedere spectaculoasă.",
    images: [
      "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

const RoomCardsSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomTitle) => {
    navigate("/book-now", { state: { roomTitle } });
  };

  return (
    <Container className="room-cards-section">
      {rooms.map((room, index) => (
        <Row
          key={index}
          className={`room-card mb-5 ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Col md={6} className="room-image-wrapper p-0">
            <Carousel>
              {room.images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={image}
                    alt={`${room.title} ${idx}`}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6} className="room-description p-0">
            <div className="room-description-content">
              <h3>{room.title}</h3>
              <p>{room.type}</p>
              <p>{room.description}</p>
              <Button
                className="book-button"
                onClick={() => handleBookNow(room.title)}
              >
                BOOK THIS ROOM
              </Button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default RoomCardsSection;
