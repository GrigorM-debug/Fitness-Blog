import styles from './BlogDetailsCreatorSection.module.css'

export default function BlogDetailsCreatorSection() {
    return (
        <div className={styles.blogDetailsAuthor}>
            <div className={styles.baPic}>
                <img src="img/blog/details/blog-profile.jpg" alt="" />
            </div>
            <div className={styles.baText}>
                <h5>Lena Mollein.</h5>
                <h6>Email: lana@abv.bg</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation.
                </p>
                {/* <div className="bp-social">
                    <a href="#">
                        <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                        <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                        <i className="fa fa-youtube-play" />
                    </a>
                </div> */}
            </div>
        </div>
    );
};