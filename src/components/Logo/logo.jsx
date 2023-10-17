import K_logo from '../../assets/K_kasa.svg'
import A1_logo from '../../assets/A1_kasa.svg'
import S_logo from '../../assets/S_kasa.svg'
import A2_logo from '../../assets/A2_kasa.svg'
import './logo.css'

function Logo() {
  return (
    <div className="logoDiv">
      <img src={K_logo} alt="Lettre K logo Kasa" className="logoK" />
      <img src={A1_logo} alt="Lettre A1 logo Kasa" className="logoA1" />
      <img src={S_logo} alt="Lettre S logo Kasa" className="logoS" />
      <img src={A2_logo} alt="Lettre A2 logo Kasa" className="logoA2" />
    </div>
  )
}

export default Logo
