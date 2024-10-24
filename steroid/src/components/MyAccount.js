import  {React, useState} from 'react'
import './my-account.css'
import { redirect } from 'react-router-dom';

const MyAccount = (Props) => {
    const [activeSection, setActiveSection] = useState('dashboard');
    // const [firstName, setFirstName] = useState('');
    // const [LastName, setLasttName] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [firstName, setFirstName] = useState('');

    const showContent = (section) => {
        setActiveSection(section);
        document.getElementById(activeSection).style.display = "block";
    }

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const handleLastName = (e) => {
    //     setLastName(e.target.value);
    // }
    const logout = () => {

    }

    return(
        <div className='my-account-container'>
            <span className='title-span'>My Account</span>
            <div className='main-content'>
                <div className='sidebar'>
                    <ul>
                        <li onClick={() => showContent('dashboard')}>Dashboard</li>
                        <li onClick={() => showContent('orders')}>Orders</li>
                        <li onClick={() => showContent('addresses')}>Addresses</li>
                        <li onClick={() => showContent('payment')}>Payment Methods</li>
                        <li onClick={() => showContent('account')}>Account Details</li>
                        <li onClick={() => logout}>Logout</li>
                    </ul>
                </div>
                <div className='content'>
                    {activeSection === 'dashboard' && (<div id="dashboard" class="content-section">
                        <div className='wrapper'>
                            <span>Hello {Props.user}! Not {Props.user}? <a href='#' onClick={() => showContent('logout')} className='dashboard-link'>Log out.</a></span>
                            <p>From your account dashboard you can view your <a href='#' onClick={() => showContent('orders')} className='dashboard-link'> recent orders</a>, manage your <a href='#' onClick={() => showContent('addresses')} className='dashboard-link'>shipping and billing addresses</a>, and <a href='#' onClick={() => showContent('account')} className='dashboard-link'>edit your password and account details.</a></p>
                        </div>
                    </div>)}

                    {activeSection === 'orders' && (<div id="orders" class="content-section" style={{display: "none"}}>
                        <div className='wrapper' id='orders-wrapper'>
                            <span>No orders have been made yet!</span>
                            <button onClick={redirect('/products')}>Browse products</button>
                        </div>
                    </div>)}

                    {activeSection === 'addresses' && (<div id="addresses" class="content-section" style={{display: "none"}}>
                        <div className="wrapper">
                            <span>The following addresses will be used on the checkout page by default.</span>
                            <h1>Billing address</h1>
                            <p><a href='#'>Add Billing address</a></p>
                            <h2 id='address-h2'>You have not set up any addresses as of yet.</h2>
                        </div>
                    </div>)}
                    
                    {activeSection === 'payment' && (<div id="payment" class="content-section" style={{display: "none"}}>
                        <div className="wrapper" id='payment-wrapper'>
                            <span id='payment-span'>No saved payment methods found.</span>
                            <br></br>
                            <button id='add-payment-button'>Add payment method</button>
                        </div>
                    </div>)}
                    
                    {activeSection === 'account' && (<div id="account" class="content-section" style={{display: "none"}}>
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
                    </div>)}
                </div>
            </div>  
        </div>
    )
}

export default MyAccount