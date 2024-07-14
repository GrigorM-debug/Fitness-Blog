import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from './LatestRecipes.module.css';

const LatestRecipes = () => {
    const recipes = [
        {
            title: 'Blueberry Pancakes',
            creator: 'Creator Name',
            setBg: '/img/blueberry-protein-pancakes-6.jpg',
            link: '#'
        },
        {
            title: 'Creamy Cajun Chicken Pasta',
            creator: 'Creator Name',
            setBg: '/img/pasta.jpg',
            link: '#'
        },
        {
            title: 'Banana Cake',
            creator: 'Creator Name',
            setBg: '/img/banana-cake.jpg',
            link: '#'
        },
        {
            title: 'Simple High-Protein Lasagne',
            creator: 'Creator Name',
            setBg: '/img/lasanq.jpg',
            link: '#'
        }
    ];

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
                                <h2>Our latest Healthy Recipes</h2>
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
                        dotsEach={1}
                        dotsClass='owl-dots'
                        smartSpeed={1200}
                        autoHeight={false}
                        autoplay
                        responsive={responsive}
                    >
                        {recipes.map((item, index) => (
                            <div className="item" key={index}>
                                <div 
                                    className={`${styles.lsItem}`} 
                                    style={{ 
                                        backgroundImage: `url(${item.setBg})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '450px',
                                        position: 'relative'
                                    }}
                                >
                                    <div className={styles.lsText}>
                                        <h4>{item.title}</h4>
                                        <span>Created by: <p>{item.creator}</p></span>
                                        <a href={item.link}>View Recipe Details</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default LatestRecipes;
