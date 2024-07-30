import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap"; // importam componente din react-bootstrap pentru stilizare si layout
import { FaWifi, FaUtensils, FaMountain, FaSpa, FaBath } from "react-icons/fa"; // importam iconite din react-icons pentru a reprezenta facilitatile
import { useNavigate } from "react-router-dom"; // hook pentru navigare intre pagini
import "./RoomCardsSection.css"; // importam stilurile pentru sectiunea de carduri de camere

// definim camerele disponibile cu detalii despre acestea
const rooms = [
  {
    title: "Camera Aur",
    description:
      "Cautati cea mai luxoasa sedere la Hotelul Olimpic? Alegeti camera Aur si rezervati acum! Camera este perfecta pentru o escapada romantica.",
    basePrice: 350,
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la munte"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229640.jpg?k=9ef90112431b2592229bca2e09c5af87c41a7b17723ca30b74d73b719231afa9&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229620.jpg?k=2de110e33f7e7d83091aded4a844a83ce19d8484a595a07a0eb4fe8a65430c1d&o=&hp=1",
    ],
  },
  {
    title: "Camera Argint",
    description:
      "Bucurati-va de sederea dvs. in Camera Argint, cu facilitati moderne si o frumoasa vedere a Brasovului.",
    basePrice: 300,
    features: ["WiFi Gratuit", "Mic dejun inclus"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229632.jpg?k=22c4c786d1734fff5a9fab4bb5ddd2be6c1a24f8770def966718a696a3236922&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
    ],
  },
  {
    title: "Camera Bronz",
    description:
      "Camera Bronz ofera confort si stil, perfecta pentru o sedere scurta in Brasov.",
    basePrice: 250,
    features: ["WiFi Gratuit"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229671.jpg?k=c4b9a2d118261052b446b7f84c6af15176aaf51e806fd7c9812641b3af524674&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229681.jpg?k=385873b4433f2d84dca79b7d5d831e65fd6f5cbbc778e65adf630530113caf50&o=&hp=1",
    ],
  },
  {
    title: "Camera Platina",
    description:
      "Rasfatati-va in Camera Platina cu facilitati premium si o vedere spectaculoasa.",
    basePrice: 400,
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
      "Camera Diamant ofera un lux de neegalat si o vedere panoramica deosebita.",
    basePrice: 450,
    features: [
      "WiFi Gratuit",
      "Mic dejun inclus",
      "Vedere panoramica",
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
      "Camera Perla ofera un confort extraordinar si facilitati moderne.",
    basePrice: 270,
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la oras"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229632.jpg?k=22c4c786d1734fff5a9fab4bb5ddd2be6c1a24f8770def966718a696a3236922&o=&hp=1",
    ],
  },
  {
    title: "Camera Rubin",
    description:
      "Camera Rubin este ideala pentru cei care doresc un sejur de neuitat, cu facilitati premium.",
    basePrice: 320,
    features: ["WiFi Gratuit", "Mic dejun inclus", "Vedere la gradina"],
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229640.jpg?k=9ef90112431b2592229bca2e09c5af87c41a7b17723ca30b74d73b719231afa9&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557015582.jpg?k=687f7b8f75603c5ae056c60c1ed4160421a36cbf8bce05913db6ae84760cd8ee&o=&hp=1",
    ],
  },
];

// mapam facilitatile disponibile la iconite corespunzatoare
const featureIcons = {
  "WiFi Gratuit": <FaWifi />,
  "Mic dejun inclus": <FaUtensils />,
  "Vedere la munte": <FaMountain />,
  "Acces la spa": <FaSpa />,
  Jacuzzi: <FaBath />,
  "Vedere la oras": <FaMountain />,
  "Vedere panoramica": <FaMountain />,
  "Vedere la gradina": <FaMountain />,
};

const RoomCardsSection = () => {
  const navigate = useNavigate(); // hook pentru a naviga intre pagini
  const [dynamicPrices, setDynamicPrices] = useState({}); // starea pentru a stoca preturile dinamice ale camerelor

  // efect pentru a prelua preturile dinamice la montarea componentei
  useEffect(() => {
    const fetchDynamicPrices = async () => {
      const response = await fetch("http://localhost:5000/api/bookings");
      const bookings = await response.json();

      const prices = {};
      const availability = {};

      // calculam disponibilitatea fiecarei camere pe baza rezervarilor existente
      rooms.forEach((room) => {
        const roomBookings = bookings.filter(
          (booking) => booking.room === room.title
        );

        availability[room.title] = roomBookings.length === 0;
      });

      // ajustam pretul fiecarei camere pe baza disponibilitatii
      rooms.forEach((room) => {
        let priceIncrease = 0;
        rooms.forEach((r) => {
          if (availability[r.title] === false) {
            priceIncrease += 0.02;
          }
        });
        prices[room.title] = room.basePrice * (1 + priceIncrease); // crestem pretul proportional cu cererea
      });

      setDynamicPrices(prices); // actualizam starea cu preturile calculate
    };

    fetchDynamicPrices(); // apelam functia de preluare a preturilor dinamice
  }, []);

  // functie pentru a naviga la pagina de rezervare a unei camere
  const handleBookNow = (roomTitle) => {
    navigate("/book-now", { state: { roomTitle } });
  };

  return (
    <Container className="room-cards-section">
      <Row>
        <Col>
          <h2 className="section-title">Camerele Noastre</h2>
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
              <p className="room-price">
                {dynamicPrices[room.title]
                  ? `${dynamicPrices[room.title].toFixed(2)} RON/noapte`
                  : "Calculating..."}{" "}
                {/* afisam pretul dinamic */}
              </p>
              <ul className="room-features">
                {room.features.map((feature, idx) => (
                  <li key={idx}>
                    {featureIcons[feature]} {feature}{" "}
                    {/* afisam facilitatile cu iconite */}
                  </li>
                ))}
              </ul>
              <Button
                className="book-button"
                onClick={() => handleBookNow(room.title)}
              >
                BOOK THIS ROOM {/* buton pentru a rezerva camera */}
              </Button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default RoomCardsSection;
