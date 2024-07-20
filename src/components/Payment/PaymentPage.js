import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import HeaderPayment from "./HeaderPayment"; // Importăm HeaderPayment
import "./PaymentPage.css";

// Introduceți cheia dvs. publică Stripe aici
const stripePromise = loadStripe("your-public-key-from-stripe");

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <HeaderPayment /> {/* Adăugăm HeaderPayment */}
      <div className="payment-page">
        <PaymentForm />
      </div>
    </Elements>
  );
};

export default PaymentPage;
