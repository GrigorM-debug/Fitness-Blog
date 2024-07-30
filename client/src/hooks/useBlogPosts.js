import { useState, useEffect} from "react";
import { createPost, getOne, getLatest} from "../api/blogPost_API";
import { blogPostsValidation } from "../vaidations/blogPostsValidations";
import { useNavigate } from "react-router";

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

// export function useGetAllPosts() {
//     const [posts, setPosts] = useState([]);
//     const [isFetching, setIsFetching] = useState(false);

//     useEffect(() => {
//         (async () => {
//             setIsFetching(true);
//             const result = await getAll();
//             setPosts(result);
//             setIsFetching(false);
//         })();
//     }, []);

//     return [posts, isFetching];
// }

export function useGetOneBlogPost(postId) {
    const [postData, setPostData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsFetching(true);
                const result = await getOne(postId);
                setPostData(result);
                setIsFetching(false);
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
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);
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