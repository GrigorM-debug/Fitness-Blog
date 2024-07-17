import Pagination from "../Pagination/Pagination";
import BlogItem from "./BlogItem/BlogItem";
import styles from './BlogPosts.module.css';
import SideBar from "./SideBar/SideBar";

export default function BlogPosts() {
    const posts = [
        {
            title: 'Article Title',
            creator: 'Creator Name',
            bannerImage: '/img/blog/blog-1.jpg',
            image: '/img/blog/blog-1.jpg',
            link: '#',
            content: 'Article content',
            category: 'Training',
            createdOn: 'Date created',
            updatedOn: 'Update date',
        },
        {
            title: 'Article Title',
            creator: 'Creator Name',
            bannerImage: '/img/blog/blog-1.jpg',
            image: '/img/blog/blog-1.jpg',
            link: '#',
            content: 'Article content',
            category: 'Training',
            createdOn: 'Date created',
            updatedOn: 'Update date',
        },
        {
            title: 'Article Title',
            creator: 'Creator Name',
            bannerImage: '/img/blog/blog-1.jpg',
            image: '/img/blog/blog-1.jpg',
            link: '#',
            content: 'Article content',
            category: 'Training',
            createdOn: 'Date created',
            updatedOn: 'Update date',
        },
        {
            title: 'Article Title',
            creator: 'Creator Name',
            bannerImage: '/img/blog/blog-1.jpg',
            image: '/img/blog/blog-1.jpg',
            link: '#',
            content: 'Article content',
            category: 'Training',
            createdOn: 'Date created',
            updatedOn: 'Update date',
        }
    ];
    return (
        <section className={styles.blogSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 p-0">
                        {posts.map((item, index) => (
                            <BlogItem 
                                key={index}
                                title={item.title}
                                creator={item.creator}
                                bannerImage={item.bannerImage}
                                link={item.link}
                                content={item.content}
                                category={item.category}
                                createdOn={item.createdOn}
                            />
                        ))}
                        
                        
                        <Pagination />
                    </div>
                    <SideBar />
                </div>
            </div>
            </section>

    );
};