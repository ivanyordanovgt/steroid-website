import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import CheckCart from "./components/ShoppingCart/CheckCart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ShopProducts } from "./components/Home/ShopProducts";
import { Contact } from "./components/Common/Contact";
import { Footer } from "./components/Common/Footer";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import shopCartIMG from './shop_icon_2.png';
function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  const addToCart = (item) => {
    setShoppingCartItems((prevItems) => [...prevItems, item]);
  }
  // const userData = db.get('user/data')
  const userData = {
    user: 'testUser', 
    orders: ['testOrder1', 'testOrder2']
  }

  return (
    <Router>
      <div className="app-container">
        <div className='top-message'>
          <h1>BUY 3 GET 1 STANDARD HGH CODE 'BUY3' - THIS WEEK ONLY!</h1>
        </div>

        <div className='title'>
          <div className='nav'>
              <nav className="header-nav">
                  <ul className="nav-list">
                      <li><a href='/products'>Shop Products</a></li>
                      <li><a href='#'>Quality Control</a></li>
                      <li><a href='#'>Verify</a></li>
                      <li><a href='#'>Help Centre</a></li>
                      <li><a href='/my-account'>My Account</a></li>
                  </ul>
                </nav>
                <ShoppingCart cartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems}/> {/* Corrected prop usage */}
                <button class="hamburger" onclick="toggleMenu()">☰</button>
          </div>
          <a href="/"><img src='https://kits4less.com/wp-content/uploads/2023/10/k4l_logo_white.svg' alt="Logo" /></a>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<ShopProducts addToCart={addToCart}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/check-cart" element={<CheckCart shoppingCartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems}/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/my-account" element={<MyAccount accountProps={userData}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
