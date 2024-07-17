import styles from './ContactInfo.module.css';

export default function ContactInfo() {
    return (
        <div className="col-lg-6">
            <div className={`${styles.sectionTitle} ${styles.contactTitle}`}>
            <span>Contact Us</span>
            <h2>GET IN TOUCH</h2>
            </div>
            <div className={styles.contactWidget}>
            <div className={styles.cwText}>
                <i className="fa fa-map-marker" />
                <p>
                333 Middle Winchendon Rd, Rindge,
                <br /> NH 03461
                </p>
            </div>
            <div className={styles.cwText}>
                <i className="fa fa-mobile" />
                <ul>
                <li>125-711-811</li>
                <li>125-668-886</li>
                </ul>
            </div>
            <div className={`${styles.cwText} ${styles.email}`}>
                <i className="fa fa-envelope" />
                <p>Support.gymcenter@gmail.com</p>
            </div>
            </div>
        </div>
    );
};