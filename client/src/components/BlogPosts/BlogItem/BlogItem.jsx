import { useGetAll } from '../../../hooks/useBlogPostComments';
import { useGetLikes } from '../../../hooks/usePostLikes';
import { timestampToDate } from '../../../utils/timeSpanToDate';
import styles from './BlogItem.module.css';
import { Link } from 'react-router-dom';

export default function BlogItem({
    id,
    title,
    creator,
    imageUrl,
    shortDescription,
    category,
    createdOn
}) {

    const [comments] = useGetAll(id);
    const [likes] = useGetLikes(id);
    return (
        <div className={styles.blogItem}>
            <div className={styles.blogItemPic}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.blogItemText}>
                <h5>
                    <Link to={`/blog/${id}/details`}>
                        {title}
                    </Link>
                </h5>
                <ul>
                    <li>Category: {category}</li>
                    <li>Author: {creator}</li>
                    <li>CreatedOn: {timestampToDate(createdOn)}</li>
                    <li>{comments.length} Comments</li>
                    <li>{likes.length} Likes</li>
                </ul>
                <p>
                    {shortDescription}
                </p>
            </div>
        </div>
    );
};