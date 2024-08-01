import { useState, useEffect } from "react";
import {getLikes, likePost} from '../api/blogPostLikes_API';

export function useLikePost() {
    const likeHandler = async (postId) => {
        try {
            await likePost(postId);
        } catch (err) {
            console.log(err)
        }
    }

    return likeHandler;
}

export function useGetLikes(postId) {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                const result = await getLikes(postId);
                setLikes(result)
                // setIsLiked(result.isLiked);
            } catch (err) {
                console.log(err);
            } 
        };
        fetchLikeStatus();
    }, [postId]);

    const updateLikes = async () => {
        const newLikesState = await getLikes(postId);
        setLikes(newLikesState);
    }

    return [likes, updateLikes];
}