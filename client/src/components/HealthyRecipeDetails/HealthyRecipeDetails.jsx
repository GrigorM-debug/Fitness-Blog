import { useGetOneRecipe } from '../../hooks/useRecipes';
import HealthyRecipeDetailsCommentSection from './HealthyRecipeDeatilsCommentSection/HealthyRecipeDetailsCommentSection';
import styles from './HealthyRecipeDetails.module.css';
import HealthyRecipeDetailsHero from './HealthyRecipeDetailsHero/HealthyRecipeDetailsHero';
import HealthyRecipeDetailsCreatorSection from './HealthyRecipeDetalsCreatorSection/HealthyRecipeDetailsCreatorSection';
import { useParams, useState, useEffect, useContext } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { useGetAll } from '../../hooks/useRecipesComments';
import { useGetLikes } from '../../hooks/useRecipeLikes';
import Preloader from '../Preloader/Preloader';

export default function HealthyRecipeDetails() {
    const {recipeId} = useParams();
    const [recipe, isFetching] = useGetOneRecipe(recipeId);

    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;
    const userId = contextData._id;

    //Taking the comments to dispay their count in hero section
    //Invoke updateComments function to update the comments when new
    //comment is added. Commets count is also updated in hero section
    //Wihout calling the function Comments count updates only after refresh (re-render)
    const [comments, updateComments] = useGetAll(recipeId);
    updateComments();

    //Check if user is post author 
    const isAuthor = userId === post._ownerId;
    const isUser = !!isAuthenticated;

    //Take the likes
    //Set is Liked and Disable Like Button when isLiked is true
    //ThumbsUp icons is with solid style with blue color. Before like is regular stylewith gray color.
    //When isLikeDisabled is true the Like button is disabled to prevent multiple likes by user
    //Button styles is changing to gray color for background when post is liked
    const [isLiked, setIsLiked] = useState(false);
    const [isLikeDisabled, setIsLikeDisabled] = useState(false);

    const [likes, updateLikes] = useGetLikes(recipeId);
    const likeHandler = useLikePost();

    //Wihout this useEffect React gives a error for too many re-renders
    //So I put it as Side Effect
    useEffect(() => {
        if (likes.length > 0 && likes.some(like => like._ownerId === userId)) {
            setIsLiked(true);
            setIsLikeDisabled(true);
        } else {
            setIsLiked(false);
            setIsLikeDisabled(false);
        }
    }, [likes, userId]);


    const likeButtonHandler = async (e) => {
        e.preventDefault();
        await likeHandler(recipeId);
        updateLikes();
        console.log('recipe is liked')
    }

    return (
        <>
        {isFetching && <Preloader />}

        <HealthyRecipeDetailsHero 
            title={recipe.title} 
            imageUrl={recipe.imageUrl} 
            authorName={recipe.author.username}
            commentsCount={comments.length}
            likesCount={likes.length}
            reatedOn={recipe.createdOn}
        />

        <section className={`${styles.blogDetailsSection} spad`}>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 p-0 m-auto">
                    <div className={styles.blogPostDetailsText}>
                        <div className={styles.blogPostDetailsTitle}>
                            <h5>You Can Buy For Less Than A College Degree</h5>
                        </div>
                            <div className={styles.BlogPostDetailsDescription}>
                                <p>
                                Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className={styles.blogPostDetailsPic}>
                                <div className={styles.blogPostDetailsPicItem}>
                                    <img src="img/blog/details/details-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className={styles.BlogPostDetailsMoreDescription}>
                                <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in. . Sed ut perspiciatis unde omnis iste natus error sit
                                voluptatem.
                                </p>
                                <p>
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                eiusmod tempor incididunt laboris nisi ut aliquip commodo
                                consequat. Class aptent taciti sociosqu ad litora torquent per
                                conubia nostra, per inceptos himenaeos. Mauris vel magna ex.
                                Integer gravida tincidunt accumsan. Vestibulum nulla mauris,
                                condimentum id felis ac, volutpat volutpat mi qui dolorem.
                                </p>
                            </div>

                            <HealthyRecipeDetailsCreatorSection />

                            <HealthyRecipeDetailsCommentSections />
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
    );
};