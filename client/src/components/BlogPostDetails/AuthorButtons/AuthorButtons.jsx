import styles from './AuthorButtons.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AuthorButtons() {
    return (
        <div className={styles.authButtons}>
            <Link to="#">
                Edit
                <i className="fas fa-edit" style={{color: '#ffffff'}}></i>
            </Link>
            <Link to="#">
                Delete
                {/* <i className="fa-solid fa-trash" style={{color: '#fcfcfc'}}></i> */}
                <i class="fa-solid fa-eraser"></i>
            </Link>
        </div>
    );
};