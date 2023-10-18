import Card from '../Card/card';
const logements = require('../../data/logements.json');
console.log(logements);

function locationListe() {
  return (
    <ul>
      {logements.map((logement) => (
        <Card
          key={logement.id}
          title_value={logement.title}
          img_value={logement.cover}
        />
      ))}
    </ul>
  );
}

export default locationListe;
