import { useContext } from 'react';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';
import UserContext from '../../contexts/userContext';

export default function Footer() {
    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;
    const isGuest = !isAuthenticated;

    return (
        <section className={styles.footerSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.fsAbout}>
                            <div className={styles.faLogo}>
                                <Link to="#"><img src="/img/logo.png" alt=""/></Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                            {/* <div className={styles.faSocial}>
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                                <Link to="#"><i className="fa fa-instagram"></i></Link>
                                <Link to="#"><i className="fa  fa-envelope-o"></i></Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className={styles.fsWidget}>
                            <h4>Useful links</h4>
                            <ul>
                                <li><Link to="/blog">Our Blog</Link></li>
                                <li><Link to="/healthyRecipes">Healthy Recipes</Link></li>
                                <li><Link to="/BMICalculator">BMI Calculator</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-6">
                        <div className={styles.fsWidget}>
                            <h4>User Links</h4>
                            <ul>
                                {isGuest && 
                                    <div>
                                        <li><Link to="/register">Register</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                    </div>
                                }
                                
                                {isAuthenticated && 
                                    <div>
                                        <li><Link to="/myProfile">My Profile</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                    </div>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className={styles.fsWidget}>
                            <h4>Socials</h4>
                            {/* <div className={styles.fwRecent}>
                                <h6><Link to="#">Physical fitness may help prevent depression, anxiety</Link></h6>
                                <ul>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                            <div className={styles.fwRecent}>
                                <h6><Link to="#">Fitness: The best exercise to lose belly fat and tone up...</Link></h6>
                                <ul>
                                    <li>3 min read</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div> */}
                            <div className={styles.faSocial}>
                                <Link to="#"><i className="fa fa-facebook"></i>Facebook</Link>
                                <Link to="#"><i className="fa fa-twitter"></i>Twitter</Link>
                                <Link to="#"><i className="fa fa-youtube-play"></i>Youtube</Link>
                                <Link to="#"><i className="fa fa-instagram"></i>Istagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};