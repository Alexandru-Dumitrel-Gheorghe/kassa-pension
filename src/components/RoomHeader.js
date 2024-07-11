import React from "react";
import "./RoomHeader.css";

const RoomHeader = ({ title, subtitle }) => {
  return (
    <div className="room-header">
      <div className="header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default RoomHeader;
