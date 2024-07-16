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
                            <h4>Modern equipment</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-033-juice"></span>
                            <h4>Healthy nutrition plan</h4>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-002-dumbell"></span>
                            <h4>Proffesponal training plan</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                dolore facilisis.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.csItem}>
                            <span className="flaticon-014-heart-beat"></span>
                            <h4>Unique to your needs</h4>
                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                facilisis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};