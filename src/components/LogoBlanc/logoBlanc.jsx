import K_logo_blanc from '../../assets/k_kasa_blanc.svg';
import A1_logo_blanc from '../../assets/A1_kasa_blanc.svg';
import S_logo_blanc from '../../assets/S_kasa_blanc.svg';
import A2_logo_blanc from '../../assets/A2_kasa_blanc.svg';
import './logoBlanc.css';

function LogoBlanc() {
  return (
    <div className="logoDiv">
      <img src={K_logo_blanc} alt="Lettre K logo Kasa" className="kBlanc" />
      <img src={A1_logo_blanc} alt="Lettre A1 logo Kasa" className="A1Blanc" />
      <img src={S_logo_blanc} alt="Lettre S logo Kasa" className="SBlanc" />
      <img src={A2_logo_blanc} alt="Lettre A2 logo Kasa" className="A2Blanc" />
    </div>
  );
}

export default LogoBlanc;
