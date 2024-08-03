import { timestampToDate } from '../../../utils/timeSpanToDate';
import styles from './BlogPostDetailsHero.module.css';

export default function BlogPostDetailsHero({
    title,
    imageUrl,
    category,
    authorName,
    commentsCount,
    likesCount,
    createdOn
}) {

    const defaultImageUrl = '/img/blog/blog-2.jpg'; // Adjusted path
    const backgroundImageUrl = imageUrl ? imageUrl : defaultImageUrl;


    return (
        <section 
            className={`${styles.blogDetailsHero} set-bg`} 
            style={{backgroundImage: `url(${backgroundImageUrl})`}}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className={styles.bhText}>
                            <h3>{title}</h3>
                            <ul>
                                <li>Category: {category}</li>
                                <li>by {authorName}</li>
                                <li>Created On: {timestampToDate(createdOn)}</li>
                                <li>{commentsCount > 0 ? commentsCount : '0'} Comments</li>
                                <li>{likesCount > 0 ? likesCount : '0'} Likes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
