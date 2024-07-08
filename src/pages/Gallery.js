import React from "react";
import MyNavbar from "../components/Navbar";

const Gallery = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <h1>Galerie</h1>
        <p>Aici sunt pozele tale!</p>
      </div>
    </div>
  );
};

export default Gallery;
