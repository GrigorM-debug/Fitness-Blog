import { useState, useEffect } from "react";
import { getReplies, createReply} from "../api/commentsReplies_API";
import commentsRepliesValidations from "../vaidations/commentsRepliesValidations";

export function useGetReplies(commentId) {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const fetchReplies = async () => {
            try {
                const result = await getReplies(commentId);
                setReplies(result);
            } catch (err) {
                console.error('Failed to fetch replies:', err);
            } 
        };

        fetchReplies();
    }, [commentId]);

    const updateReplies = async () => {
        const newRepliesState = await getReplies(commentId);
        setReplies(newRepliesState);
    }

    return [replies, updateReplies];
}

export function useCreateReply() {
    const [isFetching, setIsFetching] = useState(false);
    const [errors, setErrors] = useState({})


    const addReply = async (commentId, text) => {
        const validationResult = commentsRepliesValidations(text);

        if (Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return null;
        }

        setIsFetching(true)
        try {
            const newReply = await createReply({commentId, text});
            return newReply;
        } catch (err) {
            console.error('Failed to create reply:', err);
            setErrors({serverError: err.message});
        } finally {
            setIsFetching(false)
        }
    };

    return [addReply, isFetching, errors]
}