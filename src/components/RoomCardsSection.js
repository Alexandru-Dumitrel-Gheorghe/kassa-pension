import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { FaWifi, FaUtensils, FaMountain, FaSpa, FaBath } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./RoomCardsSection.css";

const rooms = [
  {
    title: "Camera Aur",
    description:
      "Căutați cea mai luxoasă ședere la Hotelul Olimpic? Alegeți camera Aur și rezervați acum! Camera este perfectă pentru o escapadă romantică.",
    price: "350 RON/noapte",
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la munte"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229640.jpg?k=9ef90112431b2592229bca2e09c5af87c41a7b17723ca30b74d73b719231afa9&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229620.jpg?k=2de110e33f7e7d83091aded4a844a83ce19d8484a595a07a0eb4fe8a65430c1d&o=&hp=1",
    ],
  },
  {
    title: "Camera Argint",
    description:
      "Bucurați-vă de șederea dvs. în Camera Argint, cu facilități moderne și o frumoasă vedere a Brașovului.",
    price: "300 RON/noapte",
    features: ["WiFi Gratuit", "Mic dejun inclus"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229632.jpg?k=22c4c786d1734fff5a9fab4bb5ddd2be6c1a24f8770def966718a696a3236922&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
    ],
  },
  {
    title: "Camera Bronz",
    description:
      "Camera Bronz oferă confort și stil, perfectă pentru o ședere scurtă în Brașov.",
    price: "250 RON/noapte",
    features: ["WiFi Gratuit"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229671.jpg?k=c4b9a2d118261052b446b7f84c6af15176aaf51e806fd7c9812641b3af524674&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229681.jpg?k=385873b4433f2d84dca79b7d5d831e65fd6f5cbbc778e65adf630530113caf50&o=&hp=1",
    ],
  },
  {
    title: "Camera Platină",
    description:
      "Răsfățați-vă în Camera Platină cu facilități premium și o vedere spectaculoasă.",
    price: "400 RON/noapte",
    features: [
      "WiFi Gratuit",
      "Mic dejun inclus",
      "Vedere la munte",
      "Acces la spa",
    ],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554932830.jpg?k=11a5832a0ce276957dfb3352cd0c853d6fa87551b27d4d1cf7e3529c6697239e&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229676.jpg?k=e230bd3e00b955600f7d4b856e3c5fe31e902cad81f968a32b68fa70ff3cf975&o=&hp=1",
    ],
  },
  {
    title: "Camera Diamant",
    description:
      "Camera Diamant oferă un lux de neegalat și o vedere panoramică deosebită.",
    price: "450 RON/noapte",
    features: [
      "WiFi Gratuit",
      "Mic dejun inclus",
      "Vedere panoramică",
      "Jacuzzi",
    ],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554932830.jpg?k=11a5832a0ce276957dfb3352cd0c853d6fa87551b27d4d1cf7e3529c6697239e&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229620.jpg?k=2de110e33f7e7d83091aded4a844a83ce19d8484a595a07a0eb4fe8a65430c1d&o=&hp=1",
    ],
  },
  {
    title: "Camera Perla",
    description:
      "Camera Perla oferă un confort extraordinar și facilități moderne.",
    price: "270 RON/noapte",
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la oraș"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229632.jpg?k=22c4c786d1734fff5a9fab4bb5ddd2be6c1a24f8770def966718a696a3236922&o=&hp=1",
    ],
  },
  {
    title: "Camera Rubin",
    description:
      "Camera Rubin este ideală pentru cei care doresc un sejur de neuitat, cu facilități premium.",
    price: "320 RON/noapte",
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la grădină"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229640.jpg?k=9ef90112431b2592229bca2e09c5af87c41a7b17723ca30b74d73b719231afa9&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557015582.jpg?k=687f7b8f75603c5ae056c60c1ed4160421a36cbf8bce05913db6ae84760cd8ee&o=&hp=1",
    ],
  },
];

const featureIcons = {
  "WiFi Gratuit": <FaWifi />,
  "Mic dejun inclus": <FaUtensils />,
  "Vedere la munte": <FaMountain />,
  "Acces la spa": <FaSpa />,
  Jacuzzi: <FaBath />,
  "Vedere la oraș": <FaMountain />,
  "Vedere panoramică": <FaMountain />,
  "Vedere la grădină": <FaMountain />,
};

const RoomCardsSection = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomTitle) => {
    navigate("/book-now", { state: { roomTitle } });
  };

  return (
    <Container className="room-cards-section">
      <Row>
        <Col>
          <h2>Camerele Noastre</h2>
        </Col>
      </Row>
      {rooms.map((room, index) => (
        <Row
          key={index}
          className={`room-card ${
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
              <p>{room.description}</p>
              <p className="room-price">{room.price}</p>
              <ul className="room-features">
                {room.features.map((feature, idx) => (
                  <li key={idx}>
                    {featureIcons[feature]} {feature}
                  </li>
                ))}
              </ul>
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
