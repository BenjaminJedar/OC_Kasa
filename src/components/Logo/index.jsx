import styled from 'styled-components'
import K_logo from '../../assets/K_kasa.svg'
import A1_logo from '../../assets/A1_kasa.svg'
import S_logo from '../../assets/S_kasa.svg'
import A2_logo from '../../assets/A2_kasa.svg'

const LogoDiv = styled.div`
  display: flex;
  flex-direction: raw;
`

const LogoK = styled.img`
  margin-right: 4px;
`
const LogoS = styled.img`
  margin-left: 4px;
`
const LogoA2 = styled.img`
  margin-left: 4px;
`

function Logo() {
  return (
    <LogoDiv>
      <LogoK src={K_logo} alt="Lettre K logo Kasa" />
      <img src={A1_logo} alt="Lettre A1 logo Kasa" />
      <LogoS src={S_logo} alt="Lettre S logo Kasa" />
      <LogoA2 src={A2_logo} alt="Lettre A2 logo Kasa" />
    </LogoDiv>
  )
}

export default Logo
