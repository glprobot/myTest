import React, { useState } from 'react';
 // ..
function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? 'Aggiunto' : 'Aggiungi al carrello'}
      </button>
    </div>
  );
}

export default ProductCard;
