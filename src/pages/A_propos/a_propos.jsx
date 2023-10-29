import { useState } from 'react';
import imgAPropos from '../../assets/a_propos_img.jpeg';
import vector from '../../assets/Vector.svg';
import './a_propos.css';
import Collapse from '../../components/Collapse/collapse';

function APropos() {
  const [isParagraphOneOpen, setOneIsOpen] = useState(true);
  const [isParagraphTwoOpen, setTwoIsOpen] = useState(true);
  const [isParagraphThreeOpen, setThreeIsOpen] = useState(true);
  const [isParagraphFourOpen, setFourIsOpen] = useState(true);
  /*   const title1 = 'Fiabilité';
  const content1 =
    'Les annonces postées sur Kasa garantissent une fiabilité totale.'; */

  return (
    <div className="a_propos">
      <header className="header_img">
        <img
          src={imgAPropos}
          alt="background du titre"
          className="a_propos_img"
        />
      </header>
      <section className="content_section">
        <div className="accordeon">
          <div
            className="title_accordeon"
            onClick={() =>
              isParagraphOneOpen ? setOneIsOpen(false) : setOneIsOpen(true)
            }
          >
            <h2>Fiabilité</h2>
            {isParagraphOneOpen ? (
              <img src={vector} alt="vector" />
            ) : (
              <img src={vector} alt="vector" className="inverse" />
            )}
          </div>
          {isParagraphOneOpen && (
            <p className="p_accordeon">
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          )}
        </div>

        <div className="accordeon">
          <div
            className="title_accordeon"
            onClick={() =>
              isParagraphTwoOpen ? setTwoIsOpen(false) : setTwoIsOpen(true)
            }
          >
            <h2>Respect</h2>
            {isParagraphTwoOpen ? (
              <img src={vector} alt="vector" />
            ) : (
              <img src={vector} alt="vector" className="inverse" />
            )}
          </div>
          {isParagraphTwoOpen && (
            <p className="p_accordeon">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          )}
        </div>

        <div className="accordeon">
          <div
            className="title_accordeon"
            onClick={() =>
              isParagraphThreeOpen
                ? setThreeIsOpen(false)
                : setThreeIsOpen(true)
            }
          >
            <h2>Service</h2>
            {isParagraphThreeOpen ? (
              <img src={vector} alt="vector" />
            ) : (
              <img src={vector} alt="vector" className="inverse" />
            )}
          </div>
          {isParagraphThreeOpen && (
            <p className="p_accordeon">
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          )}
        </div>

        <div className="accordeon">
          <div
            className="title_accordeon"
            onClick={() =>
              isParagraphFourOpen ? setFourIsOpen(false) : setFourIsOpen(true)
            }
          >
            <h2>Sécurité</h2>
            {isParagraphFourOpen ? (
              <img src={vector} alt="vector" />
            ) : (
              <img src={vector} alt="vector" className="inverse" />
            )}
          </div>
          {isParagraphFourOpen && (
            <p className="p_accordeon">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default APropos;
