import styles from './Navbar.module.css';

function Navbar() {
    return(
        <div className={styles.navbar}>
            <h2 className={styles.navTitle}>HOSTEL</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Hostels</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Signup</a></li>
            </ul>
        </div>
    );

}

export default Navbar;