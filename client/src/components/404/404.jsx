import {styles} from './404.module.css';

export default function NotFound() {
    return (
        <section className={styles.section404}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.text404}>
                            <h1>404</h1>
                            <h3>Opps! This page Could Not Be Found!</h3>
                            <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                            <a href="./index.html"><i className="fa fa-home"></i> Go back home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};