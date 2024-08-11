import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../baseUrl/BASE_URL';

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}user/${id}/`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': window.CSRF_TOKEN,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    setError('Failed to load user data');
                }
            } catch (err) {
                setError('Something went wrong. Please try again later.');
            }
        };

        fetchUserData();
    }, [id]);

    const handleLogout = () => {
        fetch(`${BASE_URL}logout/`, {
            method: 'POST',
            credentials: 'include',
        }).then(() => {
            navigate('/login'); 
        });
    };

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.profile}>
            <h1 className={styles.profileHead}>Profile</h1>
            <div className={styles.userInfo}>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>First Name:</strong> {user.first_name}</p>
                <p><strong>Last Name:</strong> {user.last_name}</p>
            </div>
            <button type="button" onClick={handleLogout} className={styles.profButton}>Logout</button>
        </div>
    );
}

export default Profile;
