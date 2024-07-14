import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';
import TopOptions from './TopOptions/TopOptions';


export default function Header() {
    return (
        <>
            <header className={styles.headerSection}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="/img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                    <div className="col-lg-6">
                        < Navigation />
                    </div>
                    <div className="col-lg-3">
                        <TopOptions />
                    </div>
                    </div>
                    <div className="canvas-open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>

        </>
    );
};