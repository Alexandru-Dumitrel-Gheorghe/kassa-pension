import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    paymentMethod: "cash", // Default payment method
  });

  const [submitMessage, setSubmitMessage] = useState("");
  const [dynamicPrices, setDynamicPrices] = useState({});
  const [bookedDates, setBookedDates] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings");
        const data = await response.json();
        const prices = {};
        const booked = {};

        data.forEach((booking) => {
          if (!prices[booking.room]) {
            prices[booking.room] = 0;
          }
          prices[booking.room] += 1;

          if (!booked[booking.room]) {
            booked[booking.room] = [];
          }
          const checkIn = new Date(booking.checkInDate);
          const checkOut = new Date(booking.checkOutDate);
          for (
            let d = new Date(checkIn);
            d <= checkOut;
            d.setDate(d.getDate() + 1)
          ) {
            booked[booking.room].push(new Date(d));
          }
        });

        Object.keys(prices).forEach((room) => {
          prices[room] =
            rooms.find((r) => r.title === room).basePrice *
            (1 + prices[room] * 0.1);
        });

        setDynamicPrices(prices);
        setBookedDates(booked);
      } catch (error) {
        console.error("Error fetching dynamic prices:", error);
      }
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

  const isRoomAvailable = async (room, checkInDate, checkOutDate) => {
    const response = await fetch(
      "http://localhost:5000/api/check-availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room, checkInDate, checkOutDate }),
      }
    );
    const data = await response.json();
    return data.available;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formatDateTime = (date, time) => {
      return date && time
        ? new Date(
            `${date.toISOString().split("T")[0]}T${time}:00`
          ).toISOString()
        : null;
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

    // Check room availability
    const available = await isRoomAvailable(
      completeFormData.room,
      completeFormData.checkInDate,
      completeFormData.checkOutDate
    );

    if (!available) {
      setSubmitMessage(
        `Camera ${
          completeFormData.room
        } nu este disponibilă între ${formData.checkInDate.toLocaleDateString()} și ${formData.checkOutDate.toLocaleDateString()}.`
      );
      return;
    }

    // Calculate total price
    const timeDiff = Math.abs(
      new Date(completeFormData.checkOutDate) -
        new Date(completeFormData.checkInDate)
    );
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPrice = daysDiff * (dynamicPrices[completeFormData.room] || 0);
    completeFormData.price = totalPrice;

    // If payment method is card, redirect to payment page
    if (formData.paymentMethod === "card") {
      navigate("/payment", { state: { ...completeFormData } });
    } else {
      // Submit the booking
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
            paymentMethod: "cash",
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
    }
  };

  const isDateBooked = (date) => {
    const { room } = formData;
    return bookedDates[room]?.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
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
            filterDate={(date) => !isDateBooked(date)}
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
            filterDate={(date) => !isDateBooked(date)}
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
        <div className="booking-form-group">
          <label>Metoda de Plată</label>
          <select
            className="form-control"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="cash">Cash</option>
            <option value="card">Card</option>
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
