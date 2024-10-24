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

    function upperFirstLetter(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    const navElements = {
        'Dashboard': <Dashboard showContent={showContent} userProps={accountProps.user}/>,
        'Orders': <Orders showContent={showContent} orderProps={accountProps.orders}/>,
        'Addresses': <Addresses showContent={showContent}/>,
        'Payment': <Payment showContent={showContent}/>,
        'Account': <Account showContent={showContent}/>
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
                           return <li onClick={() => showContent(key)} className={activeSection===key ? 'hovered': ''}>{key}</li>
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
