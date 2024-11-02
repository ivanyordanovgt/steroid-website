import {Link} from 'react-router-dom'
import  {React, useState, useContext} from 'react'
import './my-account.css'
import Dashboard from './Dashboard';
import Orders from './Orders';
import Addresses from './Addresses';
import Payment from './Payment';
import Account from './Account';
import { toUpperFirstLetter } from '../../core/stringUtils';
import { UserContext } from '../../App';

export const MyAccount = ({accountProps}) => {
    const [activeSection, setActiveSection] = useState('dashboard');

    const users = useContext(UserContext)

    const showContent = (section) => {
        setActiveSection(section);
    }

    const navElements = {
        'dashboard': <Dashboard showContent={showContent} usersProps={accountProps.user}/>,
        'orders': <Orders ordersProps={accountProps.orders}/>,
        'addresses': <Addresses addressesProps={accountProps.address}/>,
        'payment': <Payment paymentProps={accountProps.payment}/>,
        'account': <Account/>
    }

    const logout = () => {
        console.log("log out");
    }

    return(
            <div className='my-account-container'>
                <span className='title-span'>My Account</span>
                <div className='main-content'>
                    <div className='sidebar'>
                        <ul>
                            {Object.keys(navElements).map((key) => {
                            return <li id={key} key={key} onClick={() => showContent(key)} className={activeSection===key ? 'hovered': ''}>{toUpperFirstLetter(key)}</li>
                            })}
                            
                            <li id='logout' key={'logout'} onClick={logout}><Link to={"../login"}>Logout</Link></li>
                        </ul>
                    </div>
                    <div className='content'>
                        {navElements[activeSection]}
                    </div>
                </div>  
            </div>
    )
}
