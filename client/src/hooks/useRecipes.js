import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { createHelthyRecipesValidations } from "../vaidations/helthyRecipesValidations/createHealthyRecipesValidations";
import { createRecipe, deleteRecipe, editRecipe, getAll, getLatest, getOne } from "../api/recipes_API";


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
            setErrors({serverError: err.message});
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

    useEffect(() => {
        (async () => {
            try {
                const result = await getOne(recipeId);
                setRecipeData(result);
                setIsFetching(false);
            } catch (err) {
                console.log(err);
                setIsFetching(false);
                navigate('/404');
            }
        })();
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

export function useDeleteRecipe() {
    const [error, setError] = useState({});
    // const [isDeleted, setIsDeleted] = useState(false);

    const deleteHandler = async (recipeId) => {
        try {
            const result = await deleteRecipe(recipeId)
            // setIsDeleted(result);
            return result;
        } catch (err) {
            setError({serverError: err.message})
        }
    }

    return [error, deleteHandler]
}

export function useEditRecipe() {
    const [errors, setErrors] = useState({});

    const editRecipeHandler = async (recipeId, newData) => {
        const validationResult = createHelthyRecipesValidations(newData)

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult)
            return;
        }
        try {
            const result = await editRecipe(recipeId, newData);
            return result;
        } catch (err) {
            setError({serverError: err.message})
        }
    }

    return [errors, editRecipeHandler]
}