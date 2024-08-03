import React from 'react';
import styles from './EnquiryForm.module.css';

function EnquiryForm() {
    return (
        <div className={styles.formContainer}>
            <h2>Enquiry Form</h2>
            <form className={styles.enquiryForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default EnquiryForm;
