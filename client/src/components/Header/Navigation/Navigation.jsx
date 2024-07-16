import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isClicked, setIsCliked] = useState(false);
    return (
        <>
            <nav className={styles.navMenu}>
                <ul>
                    {/* Add event that adds class="active" after clicking page */}
                    <li className={isClicked ? 'active' : ''}>
                        <a href="./index.html" onClick={() => setIsCliked(true)}>Home</a>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <a href="./about-us.html" onClick={() => setIsCliked(true)}>Our Blog</a>
                    </li>
                    {/* <li><a href="./class-details.html">WorkOuts</a></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <a href="./healthyRecipes.html" onClick={() => setIsCliked(true)}>Healthy Recipes</a>
                    </li>
                    {/* <li><a href="./coaches.html">Coaches</a></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <a href="./bmi-calculator.html">Bmi calculate</a>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <a href="./contact.html" onClick={() => setIsCliked(true)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};