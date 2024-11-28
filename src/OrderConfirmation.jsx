import React from 'react';
import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="order-confirmation">
      <h2>Grazie per il tuo ordine!</h2>
      <p>Il tuo ordine è stato ricevuto e sarà processato a breve.</p>
      <Link to="/products">
        <button>Continua a fare acquisti.</button>
      </Link>
    </div>
  );
}

export default OrderConfirmation;
