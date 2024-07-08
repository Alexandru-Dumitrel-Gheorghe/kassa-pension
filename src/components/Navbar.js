import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`navbar-custom ${
        navbarVisible ? "navbar-visible" : "navbar-hidden"
      }`}
      fixed="top"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Kassa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              Pagina Principală
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Galerie
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-light" className="navbar-button">
          BOOK NOW
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
