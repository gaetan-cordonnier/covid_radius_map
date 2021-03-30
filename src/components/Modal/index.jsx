import React, { useEffect, useState } from "react";

import Loader from "react-loader-spinner";

import * as S from "./styles.js";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isRead = localStorage.getItem("value");
    if (isRead) {
      setIsOpen(false);
    } else if (!isRead) {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <S.DivModal>
          <button
            className="close"
            onClick={() => {
              setIsOpen(false) || localStorage.setItem("value", false);
            }}
          />
          <p>
            Saisir une adresse dans la barre de recherche pour visualiser la
            zone des 10km.*
          </p>
          <br />
          <p className="note">* aucune donnée de géo-localisation collectée.</p>
        </S.DivModal>
      )}

      {!isOpen && (
        <Loader
          className="spinner"
          type="ThreeDots"
          color="#F5F5F5"
          height={100}
          width={100}
          timeout={1500}
        />
      )}
    </>
  );
}
