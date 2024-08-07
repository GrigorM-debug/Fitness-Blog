import { useState } from "react";
import searchPost from "../api/blogPostsSearch_API";
import blogPostsSearchValidations from "../vaidations/blogPostsValidations/blogPostsSearchValidations";

export default function useBlogPostsSearch() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (postTitle, postCategory) => {
        
        const validationResult = blogPostsSearchValidations(postTitle, postCategory);
        
        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return;
        }
        
        try {
            setIsLoading(true);
            const result = await searchPost(postTitle, postCategory);

            //Remove this
            console.log(result)

            setIsLoading(false); 
            setErrors({})
            return result;
        } catch (err) {
            setIsLoading(false); 
            setErrors({ serverError: err.message });
            return null;
        }
    };

    return [isLoading, searchHandler, errors];
}
