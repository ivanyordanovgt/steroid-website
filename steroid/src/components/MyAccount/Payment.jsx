import {React, useState} from 'react'
import AddPayment from './AddPayment';
import PaymentMethods from './PaymentMethods';

const Payment = ({paymentProps}) => {
  const [paymentSection, setPaymentSection] = useState('payment-methods');
  const [paymentMethods, setPaymentMethods] = useState(paymentProps);
  
  const showPaymentForm = () => {
    setPaymentSection('add-payment');
  }

  const handleSaveForm = (newPayment) => {
    setPaymentSection('payment-methods');
    setPaymentMethods([...paymentMethods, newPayment]);
  }

  const handleCancel = () => {
    setPaymentSection('payment-methods');
  }

  return (
                       
    <div id="payment" className="content-section" >
      {paymentSection === 'payment-methods' ? (
        <PaymentMethods paymentProps={paymentMethods} onAddPaymentClick={showPaymentForm}/>
      ) : (
        <AddPayment onSave={handleSaveForm} onCancel={handleCancel}/>
      )}
    </div>
  )
}
export default Payment