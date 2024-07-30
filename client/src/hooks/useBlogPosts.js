import { useState } from "react";
import { getAll, createPost, getOne} from "../api/blogPost_API";
import { blogPostsValidation } from "../vaidations/blogPostsValidations";
import { useNavigate } from "react-router";

//ToDo: Validatiions and error handeling like in useAuth Hook
export function useCreatePost() {
    const [isFetching, setIsFetching] = useState(false);
    const [errors, setErrors] = useState({});

    const createPostHandler = async (newPostData) => {
        const validationResult = blogPostsValidation(newPostData);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return false;
        }

        try {
            setIsFetching(true)
            await createPost(newPostData);
            return true;
        } catch (err) {
            setIsFetching(false);
            setErrors({serverError: err.mesaage});
            return false;
        }
    }

    return [createPostHandler, isFetching, errors];
}

export async function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    setIsFetching(true);
    const result = await getAll();
    setIsFetching(false);

    setPosts(result);

    return [posts, isFetching];
}

//ToDo: error handeling like in useAuth Hook
//If there is no post with given id server return 404 not found
// So try catch and on errot navigate to 404 page
export async function useGetOneBlogPost(postId) {
    const [post, setPost] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    const navigate = useNavigate();

    try {
        isFetching(true);
        const result = await getOne(postId);
        setPost(result);
        //Todo: navigated to details page
    } catch(err) {
        isFetching(false);
        navigate('/404');
    }

    return [post, isFetching];
}