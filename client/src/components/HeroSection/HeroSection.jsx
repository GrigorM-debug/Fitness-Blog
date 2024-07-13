import './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hs-slider owl-carousel">
                <div className="hs-item set-bg" data-setbg="assets/img/hero/hero-1.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="hi-text">
                                    <span>Train Hard but Smart</span>
                                    <h1>Learn about <strong>training</strong> and <strong>recovery</strong></h1>
                                    <a href="#" className="primary-btn">Join our community</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hs-item set-bg" data-setbg="assets/img/HealthyHomePageBanner.jpeg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="hi-text">
                                    <span>Be healthy</span>
                                    <h1> Eat <strong>tasty</strong> and be in <strong>good</strong> shape</h1>
                                    <a href="#" className="primary-btn">Join our community</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};