import styles from './LeaveComment.module.css';

export default function LeaveComment({
    onSubmitHandler,
    onChangeHandler,
    formData
}) {
    return (
        <div className={styles.leaveComment}>
            <h5>Leave a comment</h5>
            <form onSubmit={onSubmitHandler}>
                <textarea
                    name='comment' 
                    placeholder="Comment" 
                    onChange={onChangeHandler}
                    value={formData.comment}
                />    
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};