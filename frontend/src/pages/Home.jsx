import styles from './Home.module.css'

function Home() {
    return(
        <div className={styles.homepage}>
            <h1>Ideal Hostel Few Clicks Away</h1>
            <form className={styles.searchForm}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Home;