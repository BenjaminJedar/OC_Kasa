import { Link } from 'react-router-dom'
import Logo from '../Logo/logo'
import './header.css'

function Header() {
  return (
    <div>
      <section className="headerSection">
        <Logo />
        <nav className="headerNav">
          <Link to="/">Accueil</Link>
          <Link to="/a_propos">A propos</Link>
        </nav>
      </section>
    </div>
  )
}

export default Header
