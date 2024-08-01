import styles from './LikeButton.module.css';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                {/* <i className={`${isLiked ? 'fa-solid' : 'fa-regular'} fa-thumbs-up`}></i> */}
                <FontAwesomeIcon 
                    icon={isLiked ? solidThumbsUp : regularThumbsUp} 
                    style={{ color: isLiked ? 'blue' : 'gray', fontSize: '20px', marginLeft: '0.5em' }} 
                />
            </button>
        </div>
    );
};