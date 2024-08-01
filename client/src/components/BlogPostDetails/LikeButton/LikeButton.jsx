import styles from './LikeButton.module.css';

export default function LikeButton({
    likeButtonHandler,
    isLiked,
    isLikeDisabled
}) {
    return (
        <div className={styles.parentContainer}>
            <button 
            className={`${styles.likeButton} ${isLikeDisabled ? styles.disabled : ''}`} 
            onClick={likeButtonHandler}
            >
                Like
                <i className={`${isLiked ? 'fa-solid' : 'fa-regular'} fa-thumbs-up`}></i>
            </button>
        </div>
    );
};