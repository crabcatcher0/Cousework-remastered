import React from 'react';
import styles from './HostelList.module.css';
import imageOne from '../assets/hostel1.jpg';
import imageTwo from '../assets/hostel2.jpeg';
import imageThree from '../assets/hostel3.jpeg';


function HostelList() {


    const hostels = [
        {
            id: 1,
            name: "Hostel One",
            rating: "★★★★☆",
            description: "A cozy hostel with excellent amenities and a vibrant community.",
            image: imageOne,
            location: "Kathmandu, Baneshwor",

        },
        {
            id: 2,
            name: "Hostel Two",
            rating: "★★★☆☆",
            description: "A budget-friendly option with comfortable rooms and friendly staff.",
            image: imageTwo,
            location: "Kathmandu, Baneshwor",

        },
        {
            id: 3,
            name: "Hostel Three",
            rating: "★★★★★",
            description: "Luxurious hostel with premium features and great service.",
            image: imageThree,
            location: "Kathmandu, Baneshwor",

        },
        
    ];

    return (
        <div className={styles.hostelListContainer}>
            <h1 className={styles.hostelListHeading}>Browse Our Hostels</h1>
            <div className={styles.filterButton}>
                <p className={styles.filterParag}>Filter Hostels By:</p>
                <button className={styles.typebutton}>Type</button>
                <button className={styles.locationbutton}>Location</button>
                <button className={styles.ratingbutton}>Rating</button>
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
