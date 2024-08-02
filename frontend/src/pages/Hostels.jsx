import React from 'react';
import styles from './Hostels.module.css'; 
import imageOne from '../assets/hostel1.jpg';
import imageTwo from '../assets/hostel2.jpeg';
import imageThree from '../assets/hostel3.jpeg';
import imageFour from '../assets/hostel4.jpeg';


const hostels = [
    {
        id: 1,
        name: "Hostel A",
        image: imageOne, 
        description: "A cozy hostel with great amenities.",
        location: "Kathmandu, Baneshwor",
        rating: 4 
    },
    {
        id: 2,
        name: "Hostel B",
        image: imageTwo, 
        description: "A modern hostel located in the city center.",
        location: "Kathmandu, Baneshwor",
        rating: 3
    },
    {
        id: 3,
        name: "Hostel C",
        image: imageThree, 
        description: "A budget-friendly hostel with a friendly atmosphere.",
        location: "Kathmandu, Baneshwor",
        rating: 5
    },
    {
        id: 4,
        name: "Hostel D",
        image: imageFour, 
        description: "A budget-friendly hostel with a friendly atmosphere.",
        location: "Kathmandu, Baneshwor",
        rating: 4
    }
];

function Hostels() {
    return (
        <div className={styles.hostelList}>
            <h1>Popular Hostels</h1>
            <div className={styles.hostelFilter}>
                <p>Browse Hostels By:</p>
                <div className={styles.filterBtn}>
                <button className={styles.filterTypeBtn}>Type</button>
                <button className={styles.filterLocationBtn}>Location</button>
                <button className={styles.fillerRatingBtn}>Ratings</button>
                </div>
            </div>
            <ul className={styles.hostelContainer}>
                {hostels.map(hostel => (
                    <li key={hostel.id} className={styles.hostelItem}>
                        <img src={hostel.image} alt={hostel.name} className={styles.hostelImage} />
                        <div className={styles.hostelDetails}>
                            <div className={styles.hostelHeader}>
                                <h2 className={styles.hostelName}>{hostel.name}</h2>
                                <div className={styles.hostelRating}>
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={index < hostel.rating ? styles.filledStar : styles.emptyStar}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className={styles.hostelDescription}>{hostel.description}</p>
                            <p className={styles.hostelLocation}>{hostel.location}</p>
                            <button className={styles.hostelButton}>View Details</button>
                            <button className={styles.hostelBtn}>Contact</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hostels;
