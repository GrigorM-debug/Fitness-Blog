import styles from './Breadcrumb.module.css';
import { Link } from "react-router-dom";

export default function Breadcrumb(props) {
    return (
        <section className={`${styles.breadcrumbSection} set-bg`} style={{ backgroundImage: `url(${props.breadcrumbImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className={styles.breadcrumbText}>
                            <h2>{props.title}</h2>
                            <div className={styles.btOption}>
                                <Link href="./index.html">Home</Link>
                                <span>{props.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};