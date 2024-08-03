import React from 'react';
import styles from './MainSearch.module.css';

function MainSearch() {
    return (
        <div className={styles.mainSearch}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search..."
                />
                <button className={styles.searchButton}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default MainSearch;
