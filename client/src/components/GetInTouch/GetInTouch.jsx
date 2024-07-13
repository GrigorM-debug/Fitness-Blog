import {styles} from './GetInTouch.module.css';

export default function GetInTouch() {
    return (
        <div className={styles.getInTouchSection}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.gtText}>
                            <i className="fa fa-map-marker"></i>
                            <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.gtText}>
                            <i className="fa fa-mobile"></i>
                            <ul>
                                <li>125-711-811</li>
                                <li>125-668-886</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${styles.gtText} email`}>
                            <i className="fa fa-envelope"></i>
                            <p>Support.gymcenter@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};