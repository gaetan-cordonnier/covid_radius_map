import React, { useState, useEffect } from "react";
import * as S from "./styles.js";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState();
  const getYear = () => setCurrentYear(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="no-print">
      <S.Container>
        <a
          href="mailto:contact@followthemarket.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/contact.svg" alt="Nous contacter" />
        </a>
        <span className="copyright">
          &copy; {currentYear} - Follow The Market - Fait avec &#x2665; à Lille
        </span>
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
      </S.Container>
    </div>
  );
}
