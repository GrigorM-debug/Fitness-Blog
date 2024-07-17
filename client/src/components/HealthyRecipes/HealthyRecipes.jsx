import styles from './HealthyRecipes.module.css';

export default function HealthyRecipes() {
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
    return (
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
                    {recipes.map((item, index) => (
                        <div className={styles.hrItem} key={index} style={{ backgroundImage: `url(${item.setBg})` }}>
                            <div className={styles.hrText}>
                                <h4>{item.title}</h4>
                                <span>Created by: <p>{item.creator}</p></span>
                                <a href={item.link}>View Recipe Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
