import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className={styles.navbar}>
            <h2 className={styles.navTitle}>HOSTELDISCOVER</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hostels">Hostels</Link></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Signup</a></li>
            </ul>
        </div>
    );

}

export default Navbar;