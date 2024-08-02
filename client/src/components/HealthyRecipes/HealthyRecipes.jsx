import styles from './HealthyRecipes.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useGetLatestRecipes } from '../../hooks/useRecipes';
import RecipeItem from './RecipeItem/RecipeItem';

export default function HealthyRecipes() {

    const [recipes, isFetching] = useGetLatestRecipes();
    
    return (
    <>
        {isFetching ? <Preloader /> :
            <>
            <Breadcrumb title="Healthy Recipes" page="Healthy Recipes" breadcrumbImage="img/recipe-bg2.jpg"/>
    
            <section className={`${styles.healthyRecipeSection} spad`}>
                <div className={styles.container}>
                    <div className="heading">
                        <div className="col-lg-12">
                            <div className={styles.hrTitle}>
                                <div className={`${styles.sectionTitle} section-title`}>
                                    <h2>Healthy High Protein Recipes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {recipes && recipes.length > 0 ? recipes.map(recipe => (
                            // <div className={styles.hrItem} key={index} style={{ backgroundImage: `url(${item.setBg})` }}>
                            //     <div className={styles.hrText}>
                            //         <h4>{item.title}</h4>
                            //         <span>Created by: <p>{item.creator}</p></span>
                            //         <a href={item.link}>View Recipe Details</a>
                            //     </div>
                            // </div>
                            <RecipeItem 
                                key={recipe._id}
                                title={recipe.title}
                                imageUrl={recipe.imageUrl}
                                author={recipe.author.username}
                                recipeId={recipe._id}
                            />
                        )) 
                            : <h2 className={`${styles.sectionTitle} section-title`}>There is no posts added</h2>
                        }
                    </div>
                </div>
            </section>
            </>
        }
    </>
    );
};
