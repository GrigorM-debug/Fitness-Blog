import BlogPostDetailsCommentSection from "./BlogPostDetailsCommentSection/BlogPostDetailsCommentSection";
import BlogDetailsCreatorSection from "./BlogPostDetailsCreatorSection/BlogPostDetailsCreatorSection";
import styles from './BlogDetails.module.css';
import BlogPostDetailsHero from "./BlogPostDetailsHero/BlogPostDetailsHero";
import { useParams } from "react-router";
import { useGetOneBlogPost } from "../../hooks/useBlogPosts";
import Preloader from "../Preloader/Preloader";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

export default function BlogPostDetails() {
    const {blogPostId} = useParams();
    const [post, isFetching] = useGetOneBlogPost(blogPostId);

    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;

    return (
        <>
        {isFetching ? <Preloader /> : 
            <>
            <BlogPostDetailsHero 
                title={post.title} 
                imageUrl={post.imageUrl} 
                category={post.category} 
                authorName={post.author.username}
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