import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import CheckCart from "./components/ShoppingCart/CheckCart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ShopProducts } from "./components/Home/ShopProducts";
import { Contact } from "./components/Contact";
import { MyAccount } from "./components/MyAccount/MyAccount";
function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const addToCart = (item) => {
    setShoppingCartItems((prevItems) => [...prevItems, item]);
  }

  return (
    <Router>
      <div className='top-message'>
        <h1>BUY 3 GET 1 STANDARD HGH CODE 'BUY3' - THIS WEEK ONLY!</h1>
      </div>

      <div className='title'>
        <div className='nav'>
          <a href='/products'>Shop products</a>
          <a href='#'>Quality control</a>
          <a href='#'>Verify</a>
          <a href='#'>Help Centre</a>
          <a href='/my-account'>My account</a>
          <ShoppingCart cartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems}/> {/* Corrected prop usage */}
        </div>
        <img src='https://kits4less.com/wp-content/uploads/2023/10/k4l_logo_white.svg' alt="Logo" />
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ShopProducts addToCart={addToCart}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/check-cart" element={<CheckCart shoppingCartItems={shoppingCartItems}/>} />
        <Route path="/my-account" element={<MyAccount userProps={{user: 'testUser'}}/>} user={"user"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
