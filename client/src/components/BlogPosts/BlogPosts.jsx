import Pagination from "../Pagination/Pagination";
import BlogItem from "./BlogItem/BlogItem";
import styles from './BlogPosts.module.css';
import SideBar from "./SideBar/SideBar";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Preloader from "../Preloader/Preloader";
import { useGetLatest } from "../../hooks/useBlogPosts";

export default function BlogPosts() {

    const [posts, isFetching] = useGetLatest();

    return (
        <>
        {isFetching ? <Preloader /> :
            <>
            <Breadcrumb title="Our Blog" page="Our Blog" breadcrumbImage="img/gallery/gallery-1.jpg"/>

            <section className={styles.blogSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0">
                            <div className={`${styles.sectionTitle} section-title`}>
                                <h2>Our Blog Posts</h2>
                            </div>
                            {posts.length > 0 
                                ? posts.map((post) => (
                                        <BlogItem 
                                            key={post._id}
                                            id={post._id}
                                            title={post.title}
                                            creator={post.author.username}
                                            imageUrl={post.imageUrl}
                                            shortDescription={post.shortDescription}
                                            category={post.category}
                                            createdOn={post._createdOn}
                                        />
                                    ))
                                : <h2 className={`${styles.sectionTitle} section-title`}>There is no posts added</h2>
                            }
                            
                            <Pagination />
                        </div>
                        <SideBar />
                    </div>
                </div>
            </section>
        /</>
        }
        </>
    );
};