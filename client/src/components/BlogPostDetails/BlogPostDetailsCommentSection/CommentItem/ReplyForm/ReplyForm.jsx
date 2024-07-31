import styles from './ReplyForm.module.css';

export default function ReplyForm({ 
    onSubmit,
    onChangeHandler,
    values,
    errors
}) {
    return (
        <form onSubmit={onSubmit} className={styles.replyForm}>
            <p className={styles.errorMessage}>{errors ? errors.serverError : ''}</p>
            <p className={styles.errorMessage}>{errors ? errors.text : ''}</p>
            <div className={styles.formFields}>
                <textarea
                    name='reply'
                    value={values.reply}
                    onChange={onChangeHandler}
                    placeholder="Write a reply..."
                    className={`${errors.text ? styles.error : ''}`}
                    // required
                />
                <button type="submit" className={styles.replyFormButton}>Submit</button>
            </div>
        </form>
    );
}