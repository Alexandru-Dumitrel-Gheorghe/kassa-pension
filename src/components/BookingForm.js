import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookingForm.css";

const BookingForm = ({ rooms }) => {
  const location = useLocation();
  const defaultRoom = location.state?.roomTitle || rooms[0].title;

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    message: "",
    room: defaultRoom,
    checkInDate: "",
    checkOutDate: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/book-now", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitMessage("Your booking has been submitted successfully!");
        setFormData({
          email: "",
          phone: "",
          name: "",
          address: "",
          message: "",
          room: rooms[0].title,
          checkInDate: "",
          checkOutDate: "",
        });
      } else {
        console.error("Error:", data.error);
        setSubmitMessage("Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="booking-form-wrapper">
      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book Now</h2>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <label>Check-in Date:</label>
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          required
        />
        <label>Check-out Date:</label>
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <label>Room:</label>
        <select name="room" value={formData.room} onChange={handleChange}>
          {rooms.map((room, index) => (
            <option key={index} value={room.title}>
              {room.title}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
        {submitMessage && <div className="submit-message">{submitMessage}</div>}
      </form>
    </div>
  );
};

export default BookingForm;
