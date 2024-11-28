import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ProductList from './ProductList';
import Cart from './Cart';
import CheckoutPage from './CheckoutPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Funzione per aggiornare la quantità di un prodotto
  const updateItemQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Calcola il totale del carrello
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Funzione di completamento del checkout
  const completeCheckout = () => {
    alert("Ordine completato con successo!");
    setCartItems([]); // Resetta il carrello
  };

  // Calcola il numero totale di articoli nel carrello qui
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Header cartItemsCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateItemQuantity={updateItemQuantity}
              total={calculateTotal()}
            />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} total={calculateTotal()} completeCheckout={completeCheckout} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
