import styles from './Pagination.module.css';

export default function Pagination() {
    return (
        <div className={styles.pagination}>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">Next</a>
        </div>
    );
};