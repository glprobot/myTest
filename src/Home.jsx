import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Aggiungi il tuo CSS per l'immagine di sfondo.

function Home() {
  return (
    <div className="home">
      <div className="background-image">
        <h1>Nome dell'Azienda</h1>
        <p>Descrizione dell'azienda che offre piante d'appartamento uniche e bellissime.</p>
        <Link to="/products">
          <button>Get Started New</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
