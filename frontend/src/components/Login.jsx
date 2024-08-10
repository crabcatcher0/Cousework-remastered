import React from 'react';
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.loginForm}>
            <h1>Login</h1>
            <form>
                <div className={styles.loginformGroup}>
                    <label className={styles.loginLabel} htmlFor="username">Username:</label>
                    <input className={styles.loginInput}
                        type="text"
                        id="username"
                        name="username"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.loginLabel}  htmlFor="password">Password:</label>
                    <input className={styles.loginInput}
                        type="password"
                        id="password"
                        name="password"
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
