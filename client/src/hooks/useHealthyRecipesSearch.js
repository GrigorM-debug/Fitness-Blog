import { useState } from "react";
import healthyRecipesSearchValidation from "../vaidations/helthyRecipesValidations/healthyRecipesSearchValidations";
import searchRecipe from "../api/healthyRecipesSearch_API";

export default function useHealthyRecipesSearch() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (title) => {

        const validationResult = healthyRecipesSearchValidation(title);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return;
        }

        try {
            setIsLoading(true);
            const result = await searchRecipe(title);
            console.log(result)
            setIsLoading(false); // Ensure this line is reached
            setErrors({})
            return result;
        } catch (err) {
            setIsLoading(false); // Ensure this line is reached in case of error
            setErrors({ serverError: err.message });
            return null;
        }
    };

    return [isLoading, searchHandler, errors];
}
