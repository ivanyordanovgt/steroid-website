import React from 'react'

const Payment = ({showContent}) => {
  return (
                       
    <div id="payment" class="content-section" >
        <div className="wrapper" id='payment-wrapper'>
            <span id='payment-span'>No saved payment methods found.</span>
            <br></br>
            <button id='add-payment-button'>Add payment method</button>
        </div>
    </div>
  )
}

export default Payment