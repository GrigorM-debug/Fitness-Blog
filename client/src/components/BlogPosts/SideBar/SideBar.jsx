import FilterByCategory from "./FilterByCategory/FilterByCategory";
import styles from './SideBar.module.css';

export default function SideBar() {


    return (
        <div className="col-lg-4 col-md-8 p-0">
            <div className={styles.sidebarOption}>
                <div className={styles.soCategories}>
                    <h5 className={styles.title}>Filter By Categories</h5>
                    {['Training', 'Competitions', 'Nutrition', 'Health & Recovery'].map((option) => (
                        <FilterByCategory 
                            key={option}
                            option={option}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};