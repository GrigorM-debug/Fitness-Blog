import styles from './LikeButton.module.css';

export default function LikeButton() {
    return (
        <button className={styles.likeButton}>
            Like
            <i className="fa-regular fa-thumbs-up"></i>
        </button>
    );
};