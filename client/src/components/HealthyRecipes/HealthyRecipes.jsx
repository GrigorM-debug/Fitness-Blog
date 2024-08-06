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
import { useNavigate, useSearchParams } from 'react-router-dom';

const initialValues = {
    title: ''
}

export default function HealthyRecipes() {

    const [recipes, isFetching] = useGetLatestRecipes();

    const [filteredRecipes, setFilteredRecipes] = useState([]);

    //Check this
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        if(recipes) {
            setFilteredRecipes(recipes);
        }
    }, [recipes]);

    const [isLoading, searchHandler, errors] = useHealthyRecipesSearch();

    const searchSubmitHandler = async (formData) => {
        const result = await searchHandler(formData.title);
        if(result) {
            setFilteredRecipes(result);
            clearData()
            navigate(`?title=${encodeURIComponent(formData.title)}`, { replace: true });
        }
    }

    const { formData, onChangeHandler, onSubmitHandler, clearData } = useForm(initialValues, searchSubmitHandler);

    const isPreloading = isFetching || isLoading;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Calculate indices for the current page
    // const indexOfLastRecipe = currentPage * itemsPerPage;
    // const indexOfFirstRecipe = indexOfLastRecipe - itemsPerPage;
    // const currentRecipes = filteredRecipes ? filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe) : []
    const currentRecipes = Array.isArray(filteredRecipes) ? 
        filteredRecipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
    <>
        {isPreloading ? <Preloader /> :
            <>
            <Breadcrumb title="Healthy Recipes" page="Healthy Recipes" breadcrumbImage="img/recipe-bg2.jpg"/>
    
            <section className={styles.recipesSection}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-8 p-0`}>
                            <div className={`${styles.sectionTitle} section-title`}>
                                <h2>Healthy High Protein Recipes</h2>
                            </div>
                            {currentRecipes.length > 0 ? currentRecipes.map(recipe => (
                                <RecipeItem 
                                    className={styles.itemC}
                                    key={recipe._id}
                                    title={recipe.title}
                                    imageUrl={recipe.imageUrl}
                                    author={recipe.author.username}
                                    recipeId={recipe._id}
                                />
                            )) 
                                : <h2 className={`${styles.sectionTitle} section-title`}>There are no posts available</h2>
                            }
                            
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
                    </div>
                </div>
            </section>
            </>
        }
    </>
    );
};
