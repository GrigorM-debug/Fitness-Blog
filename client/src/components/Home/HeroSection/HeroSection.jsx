import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

export default function HeroSection() {
    const items = [
        {
          setBg: "/img/hero/hero-1.jpg",
          spanText: "Train Hard but Smart",
          h1Text: "Learn about training and recovery",
          btnText: "Join our community",
        },
        {
          setBg: "/img/healthyHomePageBanner.jpeg",
          spanText: "Be healthy",
          h1Text: "Eat tasty and be in good shape",
          btnText: "Join our community",
        },
    ];
    return (
        <section className="hero-section">
      <OwlCarousel
        className="hs-slider owl-carousel"
        loop
        margin={0}
        nav
        items={1}
        dots={false}
        animateOut="fadeOut"
        animateIn="fadeIn"
        navText={[
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ]}
        smartSpeed={1200}
        autoHeight={false}
        autoplay={false}
      >
        {items.map((item, index) => (
          <div className="hs-item set-bg" key={index} style={{ backgroundImage: `url(${item.setBg})` }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>{item.spanText}</span>
                    <h1 dangerouslySetInnerHTML={{ __html: item.h1Text }}></h1>
                    <a href="#" className="primary-btn">{item.btnText}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </section>
    );
};