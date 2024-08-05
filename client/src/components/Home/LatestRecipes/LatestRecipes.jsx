import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './LatestRecipes.module.css';
import { Link } from 'react-router-dom';

export default function LatestRecipes ({
    recipes
}){
    const responsive = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
    };

    return (
        <section className={`${styles.latestRecipesSection} spad`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.lsTitle}>
                            <div className={`${styles.sectionTitle} section-title`}>
                                <h2>Our Latest Healthy High Recipes</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <OwlCarousel
                        className={`${styles.lsSlider} owl-carousel owl-theme`}
                        loop
                        margin={0}
                        dots
                        dotsEach={3}
                        dotsClass='owl-dots'
                        smartSpeed={1200}
                        autoHeight={false}
                        autoplay
                        responsive={responsive}
                    >
                        {recipes.length > 0 ? recipes.slice(0, 5).map((recipe) => (
                            <div className="item" key={recipe._id}>
                                <div 
                                    className={`${styles.lsItem}`} 
                                    style={{ 
                                        backgroundImage: `url(${recipe.imageUrl})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '450px',
                                        position: 'relative'
                                    }}
                                >
                                    <div className={styles.lsText}>
                                        <h4>{recipe.title}</h4>
                                        <span>Created by: <p>{recipe.author.username}</p></span>
                                        <Link to={`/healthy-recipes/${recipe._id}/details`}>View Recipe Details</Link>
                                    </div>
                                </div>
                            </div>
                        )) : <h2>There is no post added</h2>}
                    </OwlCarousel>

                </div>
            </div>
        </section>
    );
};

