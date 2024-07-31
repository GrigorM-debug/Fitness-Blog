import { useEffect, useState, useCallback } from "react";
import commentsFormValidations from "../vaidations/commentsFormValidations";
import {createComment, getAll} from "../api/blogPostsComments_API";

export function useGetAll(postId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await getAll(postId);
                setComments(result);
            } catch (err) {
                console.error("Failed to fetch comments:", err);
            } 
        })();
    }, [postId]);

    const updateComments = async () => {
        const newCommentsState = await getAll(postId);
        setComments(newCommentsState);
    }

    return [comments, updateComments];
}

export function useCreateComment() {
    const [errors, setErrors] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const createCommentHandler = async (postId, text) => {
        const validationResult = commentsFormValidations(text);

        if (Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return;
        }

        setIsFetching(true);
        try {
            const result = await createComment(postId, text);
            return result;
        } catch (err) {
            setErrors({ serverError: err.message });
        } finally {
            setIsFetching(false);
        }
    };

    return [createCommentHandler, errors, isFetching];
}