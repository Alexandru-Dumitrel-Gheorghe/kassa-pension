import React, { useState } from "react";
import { Collapse } from "react-collapse";
import {
  FaInfoCircle,
  FaCheck,
  FaBan,
  FaChild,
  FaSmokingBan,
  FaPaw,
} from "react-icons/fa";
import "./InformatiiImportante.css";

// lista cu informatii importante si iconite asociate
const importantInfo = [
  {
    icon: <FaCheck />,
    title: "Check-in",
    content:
      "De la 15:00 la 00:00\nVa trebui să informați proprietatea în avans despre ora sosirii.",
  },
  { icon: <FaCheck />, title: "Check-out", content: "De la 07:00 la 11:00" },
  {
    icon: <FaBan />,
    title: "Anulare/ plată în avans",
    content:
      "Politicile privind anularea și plata în avans variază în funcție de tipul unității de cazare. Vă rugăm să introduceți datele sejurului și să verificați condițiile aplicabile pentru opțiunea dorită de dvs.",
  },
  {
    icon: <FaChild />,
    title: "Copii şi paturi",
    content:
      "Copiii de orice vârstă sunt bine-veniți.\n\nPentru copiii în vârstă de 4 ani și mai mari se vor percepe tarife de adulți la această proprietate.\n\nPentru a vedea informațiile corecte despre prețuri și capacitate, vă rugăm să adăugați în căutare numărul de copii care vă însoțesc și vârstele acestora.\n\nPolitici despre pătuțuri și paturi suplimentare\n\n0 - 3 ani\nPătuț disponibil la cerere\nGratis\n\nNumărul de paturi suplimentare depinde de opțiunea pe care o alegeți. Vă rugăm să verificați opțiunea selectată pentru mai multe informații.\n\nLa această proprietate nu sunt disponibile paturi suplimentare.\n\nPătuțurile sunt oferite în funcție de disponibilitate.",
  },
  {
    icon: <FaCheck />,
    title: "Nicio restricţie de vârstă",
    content: "Nu există o vârstă minimă pentru check-in",
  },
  {
    icon: <FaSmokingBan />,
    title: "Fumători",
    content: "Fumatul nu este permis.",
  },
  {
    icon: <FaPaw />,
    title: "Animale de companie",
    content: "Animalele de companie nu sunt acceptate.",
  },
];

const InformatiiImportante = () => {
  const [isOpen, setIsOpen] = useState(false); // starea pentru a gestiona deschiderea/închiderea secțiunii

  // functie pentru a schimba starea de deschidere/inchidere
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="important-info-section">
      <div className="important-info-header" onClick={toggleCollapse}>
        <FaInfoCircle className="info-icon" />
        <span className="important-info-text">Informații importante</span>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="important-info-content">
          {importantInfo.map((info, idx) => (
            <div key={idx} className="important-info-item">
              <div className="important-info-icon">{info.icon}</div>
              <div className="important-info-details">
                <h5>{info.title}</h5>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default InformatiiImportante;
