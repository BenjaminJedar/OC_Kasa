import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import FicheLogement from './pages/Fiche_logement/fiche_logement';
import APropos from './pages/A_propos/a_propos';
import Error from './pages/Error/error';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
