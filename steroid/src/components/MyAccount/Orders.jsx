import React from 'react'
import { redirect } from 'react-router-dom';

const Orders = ({showContent}) => {
  return (
    
    <div id="orders" className="content-section">
        <div className='wrapper' id='orders-wrapper'>
            <span>No orders have been made yet!</span>
            <button onClick={() => window.location.href = "./products"}>Browse products</button>
        </div>
    </div>
  )
}

export default Orders