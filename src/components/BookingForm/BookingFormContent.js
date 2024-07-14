import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

const BookingFormContent = ({ rooms }) => {
  const location = useLocation();
  const defaultRoom = location.state?.roomTitle || rooms[0].title;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonePrefix: "",
    phoneNumber: "",
    address: "",
    checkInDate: "",
    checkInTime: "",
    checkOutDate: "",
    checkOutTime: "",
    guests: "",
    message: "",
    room: defaultRoom,
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDateTime = (date, time) => {
      if (!date || !time) return null;
      return new Date(`${date}T${time}:00`).toISOString();
    };

    const completeFormData = {
      ...formData,
      phone: `${formData.phonePrefix}${formData.phoneNumber}`,
      name: `${formData.firstName} ${formData.lastName}`,
      checkInDate: formatDateTime(formData.checkInDate, formData.checkInTime),
      checkOutDate: formatDateTime(
        formData.checkOutDate,
        formData.checkOutTime
      ),
    };

    // Check for invalid dates
    if (!completeFormData.checkInDate || !completeFormData.checkOutDate) {
      setSubmitMessage("Please provide valid check-in and check-out dates.");
      return;
    }

    console.log("Complete Form Data: ", completeFormData);

    try {
      const response = await fetch("http://localhost:5000/api/book-now", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitMessage("Rezervarea ta a fost trimisă cu succes!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phonePrefix: "",
          phoneNumber: "",
          address: "",
          checkInDate: "",
          checkInTime: "",
          checkOutDate: "",
          checkOutTime: "",
          guests: "",
          message: "",
          room: rooms[0].title,
        });
      } else {
        console.error("Error:", data.error);
        setSubmitMessage(
          "Trimiterea rezervării a eșuat. Te rugăm să încerci din nou."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage(
        "Trimiterea rezervării a eșuat. Te rugăm să încerci din nou."
      );
    }
  };

  return (
    <div className="booking-form-wrapper">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label>Nume</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Prenume"
              required
            />
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nume de familie"
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>Adresă</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Stradă, Număr, Oraș"
            required
          />
        </div>
        <div className="booking-form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: nume@exemplu.com"
            required
          />
        </div>
        <div className="booking-form-group">
          <label>Telefon</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="form-control"
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleChange}
              placeholder="Prefix"
              required
            />
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Număr de telefon"
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>Data Check-In</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="date"
              className="form-control"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              className="form-control"
              name="checkInTime"
              value={formData.checkInTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>Data Check-Out</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="date"
              className="form-control"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              className="form-control"
              name="checkOutTime"
              value={formData.checkOutTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>Număr de Oaspeți</label>
          <input
            type="number"
            className="form-control"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="booking-form-group">
          <label>Observații</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="booking-form-group">
          <label>Cameră</label>
          <select
            className="form-control"
            name="room"
            value={formData.room}
            onChange={handleChange}
          >
            {rooms.map((room, index) => (
              <option key={index} value={room.title}>
                {room.title}
              </option>
            ))}
          </select>
        </div>
        <div className="booking-btn-container">
          <button type="submit" className="booking-btn">
            Rezervă acum
          </button>
        </div>
        {submitMessage && (
          <div
            className={`booking-alert mt-3 ${
              submitMessage.includes("success")
                ? "booking-alert-success"
                : "booking-alert-danger"
            }`}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingFormContent;
