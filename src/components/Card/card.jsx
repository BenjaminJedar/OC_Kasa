import './card.css';
import { Link } from 'react-router-dom';

function Card({ title_value, img_value, id_value }) {
  return (
    <Link to="/fiche_logement" className="lien lien_a_propos">
      <div className="card">
        <img src={img_value} alt="couverture" className="coverImg" />
        <p className="location_title">{title_value}</p>
      </div>
    </Link>
  );
}

export default Card;
