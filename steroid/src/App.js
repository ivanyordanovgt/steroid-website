import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import CheckCart from "./components/ShoppingCart/CheckCart";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ShopProducts } from "./components/Home/ShopProducts";
import { Contact } from "./components/Common/Contact";
import { Footer } from "./components/Common/Footer";
import  {MyAccount}  from "./components/MyAccount/MyAccount";
import { Checkout } from "./components/Checkout/Checkout";
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import shopCartIMG from './shop_icon_2.png';

export const UserContext = createContext();

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUser] = useState([]);

  const addToCart = (item) => {
    setShoppingCartItems((prevItems) => [...prevItems, item]);
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
}

  // const userData = db.get('user/data')
  const userData = {
    user: 'testUser', 
    orders: [],
    addresses: [],
    payment: []
  }

  return (
    <UserContext.Provider value={users}>
        <Router>
        <div className="app-container">
          <div className='top-message'>
            <h1>BUY 3 GET 1 STANDARD HGH CODE 'BUY3' - THIS WEEK ONLY!</h1>
          </div>

          <div className='title'>
            <div className="regular-nav">
              <div className="title-img">
                <a href="/"><img src='https://kits4less.com/wp-content/uploads/2023/10/k4l_logo_white.svg' alt="Logo" /></a>
              </div>
              <div className='nav'>
                  <div className="buttons-holder">
                      <ShoppingCart cartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems}/> {/* Corrected prop usage */}
                      <button className="hamburger" onClick={toggleMenu}>☰</button>
                  </div>
                  <nav className={`header-nav ${menuOpen ? 'closed' : ''}`}>
                      <ul className="nav-list">
                          <li><a href='/products'>Shop Products</a></li>
                          <li><a href='#'>Quality Control</a></li>
                          <li><a href='#'>Verify</a></li>
                          <li><a href='#'>Help Centre</a></li>
                          <li><a href='/my-account'>My Account</a></li>
                      </ul>
                  </nav>
              </div>
            </div>
            <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-list">
                        <li><a href='/products'>Shop Products</a></li>
                        <li><a href='#'>Quality Control</a></li>
                        <li><a href='#'>Verify</a></li>
                        <li><a href='#'>Help Centre</a></li>
                        <li><a href='/my-account'>My Account</a></li>
                    </ul>
            </nav>
            
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
    </UserContext.Provider>
    
  );
}

export default App;
