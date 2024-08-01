# Hotel Booking Platform

## Description

This project is a hotel room booking platform built with React for the frontend and Node.js with MongoDB for the backend. The application allows users to view room information, make bookings, and manage authentication.

## Features

- Display available hotel room information.
- Room booking functionality.
- User authentication.
- Admin panel for viewing bookings.

## Technologies Used

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Netlify

## Installation

### Prerequisites

- Node.js
- MongoDB

## Usage

- Home Page: Displays hotel rooms and other relevant information.
- About Page: Information about the hotel.
- Booking Page: Forms for room bookings.
- Contact Page: Contact information and a contact form.
- Login Page: Login page for accessing bookings and admin features.

## Project Structure

/my-website
|-- /backend
| |-- /models
| | |-- User.js
| |-- /routes
| | |-- auth.js
| |-- node_modules/
| |-- package-lock.json
| |-- package.json
| |-- server.js
|
|-- /build
|-- /node_modules
|-- /public
|-- /src
| |-- /components
| | |-- /about
| | | |-- AboutCardSection.js
| | | |-- AboutInfoSection.js
| | | |-- HeaderAbout.js
| | |-- /BookingForm
| | | |-- BookingFormHeader.js
| | | |-- BookingFormContent.js
| | |-- /contact
| | | |-- ContactForm.js
| | | |-- HeaderContact.js
| | |-- /Cookies
| | | |-- Cookies.js
| | |-- /Gallery
| | | |-- GalleryComponent.js
| | | |-- GalleryHeader.js
| | |-- /informatii
| | | |-- Activitati.js
| | | |-- BusinessFacilities.js
| | | |-- InformatiiImportante.js
| | |-- /Logout
| | | |-- Logout.js
| | |-- /Payment
| | | |-- HeaderPayment.js
| | | |-- PaymentForm.js
| | | |-- PaymentPage.js
| | | |-- PayPalPayment.js
| | |-- Bookings.css
| | |-- ContactSection.js
| | |-- Footer.js
| | |-- Header.js
| | |-- HotelInfoSection.js
| | |-- InfoSection.js
| | |-- KassaCardSection.js
| | |-- Navbar.js
| | |-- ReviewsSection.js
| | |-- RoomCardsSection.js
| | |-- RoomHeader.js
| | |-- ScrollToTop.js
| | |-- Section.js
| |-- /pages
| | |-- About.js
| | |-- BookingForm.js
| | |-- Bookings.js
| | |-- BookNow.js
| | |-- ContactPages.js
| | |-- Contact.js
| | |-- Gallery.js
| | |-- Home.js
| | |-- Login.js
| | |-- Rooms.js
| |-- App.js
| |-- App.test.js
| |-- index.js
| |-- reportWebVitals.js
| |-- ScrollToTop.js
| |-- setupTests.js
| |-- App.css
| |-- index.css
|
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md

## Backend Routes

- /api/auth/register: Route for user registration.
- /api/auth/login: Route for user login.
- /api/auth/users: Route to get all registered users (to be implemented if needed).
