import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import ro from "date-fns/locale/ro"; // Import Romanian locale
registerLocale("ro", ro); // Register Romanian locale

const rooms = [
  { title: "Camera Aur" },
  { title: "Camera Argint" },
  { title: "Camera Bronz" },
  { title: "Camera Platină" },
  { title: "Camera Diamant" },
  { title: "Camera Perla" },
  { title: "Camera Rubin" },
];

const BookingFormContent = () => {
  const location = useLocation();
  const defaultRoom = location.state?.roomTitle || rooms[0].title;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonePrefix: "",
    phoneNumber: "",
    address: "",
    checkInDate: null,
    checkInTime: "15:00", // Default check-in time
    checkOutDate: null,
    checkOutTime: "11:00", // Default check-out time
    guests: "",
    message: "",
    room: defaultRoom,
  });

  const [submitMessage, setSubmitMessage] = useState("");
  const [roomAvailability, setRoomAvailability] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:5000/api/bookings");
      const data = await response.json();

      const availability = {};
      data.forEach((booking) => {
        if (!availability[booking.room]) {
          availability[booking.room] = [];
        }
        availability[booking.room].push({
          checkInDate: new Date(booking.checkInDate),
          checkOutDate: new Date(booking.checkOutDate),
        });
      });
      setRoomAvailability(availability);
    };

    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckInDateChange = (date) => {
    setFormData({ ...formData, checkInDate: date });
  };

  const handleCheckOutDateChange = (date) => {
    setFormData({ ...formData, checkOutDate: date });
  };

  const isRoomAvailable = (room, checkInDate, checkOutDate) => {
    if (!roomAvailability[room]) {
      return true;
    }
    return roomAvailability[room].every((booking) => {
      const bookingCheckIn = new Date(booking.checkInDate);
      const bookingCheckOut = new Date(booking.checkOutDate);
      const proposedCheckIn = new Date(checkInDate);
      const proposedCheckOut = new Date(checkOutDate);

      return (
        proposedCheckOut <= bookingCheckIn ||
        proposedCheckIn >= bookingCheckOut ||
        (proposedCheckIn.toDateString() === bookingCheckOut.toDateString() &&
          proposedCheckIn.getHours() >= 11)
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDateTime = (date, time) => {
      if (date && time) {
        const [hours, minutes] = time.split(":");
        const adjustedDate = new Date(date);
        adjustedDate.setHours(hours, minutes);
        return adjustedDate.toISOString();
      }
      return null;
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

    if (!completeFormData.checkInDate || !completeFormData.checkOutDate) {
      setSubmitMessage(
        "Please provide valid check-in and check-out dates and times."
      );
      return;
    }

    if (
      !isRoomAvailable(
        completeFormData.room,
        completeFormData.checkInDate,
        completeFormData.checkOutDate
      )
    ) {
      setSubmitMessage(
        `Camera ${
          completeFormData.room
        } nu este disponibilă între ${formData.checkInDate.toLocaleDateString()} și ${formData.checkOutDate.toLocaleDateString()}.`
      );
      return;
    }

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
          checkInDate: null,
          checkInTime: "15:00",
          checkOutDate: null,
          checkOutTime: "11:00",
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

  const highlightDates = (roomTitle) => {
    if (!roomAvailability[roomTitle]) return [];
    return roomAvailability[roomTitle].flatMap(
      ({ checkInDate, checkOutDate }) => {
        const dates = [];
        for (
          let d = new Date(checkInDate);
          d <= checkOutDate;
          d.setDate(d.getDate() + 1)
        ) {
          dates.push(new Date(d));
        }
        dates.push(new Date(new Date(checkOutDate).setHours(11, 0, 0, 0)));
        return dates;
      }
    );
  };

  const isDateHighlighted = (date, roomTitle) => {
    const highlightedDates = highlightDates(roomTitle);
    return highlightedDates.some(
      (highlightedDate) =>
        highlightedDate.getFullYear() === date.getFullYear() &&
        highlightedDate.getMonth() === date.getMonth() &&
        highlightedDate.getDate() === date.getDate()
    );
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
          <DatePicker
            selected={formData.checkInDate}
            onChange={handleCheckInDateChange}
            startDate={formData.checkInDate}
            endDate={formData.checkOutDate}
            selectsStart
            locale="ro"
            placeholderText="Selectează data"
            minDate={new Date()}
            filterDate={(date) => !isDateHighlighted(date, formData.room)}
            className="form-control"
          />
        </div>
        <div className="booking-form-group">
          <label>Data Check-Out</label>
          <DatePicker
            selected={formData.checkOutDate}
            onChange={handleCheckOutDateChange}
            startDate={formData.checkInDate}
            endDate={formData.checkOutDate}
            selectsEnd
            locale="ro"
            placeholderText="Selectează data"
            minDate={formData.checkInDate || new Date()}
            filterDate={(date) => !isDateHighlighted(date, formData.room)}
            className="form-control"
          />
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
