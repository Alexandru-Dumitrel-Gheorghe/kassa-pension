import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./PaymentForm.css";

const PaymentForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { formData } = location.state;

  const [email, setEmail] = useState(formData.email);
  const [name, setName] = useState(
    formData.firstName + " " + formData.lastName
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet. Please try again.");
      setIsLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
        email,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    } else {
      handlePaymentSuccess(paymentMethod.id);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="payment-form">
      <h3 className="mb-4">Rezumat Rezervare</h3>
      <Row className="mb-3">
        <Col>
          <strong>Camera:</strong>
        </Col>
        <Col>{formData.room}</Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <strong>Preț:</strong>
        </Col>
        <Col>{formData.price} RON</Col>
      </Row>
      <Form.Group controlId="formName">
        <Form.Label>Nume</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCard">
        <Form.Label>Detalii Card</Form.Label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </Form.Group>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Plătește Acum"}
      </Button>
    </Form>
  );
};

export default PaymentForm;
