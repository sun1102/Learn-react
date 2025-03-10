import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom';

import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    let [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    console.log('kya mila', onlineStatus)

    // if no dependecy array => useEffect is called on every render
    // if dependecy array is empty = [] => useEffect is called on initial render (just once)
    // if depenecy aray is [btnName] => called everytime btnName is updated
    useEffect(() => {

    }, []); // [] - dependency array
    return  (
        <header className='header'>
            <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    {onlineStatus ? <div className="online"></div> : <div className="offline"></div>}
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact-us'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;
