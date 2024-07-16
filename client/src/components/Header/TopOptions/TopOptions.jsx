import styles from './TopOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'; // Correct import statement
import UserIcon from '../../UserIcon/UserIcon';

export default function TopOptions() {
    return (    
        <div className={styles.topOption}>
            <div className={`${styles.toSearch} search-switch`}>
                <i className="fa fa-search" />
            </div>
            <div className={styles.user}>
                <h2 className={styles.welcomeMessage}>
                    Welcome, <span>Guest</span>
                </h2>
                <UserIcon/>
            </div>
        </div>
    );
};
