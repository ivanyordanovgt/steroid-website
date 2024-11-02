import {React} from 'react';
import{z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';

const AddAddress = ({onSave, onCancel}) => {
    const [newAddress, setNewAddress] = useState('');

    const checkoutSchema = z.object({
        firstName: z.string().min(1, {message: "First name is required!"}),
        lastName: z.string().min(1, {message: "Last name is required!"}),
        companyName: z.string(),
        country: z.string().min(1, {message: "Country is required!"}),
        county: z.string().min(1, {message: "County is required!"}),
        postCode: z.string().min(1, {message: "Post code is required!"}).length(4, {message: "Please enter a valid Post code!"}),
        streetAddress: z.string().min(1, {message: "Address is required!"}),
        email: z.string().email().min(1, {message: "Email is required!"})
    })

    const users = useContext(UserContext);

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(checkoutSchema)
    });
    
    const onSubmit = (formData) => {
        onSave(newAddress);
        setNewAddress('');
    }
    
    return(
        <div className=''>
            <div className='main-content'>
                
                <form className='checkout-form' id='details-form' onSubmit={handleSubmit(onSubmit)}>
                    <div className='details-holder'>
                        <h1>Billing Address</h1>
                        <div className='name-holder'>
                            <div className='first-name-holder'>
                                <label htmlFor='first-name-input'>First Name *</label>
                                <input {...register("firstName", {
                                    required: "First name is required!"
                                })} type='text' id='first-name-input' placeholder='John'></input>
                                {errors.firstName && (
                                    <div style={{color: "red"}}>{errors.firstName.message}</div>
                                )}
                            </div>
                            <div className='last-name-holder'>
                                <label htmlFor='last-name-input'>Last Name *</label>
                                <input {...register("lastName", {
                                    required: "Last name is required!"
                                    })} type='text' id='last-name-input' placeholder='Doe'></input>            
                                {errors.lastName && (
                                    <div style={{color: "red"}}>{errors.lastName.message}</div>
                                )}
                            </div>
                        </div>
                        <label htmlFor="company-name-input">Company Name (optional)</label>
                        <input {...register("companyName")} type="text" id='company-name-input' placeholder='Company Name'/>
                                {errors.companyName && (
                                    <div className='text-red-500'>{errors.companyName.message}</div>
                                )}
                        <label htmlFor="country-input">Country *</label>
                        <input {...register("country",{
                                    required: "Country is required!"
                                    })} type="text" id='country-input' placeholder='Country'/>
                                    {errors.country && (
                                        <div style={{color: "red"}}>{errors.country.message}</div>
                                    )}
                        <label htmlFor="state-input">County *</label>
                        <input {...register("county",{
                                    required: "State is required!"
                                    })} type="text" id="state-input" placeholder='County'/>
                                    {errors.county && (
                                        <div style={{color: "red"}}>{errors.county.message}</div>
                                    )}
                        <label htmlFor="street-address-input">Street Address *</label>
                        <input {...register("streetAddress", {
                                    required: "Address is required!"
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
                        <input {...register("email", {required: "Email is required!"})} type="email" id='email-input' placeholder='Email'/>
                                    {errors.email && (
                                        <div style={{color: "red"}}>{errors.email.message}</div>
                                    )}
                        <br />
                        <button id='save-address-button' type='submit' disabled={isSubmitting}>{isSubmitting ? "Saving address..." : "Save address"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddAddress