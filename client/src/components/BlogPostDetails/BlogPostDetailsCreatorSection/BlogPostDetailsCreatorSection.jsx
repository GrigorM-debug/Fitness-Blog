import styles from './BlogDetailsCreatorSection.module.css'

export default function BlogDetailsCreatorSection({
    name,
    email,
    description,
    imageUrl
}) {
    return (
        <div className={styles.blogDetailsAuthor}>
            <div className={styles.baPic}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.baText}>
                <h5>{name}</h5>
                <h6>Email: {email}</h6>
                <p>
                    {description}
                </p>
                <div className="bp-social">
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
                </div>
            </div>
        </div>
    );
};