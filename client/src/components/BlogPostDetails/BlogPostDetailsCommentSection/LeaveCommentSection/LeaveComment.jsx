import styles from './LeaveComment.module.css';

export default function LeaveComment({
    onSubmitHandler,
    onChangeHandler,
    formData,
    isDisabled,
    errors
}) {
    return (
        <div className={styles.leaveComment}>
            <h5>Leave a comment</h5>
            <form onSubmit={onSubmitHandler}>
                <p className={styles.erroMessage}>{errors ? errors.serverError : ''}</p>
                <p className={styles.erroMessage}>{errors ? errors.text : ''}</p>
                <textarea
                    name='comment' 
                    placeholder="Comment" 
                    className={`${isDisabled ? styles.disabled : ''} ${errors ? styles.error : ''}`}
                    onChange={onChangeHandler}
                    value={formData.comment}
                    disabled={isDisabled}
                />    
                {isDisabled && <p className={styles.disabledNotice}>You must be logged in to comment.</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};