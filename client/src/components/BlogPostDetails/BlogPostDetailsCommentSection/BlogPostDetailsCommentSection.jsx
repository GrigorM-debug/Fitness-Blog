import styles from './BlogPostDetailsCommentSection.module.css';

export default function BlogPostDetailsCommentSection() {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comment</h5>
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
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.leaveComment}>
                    <h5>Leave a comment</h5>
                    <form action="#">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Website" />
                        <textarea placeholder="Comment" defaultValue={""} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            </div>
    );
};