import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAuth } from '../auth_context/AuthContext.jsx';

function Navbar() {
    const { isAuthenticated } = useAuth();

    return (
        <div className={styles.navbar}>
            <h2 className={styles.navTitle}>HOSTELDISCOVER</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hostels">Hostels</Link></li>
                <li><a href="#">Contact</a></li>
                {!isAuthenticated && <li><Link to="/signup">Signup</Link></li>}
                {isAuthenticated && <li><Link to="/profile">My Account</Link></li>}
            </ul>
        </div>
    );
}

export default Navbar;
