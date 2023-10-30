import imgAPropos from '../../assets/a_propos_img.jpeg';
import './a_propos.css';
import Collapse from '../../components/Collapse/collapse';
const data = require('../../data/a_propos.json');

function APropos() {
  return (
    <div className="a_propos">
      <header className="header_img">
        <img
          src={imgAPropos}
          alt="background du titre"
          className="a_propos_img"
        />
      </header>

      <section className="content_section">
        {data.map((index) => (
          <Collapse
            key={Math.random()}
            titleValue={data[0].title}
            contentValue={data[0].content}
          />
        ))}
      </section>
    </div>
  );
}

export default APropos;
