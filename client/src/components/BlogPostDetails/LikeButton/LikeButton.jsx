import styles from './LikeButton.module.css';

export default function LikeButton() {
    return (
        <button type="submit" className={styles.likeButton}>Like
            <i class="fa-regular fa-thumbs-up"></i>
        </button>
    );
};