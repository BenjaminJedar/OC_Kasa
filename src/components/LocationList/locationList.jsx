import Card from '../Card/card';
import './locationList.css';
const logements = require('../../data/logements.json');
console.log(logements);

function locationList() {
  return (
    <ul className="listOfLocations">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title_value={logement.title}
          img_value={logement.cover}
          id_value={logement.id}
        />
      ))}
    </ul>
  );
}

export default locationList;
