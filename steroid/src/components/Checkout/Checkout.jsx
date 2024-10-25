import {React} from 'react'
import "./checkout.css"

export const Checkout = () => {
    return(
        <div className='checkout-container'>
            <span className='title-span'>Checkout</span>
            <div className='main-content'>
                
                <form action="" className='checkout-form' id='details-form'>
                    <div className='details-holder'>
                        <h1>Your Details</h1>
                        <label htmlFor="first-name-input" placeholder="First Name">First Name *</label>
                        <input type="text" id='first-name-input'/>
                        <label htmlFor="first-name-input">Last Name *</label>
                        <input type="text" id='first-name-input' placeholder='Last Name'/>
                        <label htmlFor="company-name-input">Company Name (optional)</label>
                        <input type="text" id='first-name-input' placeholder='Company Name'/>
                        <label htmlFor="country-region-input">Country *</label>
                        <input type="text" id='country-input' placeholder='Country'/>
                        <label htmlFor="state-input">County *</label>
                        <input type="text" id="state-input" placeholder='County'/>
                        <label htmlFor="street-address-input">Street Address *</label>
                        <input type="text" id='street-address-input' placeholder='House number and street name'/>
                        <label htmlFor="post-code-input">Post Code *</label>
                        <input type="number" id='post-code-input'/>
                        <label htmlFor="email-input">Email *</label>
                        <input type="email" id='email-input' placeholder='Email'/>
                    </div>
                    <div className='order-holder'>
                        <h1>Your Order</h1>
                    </div>
                    <div className='additional-info-holder'>
                        <h1>Additional Information</h1>
                        <label htmlFor="additional-info-input">Order Notes (optional)</label>
                        <input type="text" id='additional-info-input' placeholder='Notes about your order, e.g. special notes for delivery.'/>
                    </div>
                    <div className='coupon-holder'>
                        <span>Have a coupon? <a href='#'>Click here to enter your coupon!</a></span>
                    </div>
                    <div className='crypto-submit-holder'>
                        <div className='crypto'>
                            <input type="radio" id='bitcoin'/>
                            <label htmlFor="bitcoin">Bitcoin</label>
                            <input type="radio" id='other'/>
                            <label htmlFor="other">Other</label>
                        </div>
                        <button id='submit-order-button' onClick={console.log("click")}>Submit Order</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout