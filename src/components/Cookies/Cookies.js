import React, { useState, useEffect } from "react";
import "./Cookies.css";

const Cookies = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setShowPopup(true);
  }, []);

  const handleAccept = () => {
    // Action for accepting cookies
    setShowPopup(false);
    // Add functionality to set cookies here
  };

  const handleReject = () => {
    // Action for rejecting cookies
    setShowPopup(false);
    // Add functionality to reject cookies here
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <h2>Setări de confidențialitate</h2>
        <p>
          Pensiunea Kassa folosește cookie-uri pentru a asigura funcționarea
          corectă a site-ului nostru, pentru a personaliza conținutul și
          publicitatea, pentru a oferi funcții disponibile pe rețelele de
          socializare și pentru a analiza traficul. De asemenea, împărtășim
          informații despre navigarea dvs. pe site-ul nostru cu partenerii
          noștri de publicitate și rețelele sociale. Datele sunt, de asemenea,
          partajate cu furnizorii de analize web. Puteți gestiona categoriile de
          cookie-uri, dar puteți accepta sau respinge toate cookie-urile. Puteți
          să vă schimbați opțiunile în orice moment făcând clic pe butonul
          "Setări cookie-uri". Pentru mai multe informații despre practicile
          noastre, puteți vizita{" "}
          <a href="/privacy">politica noastră privind cookie-urile</a> și{" "}
          <a href="/privacy">politica noastră de confidențialitate</a>.
        </p>
        <div className="cookies-buttons">
          <button className="settings-button" onClick={handleReject}>
            Setări cookie-uri
          </button>
          <button className="accept-button" onClick={handleAccept}>
            Acceptă toate cookie-urile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
