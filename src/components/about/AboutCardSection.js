import React from "react";
import "./AboutCardSection.css";

const AboutCardSection = () => {
  const cards = [
    {
      image:
        "https://i.pinimg.com/originals/b1/e8/fe/b1e8fef7031b037cf8e061b3a0f760b2.jpg",
      title: "Castelul Bran",
      description:
        " Acesta este unul dintre cele mai renumite și vizitate castele din Europa de Est, atrăgând anual mii de turiști din întreaga lume. Castelul a fost construit între anii 1377 și 1388 de către sașii din Transilvania, cu scopul de a apăra trecătoarea Bran de invaziile otomane și de a proteja rutele comerciale dintre Transilvania și Țara Românească.",
    },
    {
      image:
        "https://i.pinimg.com/originals/bf/35/5f/bf355f1d99ae4e2ecba8924ff0336b4e.jpg",
      title: "Valea Bangaleasa",
      description:
        "Vaela Bângăleasa este un loc ideal pentru iubitorii de natură și pentru cei care caută să se bucure de activități în aer liber, cum ar fi drumețiile, ciclismul montan și observarea faunei sălbatice. Regiunea este acoperită de păduri de foioase și conifere, oferind habitat pentru diverse specii de animale și plante.!",
    },
    {
      image:
        "https://zigzagprinromania.com/blog/wp-content/uploads/2017/09/IUL_9337-logo.jpg",
      title: "Dino Parc",
      description:
        "Dino Parc Râșnov este un parc tematic situat în orașul Râșnov, județul Brașov, România, dedicat în întregime dinozaurilor și lumii preistorice. Inaugurat în 2015, Dino Parc Râșnov este cel mai mare parc cu dinozauri din sud-estul Europei și oferă o experiență educativă și distractivă pentru vizitatori de toate vârstele.",
    },
    {
      image:
        "https://aventi.ro/wp-content/uploads/2021/06/159897516_3641997725909866_6009049929475981135_n.jpeg",
      title: "Parcul de aventură Cheile Grădiștei",
      description:
        "Parcul de aventură Cheile Grădiștei este o destinație de top pentru iubitorii de adrenalină și activități în aer liber, situat în inima munților Carpați, în apropierea localității Fundata din județul Brașov, România. Acesta face parte din Complexul Turistic Cheile Grădiștei, cunoscut pentru peisajele sale pitorești și facilitățile de recreere variate.",
    },
  ];

  return (
    <div className="about-card-section">
      {cards.map((card, index) => (
        <div className="about-card" key={index}>
          <img src={card.image} alt={card.title} />
          <div className="about-card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCardSection;
