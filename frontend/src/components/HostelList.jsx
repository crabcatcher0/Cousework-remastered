import React, { useEffect, useState } from 'react';
import styles from './HostelList.module.css';
import { BASE_URL } from '../baseUrl/BASE_URL';

function HostelList() {
    const [hostels, setHostels] = useState([]);
    const [selectedType, setSelectedType] = useState(''); 

    useEffect(() => {
        const fetchHostels = async () => {
            try {
                const url = selectedType
                    ? `${BASE_URL}filter/${selectedType}/`  
                    : `${BASE_URL}hostel/`;  

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Error fetching hostels');
                }

                const data = await response.json();
                setHostels(data);
            } catch (error) {
                console.error("Error fetching the hostels!", error);
            }
        };

        fetchHostels();
    }, [selectedType]);  

    const handleTypeFilter = (type) => {
        setSelectedType(type);
    };

    return (
        <div className={styles.hostelListContainer}>
            <h1 className={styles.hostelListHeading}>Browse Our Hostels</h1>
            <div className={styles.filterButton}>
                <p className={styles.filterParag}>Filter Hostels By:</p>
                <button 
                    className={styles.typebutton} 
                    onClick={() => handleTypeFilter('GIRLS')}
                >
                    Girls
                </button>
                <button 
                    className={styles.typebutton} 
                    onClick={() => handleTypeFilter('BOYS')}
                >
                    Boys
                </button>
                <button 
                    className={styles.locationbutton}
                    onClick={() => setSelectedType('')}
                >
                    Clear Filter
                </button>
            </div>
            <div className={styles.hostelList}>
                {hostels.map(hostel => (
                    <div key={hostel.id} className={styles.hostelCard}>
                        <img
                            src={hostel.cover_image}  
                            alt={hostel.hostel_name}
                            className={styles.hostelImage}
                        />
                        <h2 className={styles.hostelTitle}>{hostel.hostel_name}</h2>
                        <p className={styles.hostelDescription}>
                            {hostel.hostel_description}
                        </p>
                        <p className={styles.hostelLocation}>{hostel.main_location}, {hostel.sec_location}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>View Details</button>
                            <button className={styles.button}>Contact</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HostelList;
