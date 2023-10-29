import { Link } from 'react-router-dom';
import Logo from '../Logo/logo';
import './header.css';

let lien_accueil = document.querySelector('.lien_accueil');
let lien_a_propos = document.querySelector('.lien_a_propos');

function Header() {
  return (
    <div>
      <div className="headerSection">
        <Logo className="headerLogo" />
        <nav className="headerNav">
          <Link
            to="/"
            className="lien lien_accueil"
            onClick={() => alert('Tu viens de cliquer sur un lien là !')}
          >
            Accueil
          </Link>
          <Link to="/a_propos" className="lien lien_a_propos">
            A propos
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
