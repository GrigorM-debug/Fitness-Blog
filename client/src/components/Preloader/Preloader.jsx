import styles from './Preloader.module.cs';

export default function Preloader() {
    return (
        <div id={styles.preloder}>
            <div className={styles.loader}></div>
        </div>
    );
};