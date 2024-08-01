import BlogPostDetailsCommentSection from "./BlogPostDetailsCommentSection/BlogPostDetailsCommentSection";
import BlogDetailsCreatorSection from "./BlogPostDetailsCreatorSection/BlogPostDetailsCreatorSection";
import styles from './BlogDetails.module.css';
import BlogPostDetailsHero from "./BlogPostDetailsHero/BlogPostDetailsHero";
import { useParams } from "react-router";
import { useGetOneBlogPost } from "../../hooks/useBlogPosts";
import Preloader from "../Preloader/Preloader";
import { useContext, useState, useEffect} from "react";
import UserContext from "../../contexts/userContext";
import { useGetAll } from "../../hooks/useBlogPostComments";
import AuthorButtons from "./AuthorButtons/AuthorButtons";
import LikeButton from "./LikeButton/LikeButton";
import { useGetLikes, useLikePost } from "../../hooks/usePostLikes";

export default function BlogPostDetails() {
    const {blogPostId} = useParams();
    const [post, isFetching] = useGetOneBlogPost(blogPostId);

    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;
    const userId = contextData._id;

    //Taking the comments to dispay their count in hero section
    //Invoke updateComments function to update the comments when new
    //comment is added. Commets count is also updated in hero section
    //Wihout calling the function Comments count updates only after refresh (re-render)
    const [comments, updateComments] = useGetAll(blogPostId);
    updateComments();

    //Check if user is post author 
    const isAuthor = userId === post._ownerId;
    const isUser = !!isAuthenticated;

    //Take the likes
    //Set is Liked and Disable Like Button when isLiked is true
    //ThumbsUp icons is with solid style with blue color. Before like is regular stylewith gray color.
    //When isLikeDisabled is true the Like button is disabled to prevent multiple likes by user
    //Button styles is changing to gray color for background when post is liked
    const [isLiked, setIsLiked] = useState(false);
    const [isLikeDisabled, setIsLikeDisabled] = useState(false);

    const [likes, updateLikes] = useGetLikes(blogPostId);
    const likeHandler = useLikePost();

    //Wihout this useEffect React gives a error for too many re-renders
    //So I put it as Side Effect
    useEffect(() => {
        if (likes.length > 0 && likes.some(like => like._ownerId === userId)) {
            setIsLiked(true);
            setIsLikeDisabled(true);
        } else {
            setIsLiked(false);
            setIsLikeDisabled(false);
        }
    }, [likes, userId]);

    const postId = post._id;

    const likeButtonHandler = async (e) => {
        e.preventDefault();
        await likeHandler(postId);
        updateLikes();
        console.log('Post is liked')
    }

    return (
        <>
        {isFetching ? <Preloader /> : 
            <>
            <BlogPostDetailsHero 
                title={post.title} 
                imageUrl={post.imageUrl} 
                category={post.category} 
                authorName={post.author.username}
                commentsCount={comments.length}
                likesCount={likes.length}
            />

            <section className={`${styles.blogDetailsSection} spad`}>
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 p-0 m-auto">
                        <div className={styles.blogPostDetailsText}>
                            <div className={styles.blogPostDetailsTitle}>
                                <h5>{post.subTitle}</h5>
                            </div>
                                <div className={styles.BlogPostDetailsDescription}>
                                    <p>
                                        {post.shortDescription}
                                    </p>
                                </div>
                                <div className={styles.blogPostDetailsPic}>
                                    <div className={styles.blogPostDetailsPicItem}>
                                        <img src={post.imageUrl} alt="" />
                                    </div>
                                </div>
                                <div className={styles.BlogPostDetailsMoreDescription}>
                                    <p>
                                        {post.content}
                                    </p>
                                </div>

                                {/* Like Button for Users and Edit and Delete for Authors*/}
                                {   isAuthor && <AuthorButtons /> }

                                {isUser 
                                    && !isAuthor 
                                    && <LikeButton 
                                        likeButtonHandler={likeButtonHandler}
                                        isLikeDisabled={isLikeDisabled}
                                        isLiked={isLiked}
                                    />}

                                <BlogDetailsCreatorSection 
                                    name={post.author.username}
                                    email={post.author.email} 
                                    description={post.description} 
                                    imageUrl={post.author.imageUrl}
                                />

                                <BlogPostDetailsCommentSection 
                                    postId={blogPostId}
                                    isAuthenticated={isAuthenticated}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        }
        </>
    );
};