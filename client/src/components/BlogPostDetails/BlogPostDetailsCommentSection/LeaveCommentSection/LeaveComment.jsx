import styles from './LeaveComment.module.css';

export default function LeaveComment({
    onSubmitHandler,
    onChangeHandler,
    formData,
    isDisabled
}) {
    return (
        <div className={styles.leaveComment}>
            <h5>Leave a comment</h5>
            <form onSubmit={onSubmitHandler}>
                <textarea
                    name='comment' 
                    placeholder="Comment" 
                    className={isDisabled ? styles.disabled : ''}
                    onChange={onChangeHandler}
                    value={formData.comment}
                />    
                {isDisabled && <p className={styles.disabledNotice}>You must be logged in to comment.</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};