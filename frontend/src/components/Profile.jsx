import React from 'react';
import styles from './Profile.module.css';

function Profile() {
    const user = {
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
    };

    return (
        <div className={styles.profile}>
            <h1 className={styles.profileHead}>Profile</h1>
            <div className={styles.userInfo}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
            </div>
            <button type="submit" className={styles.profButton}>Logout</button>
        </div>
    );
}

export default Profile;
