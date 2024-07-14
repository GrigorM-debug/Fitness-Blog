import styles from './TopOptions.module.css';

export default function TopOptions() {
    return (    
        <div className={styles.topOption}>
            <div className={`${styles.toSearch} search-switch`}>
                <i className="fa fa-search" />
            </div>
            <div className={styles.user}>
                <h2 className={styles.welcomeMessage}>
                Welcome, <span>Guest</span>
                </h2>
                <div id="auth-buttons" className={`${styles.topOption} ${styles.user}`}>
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};