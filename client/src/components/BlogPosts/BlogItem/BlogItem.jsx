import styles from './BlogItem.module.css';

export default function BlogItem({
    id,
    title,
    creator,
    imageUrl,
    shortDescription,
    category,
    createdOn
}) {
    return (
        <div className={styles.blogItem}>
            <div className={styles.blogItemPic}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.blogItemText}>
                <h5>
                    <a href={`/blog/${id}/details`}>
                        {title}
                    </a>
                </h5>
                <ul>
                    <li>Category: {category}</li>
                    <li>{creator}</li>
                    <li>{createdOn}</li>
                    <li>20 Comment</li>
                </ul>
                <p>
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};