import LatestItems from "./LatestItems/LatestItems";
import styles from './SideBar.module.css';
export default function SideBar() {
    return (
        <div className="col-lg-4 col-md-8 p-0">
            <div className={styles.sidebarOption}>
                <div className="so-categories">
                    <h5 className="title">Filter By Categoris</h5>
                    <ul>
                    <li>
                        <a href="#">
                        Yoga <span>12</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Runing <span>32</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Weightloss <span>86</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Cario <span>25</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Body buiding <span>36</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        Nutrition <span>15</span>
                        </a>
                    </li>
                    </ul>
                </div>
                <LatestItems />
            </div>
        </div>
    );
};