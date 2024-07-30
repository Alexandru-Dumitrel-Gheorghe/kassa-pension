import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.css";
import ro from "date-fns/locale/ro"; // importam localizarea in limba romana

registerLocale("ro", ro); // inregistram localizarea pentru datepicker

// definim camerele disponibile
const rooms = [
  { title: "Camera Aur" },
  { title: "Camera Argint" },
  { title: "Camera Bronz" },
  { title: "Camera Platina" },
  { title: "Camera Diamant" },
  { title: "Camera Perla" },
  { title: "Camera Rubin" },
];

const BookingFormContent = () => {
  const location = useLocation(); // obtinem locatia curenta pentru a accesa starea trimisa
  const navigate = useNavigate(); // functie pentru navigare in alte pagini
  const defaultRoom = location.state?.roomTitle || rooms[0].title; // camera implicita este preluata din starea trimisa sau prima din lista

  // initializam starea pentru datele formularului
  const [formData, setFormData] = useState({
    firstName: "", // prenume
    lastName: "", // nume de familie
    email: "", // email
    phonePrefix: "", // prefixul de telefon
    phoneNumber: "", // numarul de telefon
    address: "", // adresa
    checkInDate: null, // data de check-in
    checkInTime: "15:00", // ora implicita de check-in
    checkOutDate: null, // data de check-out
    checkOutTime: "11:00", // ora implicita de check-out
    guests: "", // numarul de oaspeti
    message: "", // observatii
    room: defaultRoom, // camera selectata
    paymentMethod: "cash", // metoda de plata implicita
  });

  const [submitMessage, setSubmitMessage] = useState(""); // mesajul de confirmare sau eroare la trimiterea formularului
  const [dynamicPrices, setDynamicPrices] = useState({}); // preturile dinamice pentru camere
  const [bookedDates, setBookedDates] = useState({}); // datele deja rezervate

  // efect pentru a prelua datele de rezervari la montarea componentei
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings"); // apel catre API pentru a obtine rezervarile
        const data = await response.json(); // convertim raspunsul la format json
        const prices = {}; // obiect pentru a stoca preturile dinamice
        const booked = {}; // obiect pentru a stoca datele rezervate

        data.forEach((booking) => {
          // calculam preturile si datele rezervate
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
            booked[booking.room].push(new Date(d)); // adaugam fiecare zi intre check-in si check-out in booked
          }
        });

        // calculam pretul final al fiecarei camere
        Object.keys(prices).forEach((room) => {
          prices[room] =
            rooms.find((r) => r.title === room).basePrice *
            (1 + prices[room] * 0.1); // aplicam o crestere de pret pe baza cererii
        });

        setDynamicPrices(prices); // actualizam starea cu preturile dinamice
        setBookedDates(booked); // actualizam starea cu datele rezervate
      } catch (error) {
        console.error("Error fetching dynamic prices:", error); // gestionam eventualele erori
      }
    };

    fetchBookings(); // apelam functia de preluare a rezervarilor
  }, []);

  // functie pentru a gestiona modificarile in formular
  const handleChange = (e) => {
    const { name, value } = e.target; // obtinem numele si valoarea campului modificat
    setFormData({ ...formData, [name]: value }); // actualizam starea formularului
  };

  // functie pentru a seta data de check-in
  const handleCheckInDateChange = (date) => {
    setFormData({ ...formData, checkInDate: date });
  };

  // functie pentru a seta data de check-out
  const handleCheckOutDateChange = (date) => {
    setFormData({ ...formData, checkOutDate: date });
  };

  // functie pentru a verifica disponibilitatea unei camere
  const isRoomAvailable = async (room, checkInDate, checkOutDate) => {
    const response = await fetch(
      "http://localhost:5000/api/check-availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ room, checkInDate, checkOutDate }), // trimitem datele catre API
      }
    );
    const data = await response.json();
    return data.available; // returnam disponibilitatea camerei
  };

  // functie pentru a gestiona trimiterea formularului
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevenim reincarcarea paginii

    // functie pentru a formata data si ora intr-un format standardizat
    const formatDateTime = (date, time) => {
      return date && time
        ? new Date(
            `${date.toISOString().split("T")[0]}T${time}:00`
          ).toISOString()
        : null;
    };

    // completam datele din formular cu informatiile necesare
    const completeFormData = {
      ...formData,
      phone: `${formData.phonePrefix}${formData.phoneNumber}`, // concatenam prefixul si numarul de telefon
      name: `${formData.firstName} ${formData.lastName}`, // concatenam prenumele si numele de familie
      checkInDate: formatDateTime(formData.checkInDate, formData.checkInTime), // formatarea datei de check-in
      checkOutDate: formatDateTime(
        formData.checkOutDate,
        formData.checkOutTime
      ), // formatarea datei de check-out
    };

    // verificam daca datele de check-in si check-out sunt valide
    if (!completeFormData.checkInDate || !completeFormData.checkOutDate) {
      setSubmitMessage(
        "te rugam sa furnizezi date valide pentru check-in si check-out."
      );
      return;
    }

    // verificam disponibilitatea camerei
    const available = await isRoomAvailable(
      completeFormData.room,
      completeFormData.checkInDate,
      completeFormData.checkOutDate
    );

    // daca camera nu este disponibila, afisam un mesaj corespunzator
    if (!available) {
      setSubmitMessage(
        `camera ${
          completeFormData.room
        } nu este disponibila intre ${formData.checkInDate.toLocaleDateString()} si ${formData.checkOutDate.toLocaleDateString()}.`
      );
      return;
    }

    // calculam pretul total al rezervarii
    const timeDiff = Math.abs(
      new Date(completeFormData.checkOutDate) -
        new Date(completeFormData.checkInDate)
    );
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // diferenta in zile
    const totalPrice = daysDiff * (dynamicPrices[completeFormData.room] || 0); // calculam pretul final
    completeFormData.price = totalPrice;

    // daca metoda de plata este card, navigam la pagina de plata
    if (formData.paymentMethod === "card") {
      navigate("/payment", { state: { ...completeFormData } });
    } else {
      // altfel, trimitem datele rezervarii
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
          setSubmitMessage("rezervarea ta a fost trimisa cu succes!"); // mesaj de succes
          // resetam formularul dupa trimitere
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
          console.error("Error:", data.error); // gestionam erorile
          setSubmitMessage(
            "trimiterea rezervarii a esuat. te rugam sa incerci din nou."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmitMessage(
          "trimiterea rezervarii a esuat. te rugam sa incerci din nou."
        );
      }
    }
  };

  // functie pentru a verifica daca o data este deja rezervata
  const isDateBooked = (date) => {
    const { room } = formData; // obtinem camera selectata
    return bookedDates[room]?.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="booking-form-wrapper">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label>nume</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="prenume"
              required
            />
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="nume de familie"
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>adresa</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="strada, numar, oras"
            required
          />
        </div>
        <div className="booking-form-group">
          <label>email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ex: nume@exemplu.com"
            required
          />
        </div>
        <div className="booking-form-group">
          <label>telefon</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              className="form-control"
              name="phonePrefix"
              value={formData.phonePrefix}
              onChange={handleChange}
              placeholder="prefix"
              required
            />
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="numar de telefon"
              required
            />
          </div>
        </div>
        <div className="booking-form-group">
          <label>data check-in</label>
          <DatePicker
            selected={formData.checkInDate}
            onChange={handleCheckInDateChange}
            startDate={formData.checkInDate}
            endDate={formData.checkOutDate}
            selectsStart
            locale="ro"
            placeholderText="selecteaza data"
            minDate={new Date()}
            filterDate={(date) => !isDateBooked(date)}
            className="form-control"
          />
        </div>
        <div className="booking-form-group">
          <label>data check-out</label>
          <DatePicker
            selected={formData.checkOutDate}
            onChange={handleCheckOutDateChange}
            startDate={formData.checkInDate}
            endDate={formData.checkOutDate}
            selectsEnd
            locale="ro"
            placeholderText="selecteaza data"
            minDate={formData.checkInDate || new Date()}
            filterDate={(date) => !isDateBooked(date)}
            className="form-control"
          />
        </div>
        <div className="booking-form-group">
          <label>numar de oaspeti</label>
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
          <label>observatii</label>
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="booking-form-group">
          <label>camera</label>
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
          <label>metoda de plata</label>
          <select
            className="form-control"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="cash">cash</option>
            <option value="card">card</option>
          </select>
        </div>
        <div className="booking-btn-container">
          <button type="submit" className="booking-btn">
            rezerva acum
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
