import styles from './BlogPostDetailsHero.module.css';

export default function BlogPostDetailsHero({
    title,
    imageUrl,
    category
}) {
    return (
        <section className={`${styles.blogDetailsHero} set-bg`} style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className={styles.bhText}>
                            <h3>{title}</h3>
                            <ul>
                                <li>Category: {category}</li>
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