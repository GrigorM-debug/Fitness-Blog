import styles from './CommentItem.module.css';

export default function CommentItem() {
    return (
        <div className={styles.coItem}>
            <div className={styles.coPic} >
                <img src="img/blog/details/comment-1.jpg" alt="" />
                <h5>Brandon Kelley</h5>
            </div>
            <div className={styles.coText}>
                <p>
                    Neque porro quisquam est, qui dolorem ipsum dolor sit amet,
                    consectetur, adipisci velit dolore.
                </p>
            </div>  
        </div>
    );
};