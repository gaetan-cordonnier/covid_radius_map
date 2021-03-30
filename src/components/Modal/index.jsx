import React, { useState } from "react";

import Loader from "react-loader-spinner";

import * as S from "./styles.js";

export default function Modal() {
    const [isOpen, setIsOpen] = useState(true)

    return(
        <>
        {isOpen && <S.DivModal>
            <button className="close" onClick={() => setIsOpen(false)}></button>
            <p>Saisissez votre adresse directement dans la barre de recherche pour visualisez facilement et rapidement si vous figurez dans la zone des 10km de votre domicile.*<br /><br /><br />Nous vous offrons également la possibilité de télécharger directement votre attestation ou d'imprimer votre position pour la joindre à votre attestation.</p><br /><br /><p className="note">* aucune donnée de géo-localisation collectée.</p>
        </S.DivModal>}

        {!isOpen &&<Loader
        className="spinner"
        type="ThreeDots"
        color="#F5F5F5"
        height={100}
        width={100}
        timeout={1500}
      />}
        </>
    ); 
}