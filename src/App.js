import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/auth/Register';
import Cart from './pages/cart/Cart';

import Home from './pages/home/Home';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login"></Route>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
