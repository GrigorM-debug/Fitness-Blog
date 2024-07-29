import { useState } from "react";
import { getAll, createPost} from "../api/blogPost_API";

export function useCreatePost() {
    const createPostHandler = async (newPostData) => {
        await createPost(newPostData);
    }

    return createPostHandler;
}

export async function useGetAllPosts() {
    const [posts, setPosts] = useState([]);

    const result = await getAll();

    setPosts(result);

    return posts
}