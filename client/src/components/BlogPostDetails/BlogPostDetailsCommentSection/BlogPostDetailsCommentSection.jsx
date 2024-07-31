import styles from './BlogPostDetailsCommentSection.module.css';
import useForm from '../../../hooks/useForm';
import { useCreateComment, useGetAll } from '../../../hooks/useBlogPostComments';
import CommentItem from './CommentItem/CommentItem';
import Preloader from '../../Preloader/Preloader';
import UserContext from '../../../contexts/userContext';
import LeaveComment from './LeaveCommentSection/LeaveComment';
import { useContext } from 'react';

export default function BlogPostDetailsCommentSection({
    postId,
    isAuthenticated
}) {
    const initialValues = {
        comment: ''
    }

    const [comments, updateComments] = useGetAll(postId);
    
    const [createCommentHandler, errors, isFetching] = useCreateComment();

    
    const onSubmit = async ({comment}) => {
        const newComment = await createCommentHandler(postId, comment);
        if (newComment) {
            updateComments();
        }
    }


    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, onSubmit);

    return (
        <>
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comment</h5>
                    {isFetching ? (
                        <Preloader />
                    ) : (
                        comments.map((comment) => (
                            <CommentItem 
                                key={comment._id}
                                author={comment.author.username}
                                authorProfilePic={comment.author.imageUrl}
                                text={comment.text}
                                commentId={comment._id}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="col-lg-6">
                    <LeaveComment
                        onChangeHandler={onChangeHandler}
                        onSubmitHandler={onSubmitHandler}
                        formData={formData}
                        isDisabled={!isAuthenticated}
                        errors={errors}
                    />
            </div>
        </div>
        </>
    );
};