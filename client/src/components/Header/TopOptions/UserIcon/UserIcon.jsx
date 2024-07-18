import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import styles from './UserIcon.module.css';
import {Link} from 'react-router-dom';

export default function UserIcon() {
    return (
        <ul className={styles.userIcon}>
            <li>
                <Link to="#" className={styles.icn}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/createPost">Create Post</Link>
                    </li>
                    <li>
                        <Link to="/createHealthyRecipe">Create Healthy Recipe</Link>
                    </li>
                    <li>
                        <Link to="/myProfile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/404">Logout</Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
};