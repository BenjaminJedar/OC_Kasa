import { Link } from 'react-router-dom'
import Logo from '../Logo/logo'
import './header.css'

let lien_accueil = document.querySelector('.lien_accueil')
let lien_a_propos = document.querySelector('.lien_a_propos')

function Header() {
  return (
    <div>
      <section className="headerSection">
        <Logo />
        <nav className="headerNav">
          <Link
            to="/"
            className="lien_accueil"
            onClick={() => alert('Tu viens de cliquer sur un lien là !')}
          >
            Accueil
          </Link>
          <Link to="/a_propos" className="lien_a_propos">
            A propos
          </Link>
        </nav>
      </section>
    </div>
  )
}

export default Header
