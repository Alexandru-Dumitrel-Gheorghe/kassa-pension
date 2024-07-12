import React, { useEffect, useState } from "react";
import Logout from "../components/Logout/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Bookings.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("http://localhost:5000/api/bookings");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "Invalid Date" : date.toLocaleDateString();
  };

  return (
    <div className="bookings-page">
      <Logout /> {/* Poziționarea butonului logout deasupra tabelului */}
      <h2>Bookings</h2>
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
              <th>Check-out Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td data-label="Email">{booking.email}</td>
                <td data-label="Phone">{booking.phone}</td>
                <td data-label="Name">{booking.name}</td>
                <td data-label="Address">{booking.address}</td>
                <td data-label="Room">{booking.room}</td>
                <td data-label="Check-in Date">
                  {formatDate(booking.checkInDate)}
                </td>
                <td data-label="Check-out Date">
                  {formatDate(booking.checkOutDate)}
                </td>
                <td data-label="Message">{booking.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
