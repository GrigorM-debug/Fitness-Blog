import styles from './BlogPostDetailsHero.module.css';

export default function BlogPostDetailsHero() {
    return (
        <section className={`${styles.blogDetailsHero} set-bg`} style={{backgroundImage: "url('img/blog/details/details-hero.jpg')"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className={styles.bhText}>
                            <h3>Workout nutrition explained. What to eat before, during, and after exercise.</h3>
                            <ul>
                                <li>Category: </li>
                                <li>by Admin</li>
                                <li>Aug,15, 2019</li>
                                <li>20 Comment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};