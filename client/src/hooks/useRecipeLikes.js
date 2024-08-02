import { useState, useEffect } from "react";
import {getLikes, likePost} from '../api/recipesLikes_API';

export function useLikeRecipe() {
    const likeHandler = async (recipeId) => {
        try {
            await likePost(recipeId);
        } catch (err) {
            console.log(err)
        }
    }

    return likeHandler;
}

export function useGetLikes(recipeId) {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        const fetchLikeStatus = async () => {
            try {
                const result = await getLikes(recipeId);
                setLikes(result)
                // setIsLiked(result.isLiked);
            } catch (err) {
                console.log(err);
            } 
        };
        fetchLikeStatus();
    }, [recipeId]);

    const updateLikes = async () => {
        const newLikesState = await getLikes(recipeId);
        setLikes(newLikesState);
    }

    return [likes, updateLikes];
}