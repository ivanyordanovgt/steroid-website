import {React} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import "./checkout.css";

export const Checkout = () => {
    const checkoutSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        companyName: z.string(),
        country: z.string(),
        county: z.string(),
        postCode: z.string().length(4, {message: "Please enter a valid Post code!"}),
        streetAddress: z.string(),
        email: z.string().email()
    })

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(checkoutSchema)
    });
    
    const onSubmit = (formData) => {

    }
    return(
        <div className='checkout-container'>
            <span className='title-span'>Checkout</span>
            <div className='main-content'>
                
                <form className='checkout-form' id='details-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='details-holder'>
                        <h1>Your Details</h1>
                        <div className='name-holder'>
                            <div className='first-name-holder'>
                                <label htmlFor='first-name-input'>First Name *</label>
                                <input {...register("firstName", {
                                })} type='text' id='first-name-input' placeholder='John'></input>
                                {errors.firstName && (
                                    <div style={{color: "red"}}>{errors.firstName.message}</div>
                                )}
                            </div>
                            <div className='last-name-holder'>
                                <label htmlFor='last-name-input'>Last Name *</label>
                                <input {...register("lastName", {
                                    })} type='text' id='last-name-input' placeholder='Doe'></input>            
                                {errors.lastName && (
                                    <div style={{color: "red"}}>{errors.lastName.message}</div>
                                )}
                            </div>
                        </div>
                        <label htmlFor="company-name-input">Company Name (optional)</label>
                        <input {...register("companyName",)} type="text" id='company-name-input' placeholder='Company Name'/>
                                {errors.companyName && (
                                    <div className='text-red-500'>{errors.companyName.message}</div>
                                )}
                        <label htmlFor="country-input">Country *</label>
                        <input {...register("country", {
                                    })} type="text" id='country-input' placeholder='Country'/>
                                    {errors.country && (
                                        <div style={{color: "red"}}>{errors.country.message}</div>
                                    )}
                        <label htmlFor="state-input">County *</label>
                        <input {...register("county", {
                                    })} type="text" id="state-input" placeholder='County'/>
                                    {errors.county && (
                                        <div style={{color: "red"}}>{errors.county.message}</div>
                                    )}
                        <label htmlFor="street-address-input">Street Address *</label>
                        <input {...register("streetAdress", {
                                    required: "Street address is required!"
                                    })} type="text" id='street-address-input' placeholder='House number and street name'/>
                                    {errors.streetAddress && (
                                        <div style={{color: "red"}}>{errors.streetAddress.message}</div>
                                    )}
                        <label htmlFor="post-code-input">Post Code *</label>
                        <input {...register("postCode")} type="text" id='post-code-input'/>
                                    {errors.postCode && (
                                        <div style={{color: "red"}}>{errors.postCode.message}</div>
                                    )}
                        <label htmlFor="email-input">Email *</label>
                        <input {...register("email")} type="email" id='email-input' placeholder='Email'/>
                                    {errors.email && (
                                        <div style={{color: "red"}}>{errors.email.message}</div>
                                    )}
                    </div>
                    <div className='order-holder'>
                        <h1>Your Order</h1>
                        <div className='order-grid'>
                            <div className="grid-item" id='i1'>Product</div>
                            <div className="grid-item" id='i2'>Anadrol 50mg Bottle of 100 × 2</div>
                            <div className="grid-item" id='i3'>Subtotal</div>
                            <div className="grid-item" id='i4'>$130.00</div>
                            <div className="grid-item" id='i5'>Subtotal</div>
                            <div className="grid-item" id='i6'>$130.00</div>
                            <div className="grid-item" id='i7'>Shipping</div>
                            <div className="grid-item" id='i8'>USPS Fast Shipping: <b>20$</b> <span>USPS Priority Mail</span></div>
                            <div className="grid-item" id='i9'>Total</div>
                            <div className="grid-item" id='i10'><b>$150.00</b></div>
                        </div>
                    </div>
                    <div className='additional-info-holder'>
                        <h1>Additional Information</h1>
                        <label htmlFor="additional-info-input">Order Notes (optional)</label>
                        <input {...register("additionalInfo", {maxLength: 200})} type="text" id='additional-info-input' placeholder='Notes about your order, e.g. special notes for delivery.'/>
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
                        <button id='submit-order-button' type='submit' disabled={isSubmitting}>{isSubmitting ? "Submitting order..." : "Submit order"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
