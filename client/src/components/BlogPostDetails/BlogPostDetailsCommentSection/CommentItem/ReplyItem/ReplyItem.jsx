import styles from './ReplyItem.module.css';

export default function ReplyItem({
    authorProfilePic,
    authorName,
    text
}) {
    return (
        <div className={`${styles.coItem} ${styles.replyComment}`}>
            <div className={styles.coPic}>
                <img src={authorProfilePic} alt=""/>
                <h5>{authorName}</h5>
            </div>
            <div className={styles.coText}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};