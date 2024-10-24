import React, { useState, useEffect, useRef } from 'react';
import './shopping-cart.css';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = ({ cartItems, setShoppingCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null); // Create a ref for the cart panel
  const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';
  const navigate = useNavigate();
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (id) => {
    const filteredItems = cartItems.filter(item => item.id !== id);
    setShoppingCartItems(filteredItems);
  };
  
  const onViewCartHandler = () => {
    navigate('/check-cart')
  }

  const handleClickOutside = (event) => {
    // Check if the click was outside the cart panel
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the cart panel
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getSubTotal = () => {
    let price = 0;

    for (let item of cartItems) {
      price += Number(item.price);
    }

    return price;
  }

  return (
    <div className="shopping-cart">
      <div className='content'>
      <button className="cart-toggle" onClick={toggleCart}>
        <img src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png' alt="Cart" /> ({cartItems.length})
      </button>

      <div className={`cart-panel ${isOpen ? 'open' : ''}`} ref={cartRef}>
        {cartItems.length > 0 ? (
          <div>
            <ul className="cart-items">
              {cartItems.map(item => (
                <>              
                <li key={item.id} className="cart-item">
                <img src={testImageUrl}></img>

                  <h1>{item.title}</h1>
                  <p>${item.price}</p>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                </li>
                </>
              ))}
            </ul>

              <div className='sub-total'>
               <h1><span>Subtotal:</span> ${getSubTotal()}</h1>
              </div>

              <div className='checkout-buttons'>
                <button onClick={onViewCartHandler}> View cart</button>
                <button className='checkout'> Checkout </button>
              </div>
            </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default ShoppingCart