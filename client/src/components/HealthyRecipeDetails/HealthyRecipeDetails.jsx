import { useGetOneRecipe } from '../../hooks/useRecipes';
import HealthyRecipeDetailsCommentSection from './HealthyRecipeDeatilsCommentSection/HealthyRecipeDetailsCommentSection';
import styles from './HealthyRecipeDetails.module.css';
import HealthyRecipeDetailsHero from './HealthyRecipeDetailsHero/HealthyRecipeDetailsHero';
import HealthyRecipeDetailsCreatorSection from './HealthyRecipeDetalsCreatorSection/HealthyRecipeDetailsCreatorSection';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import { useGetAll } from '../../hooks/useRecipesComments';
import { useGetLikes, useLikeRecipe } from '../../hooks/useRecipeLikes';
import Preloader from '../Preloader/Preloader';
import LikeButton from './LikeButton/LikeButton';
import AuthorButtons from './AuthButtons/AuthButtons';
import { getOneRecipe } from '../../api/recipes_API';

export default function HealthyRecipeDetails() {
    const {recipeId} = useParams();

    const [recipe, isFetching] = useGetOneRecipe(recipeId);

    //Just for the test
    // const [recipe, setRecipe] = useState({})
    // const [isFetching, setIsFetching] = useState(false);
    
    // console.log(recipeId)
    // useEffect(() => {
    //     (async (recipeId)=>{
    //         try {
    //             setIsFetching(true)
    //             const result = await getOneRecipe(recipeId);
    //             setRecipe(result)
    //             setIsFetching(false)
    //         } catch (err) {
    //             setIsFetching(false)
    //             console.log(err)
    //         }
    //     })()
    // }, [recipeId])


    const {contextData} = useContext(UserContext);
    const isAuthenticated = contextData.isAuthenticated;
    const userId = contextData._id;

    const [comments, updateComments] = useGetAll(recipeId);

    useEffect(() => {
        updateComments();
    }, []);

    const isAuthor = userId === recipe._ownerId;
    const isUser = !!isAuthenticated;

    const [isLiked, setIsLiked] = useState(false);
    const [isLikeDisabled, setIsLikeDisabled] = useState(false);

    const [likes, updateLikes] = useGetLikes(recipeId);
    const likeHandler = useLikeRecipe();

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
        console.log('recipe is liked');
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
            createdOn={recipe._createdOn} // Corrected prop name
        />

        <section className={`${styles.blogDetailsSection} spad`}>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 p-0 m-auto">
                    <div className={styles.blogPostDetailsText}>
                        <div className={styles.blogPostDetailsTitle}>
                            <h5>{recipe.subTitle}</h5>
                        </div>
                            <div className={styles.BlogPostDetailsDescription}>
                                <p>
                                    {recipe.description}
                                </p>
                            </div>
                            <div className={styles.blogPostDetailsPic}>
                                <div className={styles.blogPostDetailsPicItem}>
                                    <img src={recipe.imageUrl} alt="" />
                                </div>
                            </div>
                            <div className={styles.BlogPostDetailsMoreDescription}>
                                <p>
                                    {recipe.ingredients}
                                </p>
                            </div>
                            <div className={styles.BlogPostDetailsMoreDescription}>
                                <p>
                                    {recipe.instructions}
                                </p>
                            </div>

                            {isAuthor && <AuthorButtons />}

                            {isUser 
                                && !isAuthor 
                                && <LikeButton 
                                    likeButtonHandler={likeButtonHandler}
                                    isLikeDisabled={isLikeDisabled}
                                    isLiked={isLiked}
                                />}

                            <HealthyRecipeDetailsCreatorSection 
                                name={recipe.author.username}
                                email={recipe.author.email} 
                                description={recipe.author.description} 
                                imageUrl={recipe.author.imageUrl}
                            />

                            <HealthyRecipeDetailsCommentSection // Corrected component name
                                recipeId={recipeId}
                                isAuthenticated={isAuthenticated}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
