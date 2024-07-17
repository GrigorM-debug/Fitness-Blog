import styles from './LatestArticles.module.css';

export default function LatestArticles() {
    return (
        <section className={`${styles.latestArticlesSection} spad`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${styles.sectionTitle} section-title`}>
                            {/* <!-- <span>Our Classes</span> --> */}
                            <h2>Our latest articles</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.articleItem}>
                            <div className={styles.laPic}>
                                <img src="/img/classes/class-1.jpg" alt="" />
                            </div>
                            <div className={styles.laText}>
                                <span>STRENGTH</span>
                                <h5>Weightlifting</h5>
                                <span>Created by: <p>Creator Name</p></span>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        </section>
    );
};