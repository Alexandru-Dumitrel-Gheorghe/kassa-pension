import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import ro from "date-fns/locale/ro"; // Import Romanian locale

registerLocale("ro", ro); // Register Romanian locale

const rooms = [
  { title: "Camera Aur", basePrice: 350 },
  { title: "Camera Argint", basePrice: 300 },
  { title: "Camera Bronz", basePrice: 250 },
  { title: "Camera Platină", basePrice: 400 },
  { title: "Camera Diamant", basePrice: 450 },
  { title: "Camera Perla", basePrice: 270 },
  { title: "Camera Rubin", basePrice: 320 },
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
    price: 0, // Initial price set to 0
    paymentMethod: "cash", // Default payment method
  });

  const [submitMessage, setSubmitMessage] = useState("");
  const [roomAvailability, setRoomAvailability] = useState({});
  const [dynamicPrices, setDynamicPrices] = useState({});

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

    const fetchDynamicPrices = async () => {
      const prices = {};
      for (const room of rooms) {
        const response = await fetch(
          "http://localhost:5000/api/check-availability",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ room: room.title }),
          }
        );
        const data = await response.json();
        prices[room.title] = data.price;
      }
      setDynamicPrices(prices);
    };

    fetchBookings();
    fetchDynamicPrices();
  }, []);

  const calculatePrice = (checkInDate, checkOutDate, roomTitle) => {
    const room = rooms.find((room) => room.title === roomTitle);
    const dynamicPrice = dynamicPrices[roomTitle] || room.basePrice;
    if (!checkInDate || !checkOutDate || !room) {
      return 0;
    }
    const timeDiff = Math.abs(checkOutDate - checkInDate);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff * dynamicPrice;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFormData = { ...formData, [name]: value };

    if (name === "room") {
      updatedFormData.price = calculatePrice(
        formData.checkInDate,
        formData.checkOutDate,
        value
      );
    } else if (name === "checkInDate" || name === "checkOutDate") {
      updatedFormData.price = calculatePrice(
        updatedFormData.checkInDate,
        updatedFormData.checkOutDate,
        formData.room
      );
    }

    setFormData(updatedFormData);
  };

  const handleCheckInDateChange = (date) => {
    const updatedFormData = {
      ...formData,
      checkInDate: date,
      price: calculatePrice(date, formData.checkOutDate, formData.room),
    };
    setFormData(updatedFormData);
  };

  const handleCheckOutDateChange = (date) => {
    const updatedFormData = {
      ...formData,
      checkOutDate: date,
      price: calculatePrice(formData.checkInDate, date, formData.room),
    };
    setFormData(updatedFormData);
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

    if (completeFormData.paymentMethod === "card") {
      navigate("/payment", { state: { formData: completeFormData } });
    } else {
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
            price: 0,
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
            highlightDates={[
              {
                "react-datepicker__day--highlighted-custom-1": highlightDates(
                  formData.room
                ),
              },
            ]}
            filterDate={(date) =>
              !highlightDates(formData.room).some(
                (highlightedDate) =>
                  highlightedDate.getTime() === date.getTime()
              )
            }
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
            highlightDates={[
              {
                "react-datepicker__day--highlighted-custom-1": highlightDates(
                  formData.room
                ),
              },
            ]}
            filterDate={(date) =>
              !highlightDates(formData.room).some(
                (highlightedDate) =>
                  highlightedDate.getTime() === date.getTime()
              )
            }
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
          <label>Metodă de Plată</label>
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
        <div className="booking-form-group">
          <label>Preț Total</label>
          <input
            type="text"
            className="form-control"
            value={`${formData.price} RON`}
            readOnly
          />
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
