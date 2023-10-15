//import '../styles/Home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  return (
    <div className="Home">
      <Header />
      <p>
        LA PAGE QUE TU CHERCHE N'EXISTE PAS.
        <br /> (On appelle ca une erreur 404 dans le millieu)
      </p>
      <Footer />
    </div>
  )
}

export default Error
