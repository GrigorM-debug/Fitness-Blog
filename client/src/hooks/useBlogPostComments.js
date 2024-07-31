import { useState } from "react";
import commentsFormValidations from "../vaidations/commentsFormValidations";
import {createComment} from "../api/blogPostsComments_API";

export function useGetAll() {

}

export function useCreateComment() {
    const [newComment, setNewComment] = useState({})
    const [errors, setErrors] = useState({});

    const createCommentHandler = async (postId, text) => {

        console.log(`Hook is getting this ${postId} ${text}`)

        const validationResult = commentsFormValidations(text);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return;
        }

        try {
            const result = await createComment(postId, text);
            setNewComment(result);
        } catch (err) {
            setErrors({serverError: err.message});
        }
    }

    return [createCommentHandler, errors];
}