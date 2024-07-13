import {styles} from './LatestArticles.module.css';

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
                                <img src="assets/img/classes/class-1.jpg" alt="" />
                            </div>
                            <div className={styles.laText}>
                                <span>STRENGTH</span>
                                <h5>Weightlifting</h5>
                                <span>Created by: <p>Creator Name</p></span>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.articleItem}>
                            <div className={styles.laPic}>
                                <img src="assets/img/classes/class-2.jpg" alt=""/>
                            </div>
                            <div className={styles.laText}>
                                <span>Cardio</span>
                                <h5>Indoor cycling</h5>
                                <span>Created by: <p>Creator Name</p></span>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.articleItem}>
                            <div className={styles.laPic}>
                                <img src="assets/img/classes/class-3.jpg" alt=""/>
                            </div>
                            <div className={styles.laText}>
                                <span>STRENGTH</span>
                                <h5>Kettlebell power</h5>
                                <span>Created by: <p>Creator Name</p></span>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className={styles.articleItem}>
                            <div className={styles.laPic}>
                                <img src="assets/img/classes/class-4.jpg" alt=""/>
                            </div>
                            <div className={styles.laText}>
                                <span>Cardio</span>
                                <h4>Indoor cycling</h4>
                                <span>Created by: <p>Creator Name</p></span>
                                <a href="#"><i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.articleItem}>
                            <div className={styles.laPic}>
                                <img src="assets/img/classes/class-5.jpg" alt=""/>
                            </div>
                            <div className={styles.laText}>
                                <span>Training</span>
                                <h4>Boxing</h4>
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