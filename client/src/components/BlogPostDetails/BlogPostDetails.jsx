import BlogPostDetailsCommentSection from "./BlogPostDetailsCommentSection/BlogPostDetailsCommentSection";
import BlogDetailsCreatorSection from "./BlogPostDetailsCreatorSection/BlogPostDetailsCreatorSection";
import styles from './BlogDetails.module.css';
import BlogPostDetailsHero from "./BlogPostDetailsHero/BlogPostDetailsHero";
import { useParams } from "react-router";
import { useGetOneBlogPost } from "../../hooks/useBlogPosts";
import Preloader from "../Preloader/Preloader";

export default function BlogPostDetails() {
    const {blogPostId} = useParams();

    const [post, isFetching] = useGetOneBlogPost(blogPostId);
    console.log(post)
    return (
        <>
        {isFetching && <Preloader />}

        <BlogPostDetailsHero 
            title={post[0].title} 
            imageUrl={post[0].imageUrl} 
            category={post[0].category} 
            authorName={post[0].author.username}
        />

        <section className={`${styles.blogDetailsSection} spad`}>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 p-0 m-auto">
                    <div className={styles.blogPostDetailsText}>
                        <div className={styles.blogPostDetailsTitle}>
                            <h5>{post[0].subTitle}</h5>
                        </div>
                            <div className={styles.BlogPostDetailsDescription}>
                                <p>
                                    {post[0].shortDescription}
                                </p>
                            </div>
                            <div className={styles.blogPostDetailsPic}>
                                <div className={styles.blogPostDetailsPicItem}>
                                    <img src={post[0].imageUrl} alt="" />
                                </div>
                            </div>
                            <div className={styles.BlogPostDetailsMoreDescription}>
                                <p>
                                    {post[0].content}
                                </p>
                            </div>

                            <BlogDetailsCreatorSection 
                                name={post[0].author.username}
                                email={post[0].author.email} 
                                description={post[0].description} 
                                imageUrl={post[0].author.imageUrl}/>

                            <BlogPostDetailsCommentSection />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};