import './card.css';
import { Link } from 'react-router-dom';

function Card({ title_value, img_value, id_value }) {
  const location_url = '/fiche_logement';
  return (
    <Link to={location_url} className="card_link">
      <div className="card">
        <img src={img_value} alt="couverture" className="coverImg" />
        <p className="location_title">{title_value}</p>
      </div>
    </Link>
  );
}

export default Card;
