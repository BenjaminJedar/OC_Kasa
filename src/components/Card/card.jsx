import './card.css';
import { Link } from 'react-router-dom';

function Card({ title_value, img_value, id_value }) {
  return (
    <Link to={`/fiche_logement/${id_value}`} className="card_link">
      <div className="card">
        <img src={img_value} alt="couverture" className="coverImg" />
        <p className="location_title">{title_value}</p>
      </div>
    </Link>
  );
}

export default Card;

/* const isIdExist = logements.find((logement) => logement.id_value);
console.log(isIdExist);

return (
  <Link
    to={isIdExist ? `/fiche_logement/${id_value}` : `/fiche_logement`} */
