import {styles} from './LatestRecipes.module.css';

export default function LatestRecipes() {
    return (
        <section className={`${styles.latestRecipesSection} spad`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.lsTitle}>
                            <div className={`${styles.sectionTitle} section-title`}>
                                {/* <!-- <span>Our latest Healthy Recipes</span> --> */}
                                <h2>Our latest Healthy Recipes</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.lsSlider} owl-carousel`}>
                        <div className="col-lg-4">
                            <div className={`${styles.lsItem} set-bg`} data-setbg="assets/img/blueberry-protein-pancakes-6.jpg">
                                <div className={styles.lsText} >
                                    <h4>Blueberry Pancakes</h4>
                                    <span>Created by: <p>Creator Name</p></span>
                                    <a href="#">View Recipe Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${styles.lsItem} set-bg`} data-setbg="assets/img/pasta.jpg">
                                <div className={styles.lsText}>
                                    <h4>Creamy Cajun Chicken Pasta</h4>
                                    <span>Created by: <p>Creator Name</p></span>
                                    <a href="#">View Recipe Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${styles.lsItem} set-bg`} data-setbg="assets/img/banana-cake.jpg">
                                <div className={styles.lsText}>
                                    <h4>Banana Cake</h4>
                                    <span>Created by: <p>Creator Name</p></span>
                                    <a href="#">View Recipe Details</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${styles.lsItem} set-bg`} data-setbg="assets/img/lasanq.jpg">
                                <div className={styles.lsText}>
                                    <h4>Simple High-Protein Lasagne</h4>
                                    <span>Created by: <p>Creator Name</p></span>
                                    <a href="#">View Recipe Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};