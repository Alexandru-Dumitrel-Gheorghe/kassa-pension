import React from "react";
import BookingForm from "../components/BookingForm";

const rooms = [
  {
    title: "Camera Aur",
    type: "Camera de Lux",
    description:
      "Căutați cea mai luxoasă ședere la Hotelul Olimpic? Alegeți camera Aur și rezervați acum! Camera este perfectă pentru o escapadă romantică.",
    amenities: [
      "Max. 2 persoane",
      "1x pat dublu",
      "Cameră de colț cu vedere panoramică",
      "Baie cu duș și cadă cu hidromasaj",
      "Canapea",
    ],
    image:
      "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Argint",
    type: "Camera de Lux",
    description:
      "Bucurați-vă de șederea dvs. în Camera Argint, cu facilități moderne și o frumoasă vedere a Brașovului.",
    amenities: [
      "Max. 2 persoane",
      "1x pat dublu",
      "Vedere spre oraș",
      "Baie cu duș",
      "Canapea",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Bronz",
    type: "Camera Confort",
    description:
      "Camera Bronz oferă confort și stil, perfectă pentru o ședere scurtă în Brașov.",
    amenities: [
      "Max. 2 persoane",
      "1x pat dublu",
      "Vedere spre stradă",
      "Baie cu duș",
      "Birou",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Platină",
    type: "Camera de Lux",
    description:
      "Răsfățați-vă în Camera Platină cu facilități premium și o vedere spectaculoasă.",
    amenities: [
      "Max. 2 persoane",
      "1x pat king",
      "Vedere panoramică",
      "Baie cu jacuzzi",
      "Zonă de relaxare",
    ],
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Diamant",
    type: "Camera Premium",
    description:
      "Experimentați luxul suprem în Camera Diamant cu facilități de top.",
    amenities: [
      "Max. 2 persoane",
      "1x pat king",
      "Vedere la ocean",
      "Baie cu saună",
      "Balcon privat",
    ],
    image:
      "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camera Smarald",
    type: "Camera Deluxe",
    description:
      "Stați în Camera Smarald pentru o experiență deluxe cu toate facilitățile moderne.",
    amenities: [
      "Max. 2 persoane",
      "1x pat queen",
      "Vedere la grădină",
      "Baie cu duș",
      "Mini bar",
    ],
    image:
      "https://images.unsplash.com/photo-1549638441-b787d2e11f14?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const BookNow = () => {
  return (
    <div className="book-now-page">
      <BookingForm rooms={rooms} />
    </div>
  );
};

export default BookNow;
