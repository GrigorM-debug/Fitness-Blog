import styles from './LeaveComment.module.css';

export default function LeaveComment() {
    return (
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
    );
};