import React from 'react'

export const Account = ({showContent}) => {
  // const [firstName, setFirstName] = useState('');
  // const [LastName, setLasttName] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [firstName, setFirstName] = useState('');
  
  // const handleFirstName = (e) => {
  //     setFirstName(e.target.value);
  // }
  // const handleLastName = (e) => {
  //     setLastName(e.target.value);
  // }
  return (
                
    <div id="account" class="content-section">
      <div className="wrapper">
        <form action='#' onSubmit="#">
            <div className='name-holder'>
              <div className='first-name-holder'>
                <label htmlFor='first-name-input'>First Name *</label>
                <input type='text' id='first-name-input'></input>
              </div>
              <div className='last-name-holder'>
                <label htmlFor='last-name-input'>Last Name *</label>
                <input type='text' id='last-name-input'></input>
              </div>
            </div>
            <label htmlFor='display-name-input'>Display Name *</label>
            <input type="text" id='display-name-input'></input>
            <span id='form-span-1'>(This will be how your name will be displayed in the account section and in reviews)</span>
            <label htmlFor='email-input'>Email *</label>
            <input type='email' id='email-input'></input>
            <span id='form-span-2'>Password Changes</span>
            <label htmlFor='current-password-input'>Current password (leave blank to leave unchanged)</label>
            <input type="password" id='current-password-input'/>
            <label htmlFor='new-password-input'>New password (leave blank to leave unchanged)</label>
            <input type="password" id='new-password-input'/>
            <label htmlFor='confirm-password-input'>Confirm new password</label>
            <input type="password" id='confirm-password-input'/>
            <br />
            <button type='submit'>Save changes</button>
            
        </form>
      </div>
    </div>
  )
}

export default Account