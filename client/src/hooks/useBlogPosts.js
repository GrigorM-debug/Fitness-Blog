import { useState, useEffect} from "react";
import { createPost, getOne, getLatest, getAll, deletePost} from "../api/blogPost_API";
import { useNavigate } from "react-router";
import { blogPostsValidation } from "../vaidations/blogPostsValidations/blogPostsValidations";

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
            return _id;
        } catch (err) {
            setIsFetching(false);
            setErrors({serverError: err.message});
            return null;
        }
    }

    return [createPostHandler, isFetching, errors];
}

export function useGetAllPosts() {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await getAll();
            setPosts(result);
            setIsFetching(false);
        })();
    }, []);

    return [posts, isFetching];
}

export function useGetOneBlogPost(postId) {
    const [postData, setPostData] = useState({});
    const [isFetching, setIsFetching] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                const result = await getOne(postId);
                setPostData(result);
                setIsFetching(false);
                console.log(postData)
            } catch (err) {
                setIsFetching(false);
                navigate('/404');
            }
        }

        fetchPost();
    }, [postId]);


    return [postData, isFetching];
}

export function useGetLatest() {
    const [latestPosts, setLatestPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await getLatest();
                setLatestPosts(result);
                setIsFetching(false);
            } catch (err) {
                console.log(err);
                setIsFetching(false);
            }
        })();
    }, [])

    return [latestPosts, isFetching]
}

export function useDeletePost() {
    const [error, setError] = useState({});
    // const [isDeleted, setIsDeleted] = useState(false);

    const deleteHandler = async (postId) => {
        try {
            const result = await deletePost(postId)
            // setIsDeleted(result);
            console.log(result)
            return result;
        } catch (err) {
            setError({serverError: err.message})
        }
    }

    return [error, deleteHandler]
}