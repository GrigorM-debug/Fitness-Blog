import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const location = useLocation();
    // const history = useHistory();
    const [activePath, setActivePath] = useState(location.pathname);
    
    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const handleNavLinkClick = (path) => {
        setActivePath(path);
    };

    return (
        <nav className={styles.navMenu}>
            <ul>
                <li className={activePath === '/' ? styles.active : ''}>
                    <NavLink to="/" onClick={() => handleNavLinkClick('/')}>Home</NavLink>
                </li>
                <li className={activePath === '/blog' ? styles.active : ''}>
                    <NavLink to="/blog" onClick={() => handleNavLinkClick('/blog')}>Our Blog</NavLink>
                </li>
                <li className={activePath === '/healthyRecipes' ? styles.active : ''}>
                    <NavLink to="/healthyRecipes" onClick={() => handleNavLinkClick('/healthyRecipes')}>Healthy Recipes</NavLink>
                </li>
                <li className={activePath === '/BMICalculator' ? styles.active : ''}>
                    <NavLink to="/BMICalculator" onClick={() => handleNavLinkClick('/BMICalculator')}>BMI Calculator</NavLink>
                </li>
                <li className={activePath === '/contact' ? styles.active : ''}>
                    <NavLink to="/contact" onClick={() => handleNavLinkClick('/contact')}>Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}
