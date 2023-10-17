import './home.css'
import bg_title_home from '../../assets/bg_title_home.jpg'

const logements = require('../../data/logements.json')
console.log(logements)

function Home() {
  return (
    <div className="Home_page">
      <section className="title_section">
        <h2 className="title">Chez vous, partout et ailleurs</h2>
        <img
          src={bg_title_home}
          alt="background du titre"
          className="bg_title"
        />
      </section>
      <section className="location_section">
        <div className="card">
          <img src={logements[0].pictures[0]} alt="logement" />
          <p className="location_title">{logements[0].title}</p>
        </div>
      </section>
    </div>
  )
}

export default Home
