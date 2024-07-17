import styles from './BlogItem.module.css';

export default function BlogItem({
    title,
    creator,
    bannerImage,
    link,
    content,
    category,
    createdOn
}) {
    return (
        <div className={styles.blogItem}>
            <div className={styles.blogItemPic}>
                <img src={bannerImage} alt="" />
            </div>
            <div className={styles.blogItemText}>
                <h5>
                    <a href="./blog-details.html">
                        {title}
                    </a>
                </h5>
                <ul>
                    <li>{creator}</li>
                    <li>{createdOn}</li>
                    <li>20 Comment</li>
                </ul>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
};