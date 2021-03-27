import React, { useState, useEffect } from "react";

import * as S from "./styles.js";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState();
  const getYear = () => setCurrentYear(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <S.DivFooter>
      <div className="contact">
        <a
          href="https://www.followthemarket.fr/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/contact.svg" alt="Nous contacter" />
        </a>
      </div>
      <div>
        <span>&copy; {currentYear} - Follow The Market</span>{" "}
        <span className="lille"> - Fait avec &#x2665; à Lille</span>
      </div>
      <S.Sponsors>
        <a
          href="https://www.hodefi.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/hodefi.png" alt="Logo Hodéfi" />
        </a>
        <a
          href="https://www.euratechnologies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/euratechnologie.png" alt="Logo euratechnologie" />
        </a>
        <a
          href="https://www.hautsdefrance.fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/haut-de-france.png" alt="Logo Haut-de-France" />
        </a>
        <a
          href="https://www.ntico-technology.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/ntico-technology.png" alt="Logo ntico-technology" />
        </a>
      </S.Sponsors>
    </S.DivFooter>
  );
}
