import styles from './Footer.module.css';

export default function Footer() {
    return (
        <section className={styles.footerSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.fsAbout}>
                            <div className={styles.faLogo}>
                                <a href="#"><img src="/img/logo.png" alt=""/></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                            <div className={styles.faSocial}>
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa  fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className={styles.fsWidget}>
                            <h4>Useful links</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">classNamees</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className={styles.fsWidget}>
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">My account</a></li>
                                <li><a href="#">Subscribe</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.fsWidget}>
                            <h4>Tips & Guides</h4>
                            <div className={styles.fwRecent}>
                                <h6><a href="#">Physical fitness may help prevent depression, anxiety</a></h6>
                                <ul>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                            <div className={styles.fwRecent}>
                                <h6><a href="#">Fitness: The best exercise to lose belly fat and tone up...</a></h6>
                                <ul>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};