import React from 'react';
import styles from './LocationForm.module.css';

function LocationForm() {
    return (
        <div className={styles.LocationForm}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.locationInput}
                    placeholder="Enter location..."
                />
                <button className={styles.searchButton}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default LocationForm;
