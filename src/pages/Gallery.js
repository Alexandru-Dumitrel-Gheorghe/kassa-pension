import React from "react";
import GalleryHeader from "../components/Gallery/GalleryHeader";
import GalleryComponent from "../components/Gallery/GalleryComponent";
import MyNavbar from "../components/Navbar";

const Gallery = () => {
  return (
    <div>
      <MyNavbar />
      <GalleryHeader />
      <GalleryComponent />
    </div>
  );
};

export default Gallery;
