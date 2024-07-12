// src/components/about/AboutCardSection.js
import React from "react";
import "./AboutCardSection.css";

const AboutCardSection = () => {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Parking",
      description:
        "Parkplätze stehen am Frans-Otten-Stadion, 100 m vom Hotel entfernt, zur Verfügung. Die Kosten betragen 17,50 € pro Tag. Sie können bei uns im Voraus buchen!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 2",
      description:
        "Parkplätze stehen am Frans-Otten-Stadion, 100 m vom Hotel entfernt, zur Verfügung. Die Kosten betragen 17,50 € pro Tag. Sie können bei uns im Voraus buchen!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 3",
      description:
        "Parkplätze stehen am Frans-Otten-Stadion, 100 m vom Hotel entfernt, zur Verfügung. Die Kosten betragen 17,50 € pro Tag. Sie können bei uns im Voraus buchen!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 4",
      description:
        "Parkplätze stehen am Frans-Otten-Stadion, 100 m vom Hotel entfernt, zur Verfügung. Die Kosten betragen 17,50 € pro Tag. Sie können bei uns im Voraus buchen!",
    },
  ];

  return (
    <div className="about-card-section">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCardSection;
