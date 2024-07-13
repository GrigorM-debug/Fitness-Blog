import {styles} from './Navigation.module.css';

export default function Navigation() {
    return (
        <>
            <nav className={styles.navMenu}>
                <ul>
                    {/* Add event that adds class="active" after clicking page */}
                    <li className="active">
                        <a href="./index.html">Home</a>
                    </li>
                    <li>
                        <a href="./about-us.html">Articles</a>
                    </li>
                    {/* <li><a href="./class-details.html">WorkOuts</a></li> */}
                    <li>
                        <a href="./healthyRecipes.html">Healthy Recipes</a>
                    </li>
                    {/* <li><a href="./coaches.html">Coaches</a></li> */}
                    <li>
                        <a href="#">Pages</a>
                    <ul className="dropdown">
                        <li>
                            <a href="./about-us.html">About us</a>
                            </li>
                        <li>
                            <a href="./class-timetable.html">Classes timetable</a>
                        </li>
                        <li>
                            <a href="./bmi-calculator.html">Bmi calculate</a>
                        </li>
                        <li>
                            <a href="./coaches.html">Our team</a>
                        </li>
                        <li>
                            <a href="./gallery.html">Gallery</a>
                        </li>
                        <li>
                            <a href="./blog.html">Our blog</a>
                        </li>
                        <li>
                            <a href="./404.html">404</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <a href="./contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};