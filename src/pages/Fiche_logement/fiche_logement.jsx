import Collapse from '../../components/Collapse/collapse';
import Tag from '../../components/Tag/tag';
const logements = require('../../data/logements.json');
import('./fiche_logement.css');

function FicheLogement() {
  /*   const indexOfaccommodation = logements.findIndex(
    () => logements.id === '7cbb378e',
  ); */

  console.log(logements[0].id);
  return (
    <div className="fiche_logement">
      <div className="slider">
        <img src={logements[0].cover} alt="cover" className="slider_img" />
      </div>

      <main className="grid_content">
        <h2 className="accommodation_title">{logements[0].title}</h2>
        <p className="accommodation_place">{logements[0].location}</p>
        <div className="tags">
          {logements[7].tags.map((tags, index) => (
            <Tag tagValue={tags} key={Math.random()} />
          ))}
        </div>
        <div className="host_info">
          <p className="host_name">{logements[7].host.name}</p>
          <img
            src={logements[1].host.picture}
            alt="host"
            className="host_picture"
          />
        </div>

        <p className="rate">X X X X X</p>
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
