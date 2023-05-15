import Modern from "../assets/Modern.svg";
import Meritocratic from "../assets/Meritocratic.svg";
import Engineered from "../assets/Engineered.svg";
import SecondSectionStyle from "./style/SecondSectionStyle.module.css";
import { useState } from "react";
import { useEffect } from "react";

const cards = [
  {
    imgSrc: Modern,
    imgAlt: "Modern",
    title: "Modern workforce",
    desc: "Multistakeholder governance aligns employees with the organization’s wider community.",
  },
  {
    imgSrc: Meritocratic,
    imgAlt: "Meritocratic",
    title: "Meritocratic by design",
    desc: "Tokenized ownership aligns deeply committed individuals with the organization’s success.",
  },
  {
    imgSrc: Engineered,
    imgAlt: "Engineered",
    title: "Engineered for resilience",
    desc: "Open Enterprise supports best practices in sociocratic management.",
  },
];

const SecondSection = () => {
  const [isVisible, setIsVisble] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.querySelector(
        `.${SecondSectionStyle["second-cards"]}`
      ).offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisble(true);
      } else {
        setIsVisble(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, setIsVisble, SecondSectionStyle]);

  return (
    <section className={SecondSectionStyle.second}>
      <h1>Reimagining what it means to work</h1>
      <p>
        Teams and communities using Open Enterprise fundamentally unlock a
        reality of work that reimagines how people engage in economic
        opportunity, meeting the demands and expectations of a modern
        organization.
      </p>
      <div className={SecondSectionStyle["second-cards"]}>
        {cards.map(({ imgSrc, imgAlt, title, desc }, index) => (
          <div
            key={index}
            className={`${isVisible ? SecondSectionStyle["visible"] : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={imgSrc} alt={imgAlt} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondSection;
