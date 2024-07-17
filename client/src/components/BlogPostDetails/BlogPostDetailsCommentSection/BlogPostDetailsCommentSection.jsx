import CommentItem from "./CommentItem/CommentItem";
import LeaveComment from "./LeaveCommentSection/LeaveComment";
import styles from './BlogPostDetailsCommentSection.module.css';

export default function BlogPostDetailsCommentSection() {
    return (
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comment</h5>
                    <CommentItem />
                </div>
            </div>
            <div className="col-lg-6">
                <LeaveComment />
            </div>
            </div>
    );
};