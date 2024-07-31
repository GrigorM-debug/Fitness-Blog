import styles from './BlogPostDetailsCommentSection.module.css';
import useForm from '../../../hooks/useForm';
import { useCreateComment, useGetAll } from '../../../hooks/useBlogPostComments';
import CommentItem from './CommentItem/CommentItem';
import Preloader from '../../Preloader/Preloader';

export default function BlogPostDetailsCommentSection({
    postId
}) {
    const initialValues = {
        comment: ''
    }
    const comments = useGetAll(postId);
    
    const [createCommentHandler, errors, isFetching] = useCreateComment();

    
    const onSubmit = async ({comment}) => {
         await createCommentHandler(postId, comment);
    }

    console.log(isFetching)

    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, onSubmit);

    return (
        <>
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comment</h5>
                    {isFetching ? (
                        <Preloader/>
                    ) : (
                        comments.map((comment) => (
                            <CommentItem 
                                key={comment.id}
                                author={comment.author.username}
                                authorProfilePic={comment.author.imageUrl}
                                text={comment.text}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.leaveComment}>
                    <h5>Leave a comment</h5>
                    <form onSubmit={onSubmitHandler}>
                        <textarea
                            name='comment' 
                            placeholder="Comment" 
                            onChange={onChangeHandler}
                            value={formData.comment}
                        />    
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};