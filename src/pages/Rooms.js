import React from "react";
import RoomHeader from "../components/RoomHeader";
import HotelInfoSection from "../components/HotelInfoSection";
import RoomCardsSection from "../components/RoomCardsSection";

const Rooms = () => {
  return (
    <div className="rooms-page">
      <RoomHeader
        title="Rooms"
        subtitle="Experience comfort and elegance in every stay"
      />
      <HotelInfoSection />
      <RoomCardsSection />
    </div>
  );
};

export default Rooms;
