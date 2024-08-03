import React from 'react';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.footerText}>© 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
