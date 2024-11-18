import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { ProductDetails } from "./components/Home/ProductDetails";

export const UserContext = createContext();

function App() {
  // Initialize shoppingCartItems from localStorage if available
  const [shoppingCartItems, setShoppingCartItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppingCartItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(undefined);

  const addToCart = (item) => {
    setShoppingCartItems((prevItems) => {
      // Create a new array where all items have a `count` property
      const updatedPrevItems = prevItems.map((item) => ({
        ...item,
        count: item.count || 1,
      }));
    
      // Add the new item with `count` initialized to 1
      const updatedItems = [...updatedPrevItems, { ...item, count: 1 }];
    
      // Save updated items to localStorage
      localStorage.setItem('shoppingCartItems', JSON.stringify(updatedItems));
    
      return updatedItems;
    });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const getUser = async () => {
    try {
      const res = await fetch("https://progkitten.pythonanywhere.com/users/profile", {
        method: "GET",
        credentials: 'same-origin'
      });
      const resJSON = await res.json();
      setUser(resJSON);
      console.log(`---> SET USER: `, resJSON);
    } catch (err) {
      console.log(`---< ERROR: `, err);
    }
  };

  useEffect(() => {
    // Fetch user profile on component mount
    getUser();

    // Sync localStorage data on component mount
    const savedItems = localStorage.getItem('shoppingCartItems');
    if (savedItems) {
      setShoppingCartItems(JSON.parse(savedItems));
    }
  }, []);

  const userData = {
    user: 'testUser',
    orders: [],
    addresses: [],
    payment: []
  };

  const productsData = {
    '1': "yes"
  };

  return (
    <UserContext.Provider value={user}>
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
                  <ShoppingCart cartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems} />
                  <button className="hamburger" onClick={toggleMenu}>☰</button>
                </div>
                <nav className={`header-nav ${menuOpen ? 'closed' : ''}`}>
                  <ul className="nav-list">
                    <li><a href='/products'>Shop Products</a></li>
                    <li><a href='#'>Quality Control</a></li>
                    <li><a href='#'>Verify</a></li>
                    <li><a href='#'>Help Centre</a></li>
                    <li><a href='/my-account'>{user?.email ? "My Account" : "Login/Register"}</a></li>
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
                <li><a href='/my-account'>{user ? "My Account" : "Login/Register"}</a></li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ShopProducts addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/check-cart" element={<CheckCart shoppingCartItems={shoppingCartItems} setShoppingCartItems={setShoppingCartItems} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/my-account" element={<MyAccount accountProps={userData} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductDetails product={productsData} addToCart={addToCart} />} />
            <Route path="*" element={<div>Page Not Found</div>} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
