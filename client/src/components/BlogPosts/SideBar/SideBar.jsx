import FilterByCategory from "./FilterByCategory/FilterByCategory";
import LatestItems from "./LatestItems/LatestItems";
import styles from './SideBar.module.css';
import { useState } from "react";

export default function SideBar() {
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleCheck = (value) => {
        if (selectedOption === value) {
            setSelectedOption(null);
        } else {
            setSelectedOption(value);
        }
    };

    const showSelectedOption = () => {
        if (selectedOption) {
            alert(`You selected: ${selectedOption}`);
        } else {
            alert('No option selected');
        }
    };

    return (
        <div className="col-lg-4 col-md-8 p-0">
            <div className={styles.sidebarOption}>
                <div className={styles.soCategories}>
                    <h5 className={styles.title}>Filter By Categories</h5>
                    {['Training', 'Competitions', 'Nutrition', 'Health & Recovery'].map((option) => (
                        <FilterByCategory 
                            key={option}
                            option={option}
                            selectedOption={selectedOption}
                            toggleCheck={toggleCheck}
                        />
                    ))}
                </div>
                <LatestItems />
            </div>
        </div>
    );
};