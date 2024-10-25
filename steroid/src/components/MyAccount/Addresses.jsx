import React from 'react'

const Addresses = ({showContent}) => {
  return (
    
    <div id="addresses" class="content-section">
        <div className="wrapper">
            <span>The following addresses will be used on the checkout page by default.</span>
            <h1>Billing address</h1>
            <p><a href='#' id='add-billing-address-link'>Add Billing address</a></p>
            <h2 id='address-h2'>You have not set up any addresses as of yet.</h2>
        </div>
    </div>
  )
}

export default Addresses