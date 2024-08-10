import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../baseUrl/BASE_URL'

function Login() {
    const [formData, setFormData] = useState({
        username: '',
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
            const response = await fetch(`${BASE_URL}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'), // Add CSRF token for security
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Redirect to the dashboard or another page after successful login
                navigate('/profile');
            } else {
                const data = await response.json();
                setError(data.detail || 'Invalid username or password');
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        }
    };

    // Function to get the CSRF token from cookies
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.loginformGroup}>
                    <label className={styles.loginLabel} htmlFor="username">Username:</label>
                    <input
                        className={styles.loginInput}
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.loginLabel} htmlFor="password">Password:</label>
                    <input
                        className={styles.loginInput}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <p className={styles.forgotPass}>Forgot Password? <a href='#'>Click here.</a></p>
                <button type="submit" className={styles.logButton}>Login</button>
            </form>
        </div>
    );
}

export default Login;
