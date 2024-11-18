 const PaymentMethods = ({paymentProps, onAddPaymentClick}) => {
    
    return(
        <div className="wrapper" id='payment-wrapper'>
            
            {paymentProps && paymentProps.length > 0 ? (
                <ul className='payments-list'>
                {paymentProps.map((payment, index) => {
                  return <li key={index}><a href='#'>{payment}</a></li>})}
                </ul>) :(
                    <span id='payment-span'>No saved payment methods found.</span>)}
            <br></br>
            <button id='add-payment-button' onClick={onAddPaymentClick}>Add payment method</button>
        </div>
    )
}
export default PaymentMethods