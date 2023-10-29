const logements = require('../../data/logements.json');

function FicheLogement() {
  return (
    <div className="fiche_logement">
      <div className="slider"></div>
      <main>
        <h2>Le titre du logement</h2>
        <p>La localisation du logement</p>
        <div>tags</div>
      </main>
    </div>
  );
}

export default FicheLogement;
