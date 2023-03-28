import React from 'react';
import './Header.css'
import Images from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header-container'>
            <img src={Images} alt="" />
            <div className='header-info'>
                <a href="/other">Other</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;