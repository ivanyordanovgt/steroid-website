 const PaymentMethods = ({paymentProps, onAddPaymentClick}) => {
    
    return(
        <div className="wrapper" id='payment-wrapper'>
            <span id='payment-span'>No saved payment methods found.</span>
            <br></br>
            <button id='add-payment-button' onClick={onAddPaymentClick}>Add payment method</button>
        </div>
    )
}
export default PaymentMethods