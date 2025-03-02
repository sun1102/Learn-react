import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    let [btnName, setBtnName] = useState('Login');
    return  (
        <header className='header'>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </header>
    )
}

export default Header;
