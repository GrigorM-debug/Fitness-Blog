import styles from './HealthyRecipes.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useGetLatestRecipes } from '../../hooks/useRecipes';
import { useState, useEffect} from 'react';
import useForm from '../../hooks/useForm';
import RecipeItem from './RecipeItem/RecipeItem';
import Preloader from '../Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import SideBar from './SideBar/SideBar';
import useHealthyRecipesSearch from '../../hooks/useHealthyRecipesSearch';

const initialValues = {
    title: ''
}

export default function HealthyRecipes() {

    const [recipes, isFetching] = useGetLatestRecipes();

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        setFilteredRecipes(recipes);
    }, [recipes]);

    const [isLoading, searchHandler, errors] = useHealthyRecipesSearch();

    const searchSubmitHandler = async (formData) => {
        const result = await searchHandler(formData.title);

        if(result) {
            setFilteredRecipes(result);
        }
    }

    const { formData, onChangeHandler, onSubmitHandler } = useForm(initialValues, searchSubmitHandler);

    const isPreloading = isFetching || isLoading;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate indices for the current page
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentRecipes = filteredRecipes && filteredRecipes.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
    <>
        {isPreloading ? <Preloader /> :
            <>
            <Breadcrumb title="Healthy Recipes" page="Healthy Recipes" breadcrumbImage="img/recipe-bg2.jpg"/>
    
            <section className={`${styles.healthyRecipeSection} spad`}>
                <div className={styles.container}>
                    <div className="heading">
                        <div className="col-lg-12">
                            <div className={styles.hrTitle}>
                                <div className={`${styles.sectionTitle} section-title`}>
                                    <h2>Healthy High Protein Recipes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        {currentRecipes.length > 0 ? currentRecipes.map(recipe => (
                            <RecipeItem 
                                key={recipe._id}
                                title={recipe.title}
                                imageUrl={recipe.imageUrl}
                                author={recipe.author.username}
                                recipeId={recipe._id}
                            />
                        )) 
                            : <h2 className={`${styles.sectionTitle} section-title`}>There is no posts added</h2>
                        }
                    </div>
                    <Pagination 
                        handleItemsPerPage={itemsPerPage}
                        length={filteredRecipes && filteredRecipes.length}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
                <SideBar 
                    onChange={onChangeHandler}
                    onSubmit={onSubmitHandler}
                    formData={formData}
                    errors={errors}
                />
            </section>
            </>
        }
    </>
    );
};
