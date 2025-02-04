import React from "react";
import RoomHeader from "../components/RoomHeader";
import HotelInfoSection from "../components/HotelInfoSection";
import RoomCardsSection from "../components/RoomCardsSection";
import ScrollToTop from "../components/ScrollToTop";
import InformatiiImportante from "../components/informatii/InformatiiImportante";

const Rooms = () => {
  return (
    <div className="rooms-page">
      <RoomHeader
        title="Rooms"
        subtitle="Experience comfort and elegance in every stay"
      />
      <HotelInfoSection />
      <InformatiiImportante />
      <RoomCardsSection />
      <ScrollToTop />
    </div>
  );
};

export default Rooms;
