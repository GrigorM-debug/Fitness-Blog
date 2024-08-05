import CommentItem from "./CommentItem/CommentItem";
import LeaveComment from "./LeaveCommentSection/LeaveComment";
import styles from './HealthyRecipeDetailsCommentSection.module.css';
import { useCreateComment, useGetAll } from "../../../hooks/useRecipesComments";
import useForm from "../../../hooks/useForm";
import Preloader from "../../Preloader/Preloader";

const initialValues = {
    comment: ''
}

export default function HealthyRecipeDetailsCommentSection({
    recipeId,
    isAuthenticated,
}) {

    const [comments, updateComments, isFetchingComments] = useGetAll(recipeId);
    
    const [createCommentHandler, errors, isFetchingNewComment] = useCreateComment();

    
    const onSubmit = async ({comment}) => {
        const newComment = await createCommentHandler(recipeId, comment);
        if (newComment) {
            updateComments();
        }
    }


    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, onSubmit);

    const isProcessing = isFetchingComments || isFetchingNewComment;

    return (
        <div className="row">
            <div className="col-lg-6">
                <div className={styles.commentOption}>
                    <h5 className={styles.coTitle}>Comment</h5>
                    {isProcessing ? (
                        <Preloader />
                    ) : (
                        comments && comments.length > 0 ? comments.map((comment) => (
                            <CommentItem 
                                key={comment._id}
                                author={comment.author.username}
                                authorId={comment.author._id}
                                authorProfilePic={comment.author.imageUrl}
                                text={comment.text}
                                commentId={comment._id}
                            />
                        ))
                        : <h3>No comments yet</h3>
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
    );
};