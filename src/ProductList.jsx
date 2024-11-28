import ProductCard from './ProductCard';
import React from 'react';
import pianta1 from './pianta1.jpeg';
import pianta2 from './pianta2.jpeg';

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Pianta 1', price: 10, image: pianta1 },
    { id: 2, name: 'Pianta 2', price: 15, image: pianta2 },
  ];
  

  return (
    <div className="product-list">
      <h2>Le Nostre Piante.</h2>
      <div className="categories">
        <div className="category">
          <h3>Categoria 1</h3>
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
