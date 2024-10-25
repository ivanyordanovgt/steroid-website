import React from 'react'
import './check-cart.css'

export const CheckCart = ({shoppingCartItems}) => {
    const totalPrice = 335;
  const testImageUrl = 'https://kits4less.com/wp-content/uploads/2024/05/standard-closed.png';

  return (
    <div className='check-cart-container'>
        <span className='title-span'>Cart</span>
        <div className='cart-products'>
            <div className='notice-container'></div>
            {shoppingCartItems.map((item) => {
                return <div className='cart-product'>
                <h1><span>X</span></h1>
                <img src={testImageUrl} alt='item-image'></img>
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
                <input type="number" id="quantity" name="quantity" min="1" max="10" step="1" value="1"/>
                <h2>${item.price}</h2>
                </div>
            })}
        </div>

    </div>
  )
}

export default CheckCart