import { Link } from 'react-router-dom';
import './error.css';

function Error() {
  return (
    <div className="div_error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="lien_accueil_404">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
