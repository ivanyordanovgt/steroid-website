import  {React, useState} from 'react'
import './my-account.css'

const MyAccount = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const showContent = (section) => {
        setActiveSection(section);
    }

    return(
        <div className='my-account-container'>
            <div className='side-bar'>
                <ul>
                    <li><a href="#" onClick={() => showContent('dashboard')}>Dashboard</a></li>
                    <li><a href="#" onClick={() => showContent('orders')}>Orders</a></li>
                    <li><a href="#" onClick={() => showContent('addresses')}>Addresses</a></li>
                    <li><a href="#" onClick={() => showContent('payment')}>Payment Methods</a></li>
                    <li><a href="#" onClick={() => showContent('account')}>Account Details</a></li>
                    <li><a href="#" onClick={() => showContent('logout')}>Logout</a></li>
                 </ul>
            </div>
            <div className='my-account-content'>
                {activeSection === 'dashboard' && (<div id="dashboard" class="content-section">
                    <span>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</span>
                </div>)}

                {activeSection === 'orders' && (<div id="orders" class="content-section" style={{display: "none"}}>Your Orders will be displayed here.
                </div>)}

                {activeSection === 'addresses' && (<div id="addresses" class="content-section" style={{display: "none"}}>Manage your Addresses here.
                </div>)}
                
                {activeSection === 'orders' && (<div id="payment" class="content-section" style={{display: "none"}}>Update your Payment Methods here.
                </div>)}
                
                {activeSection === 'addresses' && (<div id="account" class="content-section" style={{display: "none"}}>Edit your Account Details here.
                </div>)}
                
                {activeSection === 'addresses' && (<div id="logout" class="content-section" style={{display: "none"}}>You have successfully logged out.
                </div>)}
            </div>
        </div>
    )
}

export default MyAccount