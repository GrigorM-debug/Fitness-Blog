import { useState } from "react";
import searchPost from "../api/blogPostsSearch_API";

export default function useBlogPostsSearch() {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const searchHandler = async (postTitle, postCategory) => {
        try {
            setIsLoading(true);
            const result = await searchPost(postTitle, postCategory);
            setIsLoading(false); // Ensure this line is reached
            return result;
        } catch (err) {
            setIsLoading(false); // Ensure this line is reached in case of error
            setErrors({ serverError: err.message });
        }
    };

    return [isLoading, searchHandler];
}
