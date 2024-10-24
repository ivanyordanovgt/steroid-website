import React from 'react'

const Account = ({showContent}) => {
  return (
                
    <div id="account" class="content-section">
    <div className="wrapper">
        <h1>it works</h1>
        <form action='#' onSubmit="#">
            <label>First Name *</label>
            <input type='text'></input>
            <label>Last Name *</label>
            <input type='text'></input>
            <label>Display Name *</label>
            <input type="text"></input>
            <span>This will be how your name will be displayed in the account section and in reviews</span>
            <label>Email *</label>
            <input type='email'></input>
            <span style={{fontWeight:"bold"}}>Password Changes</span>
            <label>Current password (leave blank to leave unchanged)</label>
            <label>New password (leave blank to leave unchanged)</label>
            <label>Confirm new password</label>
            <button type='submit'>Save changes</button>
        </form>
    </div>
</div>
  )
}

export default Account