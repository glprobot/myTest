import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutPage({ cartItems, total, completeCheckout }) {
  return (
    <div className="checkout-page">
      <h2>Riepilogo dell'Ordine</h2>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} className="checkout-item-thumbnail" />
            <div className="checkout-item-details">
              <h4>{item.name}</h4>
              <p>Prezzo unitario: €{item.price}</p>
              <p>Quantità: {item.quantity}</p>
              <p>Totale: €{item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="checkout-summary">
        <p><strong>Totale dell'ordine: €{total}</strong></p>
        <button onClick={completeCheckout}>Completa il Checkout</button>
      </div>

      {/* Link per tornare al carrello o ai prodotti.. */}
      <div className="checkout-links">
        <Link to="/cart">
          <button>Indietro al carrello</button>
        </Link>
        <Link to="/products">
          <button>Continua a fare acquisti</button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutPage;
