import { useState, useEffect} from "react";
import { getAll, createPost, getOne} from "../api/blogPost_API";
import { blogPostsValidation } from "../vaidations/blogPostsValidations";
import { useNavigate } from "react-router";

//ToDo: Validatiions and error handeling like in useAuth Hook
export function useCreatePost() {
    const [isFetching, setIsFetching] = useState(false);
    const [errors, setErrors] = useState({});
    const [postId, setPostId] = useState(null);

    const createPostHandler = async (newPostData) => {
        const validationResult = blogPostsValidation(newPostData);

        if(Object.keys(validationResult).length > 0) {
            setErrors(validationResult);
            return null;
        }

        try {
            // setIsFetching(true)
            const {_id} =  await createPost(newPostData);
            setPostId(_id);
            return postId;
        } catch (err) {
            setIsFetching(false);
            setErrors({serverError: err.mesaage});
            return null;
        }
    }

    return [createPostHandler, isFetching, errors];
}

export async function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // setIsFetching(true);
    const result = await getAll();
    // setIsFetching(false);

    setPosts(result);

    return [posts, isFetching];
}

export function useGetOneBlogPost(postId) {
    const [postData, setPostData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                // setIsFetching(true);
                const result = await getOne(postId);
                setPostData(result);
                setIsFetching(false);  // Set isFetching to false after setting postData
            } catch (err) {
                setIsFetching(false);
                navigate('/404');
            }
        }

        fetchPost();
    }, [postId, navigate]);

    return [postData, isFetching];
}