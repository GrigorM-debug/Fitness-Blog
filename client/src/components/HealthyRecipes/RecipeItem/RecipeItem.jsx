import styles from './RecipeItem.module.css';
import { Link } from 'react-router-dom';

export default function RecipeItem({
    title,
    imageUrl,
    author,
    recipeId
}) {
    return (
        <div className={styles.hrItem} key={index} style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className={styles.hrText}>
                <h4>{title}</h4>
                <span>Created by: <p>{author}</p></span>
                <Link to={`/healthy-recipes/${recipeId}/details`}>View Recipe Details</Link>
            </div>
        </div>
    );
};