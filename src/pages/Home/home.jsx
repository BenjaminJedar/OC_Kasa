import './home.css';
import bg_title_home from '../../assets/bg_title_home.jpg';
import LocationList from '../../components/LocationList/locationList';

function Home() {
  return (
    <div className="Home_page">
      <section className="title_section">
        <h1 className="title">Chez vous, partout et ailleurs</h1>
        <img
          src={bg_title_home}
          alt="background du titre"
          className="bg_title"
        />
      </section>
      <section className="location_section">
        <LocationList />
      </section>
    </div>
  );
}

export default Home;
