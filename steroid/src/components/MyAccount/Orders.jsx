import React from 'react'

const Orders = (orderProps) => {
  return (
    <div id="orders" className="content-section">
        <div className='wrapper' id='orders-wrapper'>
            {orderProps && orderProps.length > 0 ? (
            <ul className='orders-list'>
                {orderProps.map((order, index) => {
                  return <li key={index}><a href='#'>{order}</a></li>})}
            </ul>
            ) : (
              <span id="payment-span">No saved payment methods found.</span>
            )
            }
            <button onClick={() => window.location.href = "./products"}>Browse products</button>
        </div>
    </div>
  )
}
export default Orders