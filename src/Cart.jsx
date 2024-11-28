import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart({ cartItems, updateItemQuantity, total }) {
  const navigate = useNavigate(); // Hook per la navigazione programmatica

  // Funzione per navigare alla pagina di checkout
  const goToCheckout = () => {
    navigate('/checkout'); // Reindirizza alla pagina di checkout
  };

  return (
    <div className="cart-page">
      <h2>Il Tuo Carrello</h2>

      {/* Elenco degli articoli nel carrello */}
      {cartItems.length === 0 ? (
        <p>Il carrello è vuoto.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Miniatura del prodotto */}
              <img src={item.image} alt={item.name} className="cart-item-thumbnail" />

              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Prezzo unitario: €{item.price}</p>

                {/* Controlli per la quantità */}
                <div className="quantity-controls">
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <p>Totale per questo articolo: €{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Riepilogo del carrello */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <p><strong>Totale dell'ordine: €{total}</strong></p>

          {/* Pulsante per completare il checkout */}
          <button onClick={goToCheckout}>Completa il Checkout</button>

          {/* Link per tornare ai prodotti ..*/}
          <Link to="/products">
            <button>Continua gli acquisti</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
