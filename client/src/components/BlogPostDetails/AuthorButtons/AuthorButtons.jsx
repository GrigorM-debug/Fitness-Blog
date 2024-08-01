import styles from './AuthorButtons.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AuthorButtons() {
    return (
        <div className={styles.authButtons}>
            <Link to="#">
                Edit
                <FontAwesomeIcon icon={faEdit} style={{color: "#ffffff", marginLeft: '0.5em'} } />
            </Link>
            <Link to="#">
                Delete
                <FontAwesomeIcon icon={faTrash} style={{marginLeft: '0.5em'}}/>
            </Link>
        </div>
    );
};