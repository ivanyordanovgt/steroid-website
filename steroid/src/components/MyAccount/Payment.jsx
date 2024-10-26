import {React, useState} from 'react'

const Payment = ({showContent}) => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [displayContent, setDisplayContent] = useState("none");
  const [displayButton, setDisplayButton] = useState("box");
  
  const handleAddPayment = (p) => {
    setPaymentMethods(paymentMethods, [...paymentMethods, p]);
  }
  const handleChangeDisplay = () => {

  }

  return (
                       
    <div id="payment" className="content-section" >
        <div className="wrapper" id='payment-wrapper'>
          <span id='payment-span'>No saved payment methods found.</span>
          <br></br>
          <button className={displayButton} id='add-payment-button' onClick={handleChangeDisplay}>Add payment method</button>
          <div className={displayContent}></div>
        </div>
    </div>
  )
}

export default Payment