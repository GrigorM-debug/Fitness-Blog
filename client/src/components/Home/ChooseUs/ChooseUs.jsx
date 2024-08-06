import styles from './ChooseUs.module.css';

export default function ChooseUs() {
    return (
        <section className={`${styles.chooseUsSection} spad`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>What we can offer?</span>
                            <h2>Upgrade your fitness knowledge</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-034-stationary-bike"></span>
                            <h4>Community and Support</h4>
                            <p>Connect with like-minded individuals who share your health and fitness goals. Our community forum allows you to exchange tips, seek advice, and celebrate achievements together. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-033-juice"></span>
                            <h4>High-Protein Recipes</h4>
                            <p>Explore our extensive collection of healthy, high-protein recipes that are not only good for you but also taste great. </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-002-dumbell"></span>
                            <h4>All-In-One Health and Fitness Hub</h4>
                            <p>Whether you're looking for effective workout routines, nutritious meal plans, or recovery strategies, our platform offers a wealth of resources.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-014-heart-beat"></span>
                            <h4>Health and Recovery Insights</h4>
                            <p>Discover expert advice on health maintenance and recovery strategies. Our posts cover everything from injury prevention to holistic recovery techniques, ensuring you stay at your best.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};