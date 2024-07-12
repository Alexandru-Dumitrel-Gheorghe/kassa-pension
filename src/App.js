import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPages";
import Rooms from "./pages/Rooms";
import BookNow from "./pages/BookNow";
import Login from "./pages/Login";
import Bookings from "./pages/Bookings";
import MyNavbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Importăm fișierul CSS global

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />{" "}
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
      <ContactSection />
      <Footer />
    </Router>
  );
};

export default App;
