import  {React, useState} from 'react'
import './my-account.css'
import Dashboard from './Dashboard';
import Orders from './Orders';
import Addresses from './Addresses';
import Payment from './Payment';
import Account from './Account';

export const MyAccount = ({userProps}) => {
    const [activeSection, setActiveSection] = useState('dashboard');
    // const [firstName, setFirstName] = useState('');
    // const [LastName, setLasttName] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [firstName, setFirstName] = useState('');

    const showContent = (section) => {
        setActiveSection(section);
        document.getElementById(activeSection).style.display = "block";
    }

    const navElements = {
        'dashboard': <Dashboard showContent={showContent} userProps={userProps}/>,
        'orders': <Orders showContent={showContent}/>,
        'addresses': <Addresses showContent={showContent}/>,
        'payment': <Payment showContent={showContent}/>,
        'account': <Account showContent={showContent}/>
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
                    {navElements[activeSection]}
                </div>
            </div>  
        </div>
    )
}
