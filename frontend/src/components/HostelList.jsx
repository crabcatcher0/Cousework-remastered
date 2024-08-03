import React from 'react';
import styles from './HostelList.module.css';

function HostelList() {
    const hostels = [
        {
            id: 1,
            name: "Hostel One",
            rating: "★★★★☆",
            description: "A cozy hostel with excellent amenities and a vibrant community.",
            image: "https://via.placeholder.com/300x200?text=Hostel+One",
            location: "Kathmandu, Baneshwor",

        },
        {
            id: 2,
            name: "Hostel Two",
            rating: "★★★☆☆",
            description: "A budget-friendly option with comfortable rooms and friendly staff.",
            image: "https://via.placeholder.com/300x200?text=Hostel+Two",
            location: "Kathmandu, Baneshwor",

        },
        {
            id: 3,
            name: "Hostel Three",
            rating: "★★★★★",
            description: "Luxurious hostel with premium features and great service.",
            image: "https://via.placeholder.com/300x200?text=Hostel+Three",
            location: "Kathmandu, Baneshwor",

        },
        
    ];

    return (
        <div className={styles.hostelListContainer}>
            <h1>Browse Our Hostels</h1>
            <div className={styles.filterButton}>
                <p>Search Hostels By:</p>
                <button className={styles.typebutton}>Click Me</button>
                <button className={styles.locationbutton}>Click Me</button>
                <button className={styles.ratingbutton}>Click Me</button>
            </div>
            <div className={styles.hostelList}>
                {hostels.map(hostel => (
                    <div key={hostel.id} className={styles.hostelCard}>
                        <img
                            src={hostel.image}
                            alt={hostel.name}
                            className={styles.hostelImage}
                        />
                        <h2 className={styles.hostelTitle}>{hostel.name}</h2>
                        <p className={styles.hostelRating}>Rating: {hostel.rating}</p>
                        <p className={styles.hostelDescription}>
                            {hostel.description}
                        </p>
                        <p className={styles.hostelLocation}>{hostel.location}</p>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HostelList;
