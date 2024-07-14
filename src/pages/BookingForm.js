import React from "react";
import BookingFormHeader from "../components/BookingForm/BookingFormHeader";
import BookingFormContent from "../components/BookingForm/BookingFormContent";
import "../components/BookingForm/BookingForm.css";

const BookingForm = ({ rooms }) => {
  return (
    <div className="booking-page">
      <BookingFormHeader />
      <BookingFormContent rooms={rooms} />
    </div>
  );
};

export default BookingForm;
