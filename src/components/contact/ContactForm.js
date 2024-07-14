import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email trimis cu succes!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Trimiterea emailului a eșuat.");
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container className="custom-contact-container">
      <Row className="custom-contact-header">
        <h2 id="ContactForm-h2">Contactează-ne</h2>
      </Row>

      <Row className="custom-contact-form-row">
        <Col md={6} className="custom-contact-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nume complet</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nume"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Adresă de email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subiect</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subiect"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="subject"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mesaj</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Mesaj"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="message"
              />
            </Form.Group>
            <div className="custom-submit-button-container">
              <Button
                variant="primary"
                type="submit"
                className="custom-submit-button"
              >
                Trimite Mesajul
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6} className="custom-contact-additional-info">
          <h3>Informații Suplimentare</h3>
          <p>
            Dacă aveți întrebări, nu ezitați să ne contactați. Suntem aici
            pentru a vă ajuta cu orice întrebări legate de serviciile noastre.
          </p>
          <ul>
            <li>Servicii de înaltă calitate</li>
            <li>Suport clienți 24/7</li>
            <li>Opțiuni flexibile de rezervare</li>
          </ul>
          <h4>Urmărește-ne</h4>
          <p>
            Rămâneți conectat cu noi prin intermediul rețelelor sociale pentru
            cele mai recente actualizări și oferte.
          </p>
          <div className="social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
