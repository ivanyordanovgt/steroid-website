import React from 'react'
import './check-cart.css'

export const CheckCart = ({shoppingCartItems}) => {
    const totalPrice = 335;
  const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';

  return (
    <div>
        <h1>Cart !</h1>
        <div className='cart-products'>
            {shoppingCartItems.map((item) => {
                return <div className='cart-product'>
                <h1><span>X</span></h1>
                <img src={testImageUrl}></img>
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <input type="number" id="quantity" name="quantity" min="1" max="10" step="1" value="1"/>
                <h2>${item.price}</h2>
                </div>
            })}
        </div>
        <div className='cart-totals'>
            <div className='sub-total'>
                <h1>Subtotal</h1>
                <h1>${totalPrice}</h1>
            </div>
        </div>

        <div className='Coupon'>
            <h1>Coupon: 35off</h1>
            <h1>-$35.00</h1>
        </div>
        
        <div className='shipping'>
            <h1>ECONT: <span>$20.00</span></h1>
        </div>

        <div className='total'>
            <h1>Total</h1>
            <h2>$320.00</h2>
        </div>

        <button> Proceed to Checkout</button>

    </div>
  )
}

export default CheckCart