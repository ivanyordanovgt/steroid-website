import React, { useContext } from 'react'
import { UserContext } from '../../App'

const Dashboard = ({showContent, usersProps}) => {
  const users = useContext(UserContext);

  return (
    <div id="dashboard" className="content-section">
        <div className='wrapper'>
            <span>Hello {usersProps.user}! Not {usersProps.user}? <a href='#' onClick={() => showContent('logout')} className='dashboard-link'>Log out.</a></span>
            <p>From your account dashboard you can view your 
                <a href='#' onClick={() => showContent('orders')} className='dashboard-link'> recent orders</a>, 
                manage your <a href='#' onClick={() => showContent('addresses')} className='dashboard-link'>
                shipping and billing addresses</a>, and <a href='#' onClick={() => showContent('account')} className='dashboard-link'>
                    edit your password and account details.</a></p>
        </div>
    </div>
  )
}
export default  Dashboard