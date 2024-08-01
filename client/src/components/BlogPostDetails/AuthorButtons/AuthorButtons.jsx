import styles from './AuthorButtons.module.css';

export default function AuthorButtons() {
    return (
        <div className={styles.authButtons}>
            <Link to="#">
                Edit
                <i class="fas fa-edit" style="color: #ffffff;"></i>
            </Link>
            <Link to="#">
                Delete
                <i class="fa-solid fa-trash" style="color: #fcfcfc;"></i>
            </Link>
        </div>
    );
};