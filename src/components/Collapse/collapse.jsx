import './collapse.css';
import { useState } from 'react';
import vector from '../../assets/Vector.svg';

function Collapse({ titleValue, contentValue }) {
  const [isCollapseOpen, setCollapseIsOpen] = useState(false);
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
      {isCollapseOpen && (
        <div className="content_accordeon">
          {isCollapseOpen && Array.isArray(contentValue)
            ? contentValue.map((content) => (
                <p className="p_accordeon" key={Math.random()}>
                  {content}
                </p>
              ))
            : isCollapseOpen && <p className="p_accordeon">{contentValue}</p>}
        </div>
      )}
    </div>
  );
}

export default Collapse;
