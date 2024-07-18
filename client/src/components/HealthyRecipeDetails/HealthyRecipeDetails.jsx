import HealthyRecipeDetailsCommentSection from './HealthyRecipeDeatilsCommentSection/HealthyRecipeDetailsCommentSection';
import styles from './HealthyRecipeDetails.module.css';
import HealthyRecipeDetailsHero from './HealthyRecipeDetailsHero/HealthyRecipeDetailsHero';
import HealthyRecipeDetailsCreatorSection from './HealthyRecipeDetalsCreatorSection/HealthyRecipeDetailsCreatorSection';

export default function HealthyRecipeDetails() {
    return (
        <>
        <HealthyRecipeDetailsHero />

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