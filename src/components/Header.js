import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Container className="header-content">
        <h1>Bine ati venit la Pensiunea Kassa</h1>
        <p>"Vă invităm să experimentați cele mai bune servicii." </p>
      </Container>
    </div>
  );
};

export default Header;
