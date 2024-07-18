import { useState } from 'react';
import styles from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

export default function Navigation() {
    const [isClicked, setIsCliked] = useState(false);
    return (
        <>
            <nav className={styles.navMenu}>
                <ul>
                    {/* Add event that adds class="active" after clicking page */}
                    <li className={isClicked ? 'active' : ''}>
                        <NavLink to="/" onClick={() => setIsCliked(true)}>Home</NavLink>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <NavLink to="/blog" onClick={() => setIsCliked(true)}>Our Blog</NavLink>
                    </li>
                    {/* <li><NavLink to="./class-details.html">WorkOuts</NavLink></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <NavLink to="/healthyRecipes" onClick={() => setIsCliked(true)}>Healthy Recipes</NavLink>
                    </li>
                    {/* <li><NavLink to="./coaches.html">Coaches</NavLink></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <NavLink to="/BMICalculator">Bmi Calculator</NavLink>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <NavLink to="/contact" onClick={() => setIsCliked(true)}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};