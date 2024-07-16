import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import styles from './UserIcon.module.css';

export default function UserIcon() {
    return (
        <ul className={styles.userIcon}>
            <li>
                <a href="#" className={styles.icn}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </a>
                <ul>
                    <li>
                        <a href="register.html">Register</a>
                    </li>
                    <li>
                        <a href="#">Create Article</a>
                    </li>
                    <li>
                        <a href="#">Create Healthy Recipe</a>
                    </li>
                    <li>
                        <a href="#">My Profile</a>
                    </li>
                    <li>
                        <a href="404.html">Logout</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
};