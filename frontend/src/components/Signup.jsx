import React, { useState } from 'react';
import styles from './Signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../baseUrl/BASE_URL';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        password: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(`${BASE_URL}register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                const data = await response.json();
                setError(data.detail || 'Registration failed');
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className={styles.signUp}>
            <h1>Register</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.signformGroup}>
                    <label className={styles.signlabel} htmlFor="username">Username:</label>
                    <input
                        className={styles.signInput}
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.signformGroup}>
                    <label className={styles.signlabel} htmlFor="firstName">First Name:</label>
                    <input
                        className={styles.signInput}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.signformGroup}>
                    <label className={styles.signlabel} htmlFor="lastName">Last Name:</label>
                    <input
                        className={styles.signInput}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.signformGroup}>
                    <label className={styles.signlabel} htmlFor="password">Password:</label>
                    <input
                        className={styles.signInput}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <p className={styles.alreadyLink}>Already have an account? <Link to='/login'>Login</Link></p>
                <button type="submit" className={styles.signButton}>Register</button>
            </form>
        </div>
    );
}

export default Signup;
