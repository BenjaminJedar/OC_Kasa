import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/logo';
import './header.css';

function Header() {
  const location = useLocation();
  return (
    <div>
      <div className="headerSection">
        <Logo className="headerLogo" />
        <nav className="headerNav">
          <Link
            to="/"
            className={location.pathname === '/' ? 'lien active' : 'lien'}
          >
            Accueil
          </Link>
          <Link
            to="/a_propos"
            className={
              location.pathname === '/a_propos' ? 'lien active' : 'lien'
            }
          >
            A propos
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
