import  {React, useState} from 'react'
import './my-account.css'
import Dashboard from './Dashboard';
import Orders from './Orders';
import Addresses from './Addresses';
import Payment from './Payment';
import Account from './Account';

export const MyAccount = ({accountProps}) => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const showContent = (section) => {
        setActiveSection(section);
    }

    const navElements = {
        'dashboard': <Dashboard showContent={showContent} userProps={accountProps.user}/>,
        'orders': <Orders showContent={showContent} orderProps={accountProps.orders}/>,
        'addresses': <Addresses showContent={showContent}/>,
        'payment': <Payment showContent={showContent}/>,
        'account': <Account showContent={showContent}/>
    }

    const logout = () => {

    }

    return(
        <div className='my-account-container'>
            <span className='title-span'>My Account</span>
            <div className='main-content'>
                <div className='sidebar'>
                    <ul>
                        {Object.keys(navElements).map((key) => {
                           return <li onClick={() => showContent(key)} className={activeSection===key ? 'greenclassname': ''}>{key}</li>
                        })}
                        
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
