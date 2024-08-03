import { useEffect, useState } from "react";
import commentsFormValidations from'../vaidations/commentsFormValidations';
import { getAll, createComment } from "../api/recipesComments_API";

export function useGetAll(recipeId) {
    const [comments, setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll(recipeId);
                setComments(result);
            } catch (err) {
                console.error("Failed to fetch comments:", err);
            } finally {
                setIsFetchingComments(false);
            }
        })();
    }, [recipeId]);

    const updateComments = async () => {
        const newCommentsState = await getAll(recipeId);
        setComments(newCommentsState);
    }

    return [comments, updateComments, isFetchingComments];
}

export function useCreateComment() {
    const [errors, setErrors] = useState({});
    const [isFetchingNewComment, setIsFetchingNewComment] = useState(false);

    const createCommentHandler = async (recipeId, text) => {
        const validationResult = commentsFormValidations(text);

        if (Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return;
        }

        setIsFetchingNewComment(true);
        try {
            const result = await createComment(recipeId, text);
            return result;
        } catch (err) {
            setErrors({ serverError: err.message });
        } finally {
            setIsFetchingNewComment(false);
        }
    };

    return [createCommentHandler, errors, isFetchingNewComment];
}