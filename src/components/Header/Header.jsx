import React, { useContext } from 'react';
import './Header.css'
import Images from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { UserContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const { logout, user } = useContext(UserContext);

    const handelLogout = () => {
        logout()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div className='header-container'>
            <img src={Images} alt="" />
            <div className='header-info'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <><Link to = '/login'><button onClick={handelLogout} className='logout'>Logout</button></Link></> : <><Link to="/login">Login</Link>
                    <Link to="/register">Register</Link></>
                }
            </div>
        </div>
    );
};

export default Header;