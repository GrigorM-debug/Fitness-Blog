import styles from './ReplyForm.module.css';

export default function ReplyForm({ 
    onSubmit,
    onChangeHandler,
    values
}) {

    return (
        <form onSubmit={onSubmit} className={styles.replyForm}>
            <div className={styles.formFields}>
                <textarea
                    name='reply'
                    value={values.reply}
                    onChange={onChangeHandler}
                    placeholder="Write a reply..."
                    required
                />
                <button type="submit" className={styles.replyFormButton}>Submit</button>
            </div>
        </form>
    );
}