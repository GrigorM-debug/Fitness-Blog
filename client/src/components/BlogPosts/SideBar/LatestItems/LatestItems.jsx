import styles from './LatestItems.module.css';

export default function LatestItems() {
    return (
        <div className={styles.soLatest}>
            <h5 className={styles.title}>Latest posts</h5>

            <div className={styles.latestItem}>
                <div className={styles.liPic}>
                    <img src="img/letest-blog/latest-2.jpg" alt="" />
                </div>
                <div className={styles.liText}>
                    <h6>
                    <a href="./blog-details.html">
                        Grilled Potato and Green Bean Salad
                    </a>
                    </h6>
                    <span className={styles.liTime}>Aug 15, 2019</span>
                </div>
            </div>
        </div>
    );
};