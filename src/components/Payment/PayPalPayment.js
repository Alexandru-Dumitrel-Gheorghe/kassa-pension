import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import "./PaymentForm.css";

const PayPalPayment = () => {
  const location = useLocation();
  const { formData } = location.state;

  const handleSuccess = (details, data) => {
    console.log("Payment successful", details, data);
    // Handle successful payment here
  };

  const handleError = (err) => {
    console.error("Payment error", err);
    // Handle payment error here
  };

  return (
    <div className="paypal-payment">
      <h3 className="mb-4">Rezumat Rezervare</h3>
      <div>
        <strong>Camera:</strong> {formData.room}
      </div>
      <div>
        <strong>Preț:</strong> {formData.price} RON
      </div>
      <PayPalButton
        amount={formData.price}
        onSuccess={handleSuccess}
        catchError={handleError}
        options={{
          clientId: "YOUR_PAYPAL_CLIENT_ID",
          currency: "RON",
        }}
      />
    </div>
  );
};

export default PayPalPayment;
