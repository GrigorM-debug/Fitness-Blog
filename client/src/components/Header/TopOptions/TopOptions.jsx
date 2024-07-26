import styles from './TopOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; // Correct import statement
import UserIcon from './UserIcon/UserIcon';
import UserContext from '../../../contexts/userContext';
import { useContext } from 'react';

export default function TopOptions() {
    const {contextData} = useContext(UserContext);
    const userName = contextData.username || 'Guest';

    return (    
        <div className={styles.topOption}>
            {/* <div className={`${styles.toSearch} search-switch`}>
                <i className="fa fa-search" />
            </div> */}
            <div className={styles.user}>
                <h2 className={styles.welcomeMessage}>
                    Welcome, <span>{userName}</span>
                </h2>
                <UserIcon/>
            </div>
        </div>
    );
};
