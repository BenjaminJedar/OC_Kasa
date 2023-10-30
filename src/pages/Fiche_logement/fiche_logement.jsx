import Collapse from '../../components/Collapse/collapse';
const logements = require('../../data/logements.json');
import('./fiche_logement.css');

function FicheLogement() {
  const indexOfLocation = logements.findIndex(
    () => logements.id === '7cbb378e',
  );

  console.log(logements[0].id);
  return (
    <div className="fiche_logement">
      <div className="slider">
        <img src={logements[0].cover} alt="cover" />
      </div>
      <main className="info">
        <h2>{logements[0].title}</h2>
        <p>{logements[0].location}</p>
        <div>tags</div>
        <p>{logements[1].host.name}</p>
        <img src={logements[1].host.picture} alt="host" />
        <p>X X X X X</p>
        <Collapse
          titleValue="Description"
          contentValue={logements[0].description}
        />
        <Collapse
          titleValue="Equipements"
          contentValue={logements[0].equipments}
        />
      </main>
    </div>
  );
}

export default FicheLogement;
