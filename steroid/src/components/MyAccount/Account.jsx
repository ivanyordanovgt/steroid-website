import {React} from 'react';
import{z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm, submitHandler} from 'react-hook-form';

export const Account = ({showContent}) => {
  const accountSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    displayName: z.string(),
    email: z.string().email(),
    currentPassword: z.string(),
    newPassword: z.string()
    .min(8, { message: "New password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string()
  }).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  })

  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    resolver: zodResolver(accountSchema)
  });

  //submitHandler
  const onSubmit = (formData) => {

  }

  return (
                
                /* TODO: Implement users*/
    <div id="account" className="content-section">
      <div className="wrapper">
        <form action='#' onSubmit={handleSubmit(onSubmit)}>
            <div className='name-holder'>
              <div className='first-name-holder'>
                <label htmlFor='first-name-input'>First Name *</label>
                <input {...register("firstName")} type='text' id='first-name-input'></input>
                {errors.firstName && (
                    <div style={{color: "red"}}>{errors.firstName.message}</div>
                )}
              </div>
              <div className='last-name-holder'>
                <label htmlFor='last-name-input'>Last Name *</label>
                <input {...register("lastName")} type='text' id='last-name-input'></input>
                {errors.lastName && (
                    <div style={{color: "red"}}>{errors.lastName.message}</div>
                )}
              </div>
            </div>
            <label htmlFor='display-name-input'>Display Name *</label>
            <input {...register("displayName", {
                  required: "Display name is required!"
                })} type="text" id='display-name-input'></input>
                {errors.dispayName && (
                    <div style={{color: "red"}}>{errors.displayName.message}</div>
                )}
            <span id='form-span-1'>(This will be how your name will be displayed in the account section and in reviews)</span>
            <label htmlFor='email-input'>Email *</label>
            <input {...register("email")} type='email' id='email-input'></input>
                {errors.email && (
                    <div style={{color: "red"}}>{errors.email.message}</div>
                )}
            <span id='form-span-2'>Password Changes</span>
            <label htmlFor='current-password-input'>Current password (leave blank to leave unchanged)</label>
            <input {...register("currentPassword")} type="password" id='current-password-input'/>
                {errors.currentPassword && (
                    <div style={{color: "red"}}>{errors.currentPassword.message}</div>
                )}
            <label htmlFor='new-password-input'>New password (leave blank to leave unchanged)</label>
            <input {...register("newPassword")} type="password" id='new-password-input'/>
                {errors.newPassword && (
                    <div style={{color: "red"}}>{errors.newPassword.message}</div>
                )}
            <label htmlFor='confirm-password-input'>Confirm new password</label>
            <input {...register("confirmPassword")} type="password" id='confirm-password-input'/>
                {errors.confirmPassword && (
                    <div style={{color: "red"}}>{errors.confirmPassword.message}</div>
                )}
            <br />
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Submiting changes..." : "Save changes"}</button>
            
        </form>
      </div>
    </div>
  )
}

export default Account