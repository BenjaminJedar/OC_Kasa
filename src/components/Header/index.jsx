import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../Logo'
import './header.scss'

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px dashed black;
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
`

const HeaderNav = styled.nav`
  display: flex;
  margin-left: 100px;
  align-items: center;
`

function Header() {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderNav>
          <Link to="/">Accueil</Link>
          <Link to="/a_propos">A propos</Link>
        </HeaderNav>
      </HeaderSection>
    </div>
  )
}

export default Header
