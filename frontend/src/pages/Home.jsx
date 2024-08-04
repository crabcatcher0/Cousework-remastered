import HostelList from '../components/HostelList';
import LocationForm from '../components/LocationForm';
import MainSearch from '../components/MainSearch';
import styles from './Home.module.css'

function Home() {
    return(
        <div className={styles.homepage}>
            <h1>
                <span className={styles.titlePart}>Your Ideal Hostel</span> Few Clicks Away.
            </h1>
            <div className={styles.searchContainer}>
                <MainSearch />
                <br></br>
                <LocationForm />
            </div>
            <div className={styles.hostelListmain}>
                <HostelList />
            </div>
        </div>
    );
}

export default Home;