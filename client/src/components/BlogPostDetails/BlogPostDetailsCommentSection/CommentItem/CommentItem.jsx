import styles from './CommentItem.module.css';

export default function CommentItem({
    author,
    authorProfilePic,
    text
}) {
    return (
        <div className={styles.coItem}>
            <div className={styles.coPic} >
                <img src={authorProfilePic} alt="Author profile pic" />
                <h5>{author}</h5>
            </div>
            <div className={styles.coText}>
                <p>
                    {text}
                </p>
            </div>  
        </div>
    );
};