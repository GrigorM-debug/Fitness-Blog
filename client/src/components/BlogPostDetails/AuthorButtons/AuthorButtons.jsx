import styles from './AuthorButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AuthorButtons() {
    return (
        <div className={styles.authButtons}>
            <button type='submit'>
                Edit
                <FontAwesomeIcon icon={faEdit} style={{color: "#ffffff", marginLeft: '0.5em'} } />
            </button>
            <button type='submit'>
                Delete
                <FontAwesomeIcon icon={faTrash} style={{marginLeft: '0.5em'}}/>
            </button>
        </div>
    );
};