import { useState } from 'react';
import styles from './Navigation.module.css';
import {Link} from 'react-router-dom';

export default function Navigation() {
    const [isClicked, setIsCliked] = useState(false);
    return (
        <>
            <nav className={styles.navMenu}>
                <ul>
                    {/* Add event that adds class="active" after clicking page */}
                    <li className={isClicked ? 'active' : ''}>
                        <Link to="/" onClick={() => setIsCliked(true)}>Home</Link>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <Link to="/blog" onClick={() => setIsCliked(true)}>Our Blog</Link>
                    </li>
                    {/* <li><Link to="./class-details.html">WorkOuts</Link></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <Link to="/healthyRecipes" onClick={() => setIsCliked(true)}>Healthy Recipes</Link>
                    </li>
                    {/* <li><Link to="./coaches.html">Coaches</Link></li> */}
                    <li className={isClicked ? 'active' : ''}>
                        <Link to="/BMICalculator">Bmi Calculator</Link>
                    </li>
                    <li className={isClicked ? 'active' : ''}>
                        <Link to="/contact" onClick={() => setIsCliked(true)}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};