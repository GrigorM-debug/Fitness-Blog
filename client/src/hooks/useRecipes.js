import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import { createHelthyRecipesValidations } from "../vaidations/helthyRecipesValidations/createHealthyRecipesValidations";
import { createRecipe, getAll, getLatest, getOneRecipe } from "../api/recipes_API";


export function useCreateRecipe() {
    const [isFetching, setIsFetching] = useState(false);
    const [errors, setErrors] = useState({});
    const [recipeId, setRecipeId] = useState(null);

    const createRecipeHandler = async (newRecipeData) => {
        const validationResult = createHelthyRecipesValidations(newRecipeData);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return null;
        }

        try {
            // setIsFetching(true)
            const {_id} =  await createRecipe(newRecipeData);
            setRecipeId(_id);
            return _id;
        } catch (err) {
            setIsFetching(false);
            setErrors({serverError: err.mesaage});
            return null;
        }
    }

    return [createRecipeHandler, isFetching, errors];
}

export function useGetAllRecipes() {
    const [recipes, setRecipes] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await getAll();
            setRecipes(result);
            setIsFetching(false);
        })();
    }, []);

    return [recipes, isFetching];
}

export function useGetOneRecipe(recipeId) {
    const [recipeData, setRecipeData] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const navigate = useNavigate();

    console.log(recipeId)
    useEffect(() => {
        async function fetchRecipe() {
            console.log(recipeId)
            try {
                console.log(recipeId)
                const result = await getOneRecipe(recipeId);
                setRecipeData(result);
                setIsFetching(false);
            } catch (err) {
                setIsFetching(false);
                navigate('/404');
            }
        }

        fetchRecipe();
    }, [recipeId]);


    return [recipeData, isFetching];
}

export function useGetLatestRecipes() {
    const [latestRecipes, setLatestRecipes] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await getLatest();
                setLatestRecipes(result);
                setIsFetching(false);
            } catch (err) {
                setIsFetching(false);
            }
        })();
    }, [])

    return [latestRecipes, isFetching]
}