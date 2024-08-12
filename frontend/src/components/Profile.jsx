import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../baseUrl/BASE_URL';

function Profile() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('access_token');

            if (!token) {
                setError('No access token found. Please log in.');
                navigate('/login');
                return;
            }

            try {
                const response = await fetch(`${BASE_URL}show_user/`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else if (response.status === 401) {
                    setError('You are not authenticated. Please log in.');
                    navigate('/signup');
                } else {
                    setError('Failed to load user data');
                }
            } catch (err) {
                setError('Something went wrong. Please try again later.');
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/signup');
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
