import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import icona from './icon.jpeg'; // Importa l'immagine correttamente

const Header = ({ cartItemsCount }) => {
  return (
    <header>
      <div className="logo">Plant Shop</div>
      <div className="cart">
        <Link to="/cart">
          {/* Correzione della sintassi per il valore di src. */}
          <img src={icona} alt="Cart" />
          {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header; // Esportazione di default
