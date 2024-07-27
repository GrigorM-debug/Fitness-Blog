import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; 
import styles from './UserIcon.module.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../../../contexts/userContext';

export default function UserIcon({
    handleLogoutClick
}) {
    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;
    const isGuest = !isAuthenticated;

    return (
        <ul className={styles.userIcon}>
            <li>
                <Link to="#" className={styles.icn}>
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
                <ul>
                    {isGuest &&    
                        <div>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </div>
                    }

                    {isAuthenticated && 
                        <div>
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
                                <Link to="#" onClick={handleLogoutClick}>Logout</Link>
                            </li>
                        </div>
                    }
                </ul>
            </li>
        </ul>
    );
};