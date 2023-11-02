import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/collapse';
import Tag from '../../components/Tag/tag';
import Rate from '../../components/Rate/rate';
import Slider from '../../components/Slider/slider';
const logements = require('../../data/logements.json');
import('./fiche_logement.css');

function FicheLogement() {
  const accommodationId = useParams().id;
  const accommodation = logements.filter(
    (logement) => logement.id === accommodationId,
  );

  return (
    <div className="fiche_logement">
      <Slider arrayOfPictures={accommodation[0].pictures} className="slider" />

      <main className="grid_content">
        <div className="title_content">
          <h2 className="accommodation_title">{accommodation[0].title}</h2>
          <p className="accommodation_place">{accommodation[0].location}</p>
        </div>

        <div className="tags">
          {accommodation[0].tags.map((tags, index) => (
            <Tag tagValue={tags} key={Math.random()} />
          ))}
        </div>
        <div className="host_info">
          <p className="host_name">{accommodation[0].host.name}</p>
          <img
            src={accommodation[0].host.picture}
            alt="host"
            className="host_picture"
          />
        </div>
        <div className="rate">
          <Rate nbStarsFull={accommodation[0].rating} />
        </div>

        <Collapse
          titleValue="Description"
          contentValue={accommodation[0].description}
        />
        <Collapse
          titleValue="Equipements"
          contentValue={accommodation[0].equipments}
        />
      </main>
    </div>
  );
}

export default FicheLogement;
