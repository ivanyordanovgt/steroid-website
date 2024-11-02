import {React, useState} from 'react';
import{z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

const AddPayment = ({onSave, onCancel}) => {
    const [newPayment, setNewPayment] = useState('');

    const creditCardSchema = z.object({
        cardNumber: z
          .string()
          .regex(/^\d{16}$/, {message: "Card number must be 16 digits"}),
        expirationDate: z
          .string()
          .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, {message: "Expiration date must be in MM/YY format"}),
        cvv: z
          .string()
          .regex(/^\d{3,4}$/, {message: "CVV must be 3 or 4 digits"}),
        cardholderName: z
          .string()
          .min(2, {message: "Cardholder name must be at least 2 characters"})
          .max(50, {message: "Cardholder name can't exceed 50 characters"})
      });

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(creditCardSchema)
    });
    
    const onSubmit = (formData) => {
        onSave(newPayment);
        setNewPayment('');
    }

    return(
        <div className=''>
            <div className='main-content'>
                
                <form className='checkout-form' id='details-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='details-holder'>
                        <h1>Adding Payment</h1>
                        <div className='card-credentials-holder'>
                            <label htmlFor='card-number-input'>Card Number *</label>
                            <input {...register("cardNumber", {
                            })} type='text' id='card-number-input' placeholder='XXXX XXXX XXXX XXXX'></input>
                            {errors.cardNumber && (
                                <div style={{color: "red"}}>{errors.cardNumber.message}</div>
                            )}
                            <label htmlFor='expiration-date-input'>Expiration Date *</label>
                            <input {...register("expirationDate", {
                            })} type='text' id='expiration-date-input' placeholder='MM/YY'></input>
                            {errors.expirationDate && (
                                <div style={{color: "red"}}>{errors.expirationDate.message}</div>
                                    )}
                            <label htmlFor='cvv-input'>CVV *</label>
                            <input {...register("cvv", {
                            })} type='text' id='cvv-input' placeholder='XXX'></input>
                            {errors.cvv && (
                                <div style={{color: "red"}}>{errors.cvv.message}</div>
                            )}
                            <label htmlFor='card-holder-input'>Card Holder *</label>
                            <input {...register("cardholderName", {
                            })} type='text' id='card-holder-input' placeholder='JOHN DOE'></input>
                            {errors.cardholderName && (
                                <div style={{color: "red"}}>{errors.cardholderName.message}</div>
                                    )}
                        </div>
                        <br />
                        <button id='save-payment-button' type='submit' disabled={isSubmitting}>{isSubmitting ? "Saving card..." : "Add card"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddPayment