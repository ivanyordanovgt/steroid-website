import React from 'react'

const Orders = () => {
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