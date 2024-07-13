import {styles} from './TopOptions.module.css';

export default function TopOptions() {
    return (    
        <div className={styles.topOption}>
            <div className={`${styles.toSearch} search-switch`}>
                <i className="fa fa-search" />
            </div>
            <div className="user">
                <h2>
                Welcome, <span>Guest</span>
                </h2>
                <div id="auth-buttons">
                    <a href="#">Register</a>
                    <a href="#">Login</a>
                </div>
            </div>
        </div>
    );
};