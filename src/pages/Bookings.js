import React, { useEffect, useState } from "react";
import Logout from "../components/Logout/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Bookings.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 10;

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:5000/api/bookings");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Invalid Date";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  const formatTime = (dateTimeString) => {
    if (!dateTimeString) return "Invalid Time";
    const date = new Date(dateTimeString);
    return isNaN(date.getTime())
      ? "Invalid Time"
      : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="booking-page">
      <header className="booking-header">
        <h1>Bookings</h1>
        <div className="logout-container">
          <Logout /> {/* Butonul de logout poziționat în centru */}
        </div>
      </header>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Phone</th>
              <th>Name</th>
              <th>Address</th>
              <th>Room</th>
              <th>Check-in Date</th>
              <th>Check-in Time</th>
              <th>Check-out Date</th>
              <th>Check-out Time</th>
              <th>Guests</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking, index) => (
              <tr key={index}>
                <td data-label="Email">{booking.email}</td>
                <td data-label="Phone">{booking.phone}</td>
                <td data-label="Name">{booking.name}</td>
                <td data-label="Address">{booking.address}</td>
                <td data-label="Room">{booking.room}</td>
                <td data-label="Check-in Date">
                  {formatDate(booking.checkInDate)}
                </td>
                <td data-label="Check-in Time">
                  {formatTime(booking.checkInDate)}
                </td>
                <td data-label="Check-out Date">
                  {formatDate(booking.checkOutDate)}
                </td>
                <td data-label="Check-out Time">
                  {formatTime(booking.checkOutDate)}
                </td>
                <td data-label="Guests">{booking.guests}</td>
                <td data-label="Message">{booking.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(bookings.length / bookingsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={i + 1 === currentPage ? "active" : ""}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Bookings;
