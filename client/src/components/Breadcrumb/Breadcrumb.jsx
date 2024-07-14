import styles from './Breadcrumb.module.css';

export default function Breadcrumb(props) {
    return (
        <section className={`${styles.breadcrumbSection} set-bg`} data-setbg="/img/BMI.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className={styles.breadcrumbText}>
                            <h2>{props.title}</h2>
                            <div className={styles.btOption}>
                                <a href="./index.html">Home</a>
                                <a href="#">Pages</a>
                                <span>{props.link}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};