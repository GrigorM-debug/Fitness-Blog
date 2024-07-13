export default function Breadcrumb(props) {
    return (
        <section className="breadcrumb-section set-bg" data-setbg="img/BMI.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb-text">
                            <h2>{props.title}</h2>
                            <div className="bt-option">
                                <a href="./index.html">Home</a>
                                <a href="#">Pages</a>
                                <span>{props.link}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};