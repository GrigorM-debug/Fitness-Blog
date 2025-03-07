import styles from './404.module.css';
import { Link } from "react-router-dom";
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function NotFound() {
    return (
        <>
        <Breadcrumb title="404 Not Found" page="404" breadcrumbImage="img/404.png"/>

        <section className={styles.section404}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.text404}>
                            {/* <h1>404</h1> */}
                            <h3>Opps! This page Could Not Be Found!</h3>
                            <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                            <Link to="/"><i className="fa fa-home"></i> Go back home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};