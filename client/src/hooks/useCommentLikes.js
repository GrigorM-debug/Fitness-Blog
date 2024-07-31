import { likeComment } from "../api/commentsLikes_API";

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