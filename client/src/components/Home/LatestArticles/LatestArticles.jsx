import styles from './LatestArticles.module.css';
import { Link } from 'react-router-dom';

export default function LatestArticles({
    posts
}) {
    const defaultImageUrl = '/img/blog/blog-2.jpg';

    return (
        <section className={`${styles.latestArticlesSection} spad`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={`${styles.sectionTitle} section-title`}>
                            {/* <!-- <span>Our Classes</span> --> */}
                            <h2>Our Latest Blog Posts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {posts.length > 0 
                        ? posts.slice(0, 5).map((post) => (
                                <div className="col-lg-4 col-md-6" key={post._id}>
                                    <div className={styles.articleItem}>
                                        <div className={styles.laPic}>
                                            <img src={post.imageUrl && post.imageUrl.trim() !== '' 
                                            ? post.imageUrl 
                                            : defaultImageUrl} alt="" />
                                        </div>
                                        <div className={styles.laText}>
                                            <span>Category: {post.category}</span>
                                            <h5>{post.title}</h5>
                                            <span>Created by: <p>{post.author.username}</p></span>
                                            <Link to={`/blog/${post._id}/details`}><i className="fa fa-angle-right"></i></Link>
                                        </div>
                                    </div>
                                </div> 
                            ))
                        : <h2>There is no posts added</h2>
                    }    
                </div>
            </div>
        </section>
    );
};