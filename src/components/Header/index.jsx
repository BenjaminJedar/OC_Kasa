import { Link } from 'react-router-dom'

function Header() {
  return (
    <section>
      <p>Logo Kasa</p>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a_propos">A propos</Link>
      </nav>
    </section>
  )
}

export default Header
