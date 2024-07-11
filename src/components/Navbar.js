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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/rooms">
              Rooms
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <div className="navbar-buttons d-lg-none">
              <Button
                variant="outline-light"
                className="navbar-button"
                as={Link}
                to="/book-now"
              >
                BOOK NOW
              </Button>
              <Button
                variant="outline-light"
                className="navbar-button"
                as={Link}
                to="/login"
              >
                Login
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-buttons d-none d-lg-flex">
          <Button
            variant="outline-light"
            className="navbar-button"
            as={Link}
            to="/book-now"
          >
            BOOK NOW
          </Button>
          <Button
            variant="outline-light"
            className="navbar-button"
            as={Link}
            to="/login"
          >
            Login
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
