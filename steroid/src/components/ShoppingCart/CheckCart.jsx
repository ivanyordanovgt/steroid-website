import React, { useState } from 'react'
import './check-cart.css'
import myImage from '../../17.PNG'

export const CheckCart = ({shoppingCartItems, setShoppingCartItems}) => {
    const totalPrice = 335;
  const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';

  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const handleQuantityChange = (e, item) => {
    const newQuantity = parseInt(e.target.value, 10); // Get the new quantity from input
  
    const reworkedList = shoppingCartItems.map((product) => {
      if (product.id === item.id) {
        // Update the quantity for the matched item
        return { ...product, count: newQuantity };
      }
      return product; // Return other items unchanged
    });

  
    setShoppingCartItems(reworkedList); // Update state with the new list
  };

  function calcPriceTotal() {
    let total = 0;
    for (let item of shoppingCartItems) {
      total += Number(item.price) * item.count
    }

    return total;
   }

  function removeItemFromCart(id) {
    const updatedCart = shoppingCartItems.filter(item => item.id !== id);
    setShoppingCartItems(updatedCart);
  }
  
    
  return (
    <div class='check-cart'>
        <h1>Cart</h1>
        <div className='cart-products' style={{marginTop: '1vh'}}>
            <div className='cart-header'>
                <h2 style={{marginLeft: '1vw'}}>Product</h2>
                <h3> </h3>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Subtotal</h2>
            </div>
            {shoppingCartItems.map((item) => {
                return <div className='cart-product'>
                <h1 onClick={() => removeItemFromCart(item.id)}><span>×</span></h1>
                <img src={testImageUrl}></img>
                <h2><span>{item.title}</span></h2>  
                <div className='space-between-title'></div>
                <h2>${item.price}</h2>
                <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                step="1"
                value={item.count}
                onChange={(e) => handleQuantityChange(e, item)} // Pass the event and item correctly
                /><h2>${item.price}</h2>
                </div>
            })}
        </div>     
        <div className='check-cart-checkout'>
          <h1 id='title'>Card Totals</h1>

          <div className='header'>
            <h2>Subtotal</h2>
            <h3>${calcPriceTotal()}.00</h3>
          </div>

          <div className='shipping'>
            <h2>Shipping</h2>
            <div>
              <h4>ECONT Fast shipping: $5.00</h4>
              <h4>Shipping to: <span>Sofia</span></h4>
              <a href='#'>Change address</a>
            </div>

          </div>

          <div className='total'>
            <h2>Total</h2>
            <h3>${calcPriceTotal()+5}.00</h3>
          </div>

        <button>Procceed to checkout</button>
        </div>

        <div className='coupon-input' style={{marginTop: `${40+12*(shoppingCartItems.length-1)}vh`}}>
            <input placeholder='Coupon code'></input>
            <button>Apply coupon</button>
        </div>
    </div>
  )
}

export default CheckCart