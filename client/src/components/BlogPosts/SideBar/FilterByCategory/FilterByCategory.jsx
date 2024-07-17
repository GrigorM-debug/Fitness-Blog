import styles from './FilterByCategory.module.css'

export default function FilterByCategory({
    option,
    toggleCheck
}) {
    return (
        <>
            <div className={styles.categoryFilter}>
                <label>
                    <input type="radio" name="option" value={option} onClick={toggleCheck} /> {option}
                </label>
                <br />
            </div>
        </>
    );
};