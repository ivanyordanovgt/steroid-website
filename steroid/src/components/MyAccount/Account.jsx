import {React} from 'react'
import {useForm, submitHandler} from 'react-hook-form'

export const Account = ({showContent}) => {
  const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();

  function checkEmail(value) {

  }
  //submitHandler
  const onSubmit = (formData) => {

  }

  return (
                
    <div id="account" className="content-section">
      <div className="wrapper">
        <form action='#' onSubmit={handleSubmit(onSubmit)}>
            <div className='name-holder'>
              <div className='first-name-holder'>
                <label htmlFor='first-name-input'>First Name *</label>
                <input {...register("firstName", {
                  required: "First name is required!"
                })} type='text' id='first-name-input'></input>
                {errors.firstName && (
                    <div style={{color: "red"}}>{errors.firstName.message}</div>
                )}
              </div>
              <div className='last-name-holder'>
                <label htmlFor='last-name-input'>Last Name *</label>
                <input {...register("lastName", {
                  required: "Last name is required!"
                })} type='text' id='last-name-input'></input>
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
            <input {...register("email", {
                  required: "Email name is required!",
                  validate: (value) => {
                    if(!value.includes('@')){
                      return "Email must contain '@'!";
                    }
                    return true;
                  },
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                })} type='email' id='email-input'></input>
                {errors.email && (
                    <div style={{color: "red"}}>{errors.email.message}</div>
                )}
            <span id='form-span-2'>Password Changes</span>
            <label htmlFor='current-password-input'>Current password (leave blank to leave unchanged)</label>
            <input {...register("currentPassword", {
                  required: "Please enter your old password!",
                })} type="password" id='current-password-input'/>
                {errors.currentPassword && (
                    <div style={{color: "red"}}>{errors.currentPassword.message}</div>
                )}
            <label htmlFor='new-password-input'>New password (leave blank to leave unchanged)</label>
            <input {...register("newPassword", {
                  required: "Please enter your new password!",
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  minLength: {
                    value: 8,
                    message: "New password must have at least 8 characters!"
                  }
                })} type="password" id='new-password-input'/>
                {errors.newPassword && (
                    <div style={{color: "red"}}>{errors.newPassword.message}</div>
                )}
            <label htmlFor='confirm-password-input'>Confirm new password</label>
            <input {...register("confirmPassword", {
                  required: "Please re-enter your new password!",
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                })} type="password" id='confirm-password-input'/>
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