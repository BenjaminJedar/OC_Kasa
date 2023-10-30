import './collapse.css';
import { useState } from 'react';
import vector from '../../assets/Vector.svg';

function Collapse({ titleValue, contentValue }) {
  const [isCollapseOpen, setCollapseIsOpen] = useState(true);

  return (
    <div className="accordeon">
      <div
        className="title_accordeon"
        onClick={() =>
          isCollapseOpen ? setCollapseIsOpen(false) : setCollapseIsOpen(true)
        }
      >
        <h2>{titleValue}</h2>
        <img
          src={vector}
          alt="vector"
          className={isCollapseOpen ? '' : 'inverse'}
        />
      </div>
      {isCollapseOpen && <p className="p_accordeon">{contentValue}</p>}
    </div>
  );
}

export default Collapse;
