import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"; // importam elemente si hook-uri din Stripe pentru procesarea platilor
import { Button, Form, Row, Col } from "react-bootstrap"; // importam componente din react-bootstrap pentru stilizare si structura
import { useLocation, useNavigate } from "react-router-dom"; // hook-uri pentru navigare si locatia curenta
import "./PaymentForm.css"; // importam stilurile pentru componenta de plata

const PaymentForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe(); // hook pentru a obtine obiectul stripe
  const elements = useElements(); // hook pentru a obtine elementele stripe (ex. CardElement)
  const location = useLocation(); // obtinem locatia curenta pentru a accesa datele trimise
  const navigate = useNavigate(); // functie pentru navigare intre pagini
  const formData = location.state?.formData || {}; // obtinem datele formularului din starea trimisa sau setam un obiect gol

  // initializam starea pentru campurile formularului si alte informatii
  const [email, setEmail] = useState(formData.email || ""); // email-ul utilizatorului
  const [name, setName] = useState(
    `${formData.firstName || ""} ${formData.lastName || ""}` // numele complet al utilizatorului
  );
  const [errorMessage, setErrorMessage] = useState(""); // mesajul de eroare daca apare
  const [isLoading, setIsLoading] = useState(false); // indicator pentru incarcare
  const [paymentMethod, setPaymentMethod] = useState("card"); // metoda de plata selectata (implicit "card")

  // functie pentru a gestiona trimiterea formularului
  const handleSubmit = async (event) => {
    event.preventDefault(); // prevenim reincarcarea paginii
    setIsLoading(true); // setam indicatorul de incarcare

    if (paymentMethod === "card") {
      if (!stripe || !elements) {
        setErrorMessage("Stripe has not loaded yet. Please try again."); // mesaj de eroare daca stripe nu este incarcat
        setIsLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardElement); // obtinem elementul de card din stripe

      // cream metoda de plata cu stripe
      const { error, paymentMethod: stripePaymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name,
            email,
          },
        });

      if (error) {
        setErrorMessage(error.message); // setam mesajul de eroare daca apare
        setIsLoading(false);
      } else {
        handlePaymentSuccess(stripePaymentMethod.id); // apelam functia de succes cu id-ul metodei de plata
      }
    } else if (paymentMethod === "paypal") {
      // gestionam plata cu PayPal
      navigate("/paypal-payment", { state: { formData } }); // navigam la pagina de plata PayPal
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
          <strong>Pret:</strong>
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
      <Form.Group controlId="formPaymentMethod">
        <Form.Label>Metoda de Plata</Form.Label>
        <Form.Control
          as="select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="card">Card (Visa, MasterCard)</option>
          <option value="paypal">PayPal</option>
        </Form.Control>
      </Form.Group>
      {paymentMethod === "card" && (
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
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Processing..." : "Plateste Acum"}
      </Button>
    </Form>
  );
};

export default PaymentForm;
