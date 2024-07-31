import { useState, useEffect } from "react";
import { getLikes, likeComment } from "../api/commentsLikes_API";

export function useLikeCommend() {
    const likeHandler = async (commentId) => {
        try {
            await likeComment(commentId);
        } catch (err) {
            console.log(err)
        }
    }

    return likeHandler;
}

export function useGetLikeStatus(commentId) {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                const result = await getLikes(commentId);
                setLikes(result)
                // setIsLiked(result.isLiked);
            } catch (err) {
                console.log(err);
            } 
        };
        fetchLikeStatus();
    }, [commentId]);

    const updateLikes = async () => {
        const newLikesState = await getLikes(commentId);
        setLikes(newLikesState);
    }

    return [likes, updateLikes];
}