import { useCreateReply, useGetReplies } from '../../../../hooks/useCommentsReplies';
import styles from './CommentItem.module.css';
import { useState, useContext, useEffect} from 'react';
import useForm from '../../../../hooks/useForm';
import Preloader from '../../../Preloader/Preloader';
import ReplyForm from './ReplyForm/ReplyForm';
import ReplyItem from './ReplyItem/ReplyItem';
import UserContext from '../../../../contexts/userContext';
import { useGetLikes, useLikeCommend } from '../../../../hooks/useCommentLikes';

const initialValues = {
    reply: ''
}

export default function CommentItem({
    author,
    authorProfilePic,
    text,
    commentId,
    authorId
}) {
    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;
    const userId = contextData._id;

    const [isReplying, setIsReplying] = useState(false);
    const [replies, updateReplies] = useGetReplies(commentId);

    const [addReply, isFetching, errors] = useCreateReply();
    
    const handleReplySubmit = async ({reply}) => {
        const newReply = await addReply(commentId, reply);
        if(newReply) {
            updateReplies();
            setIsReplying(false);
        }
        // setIsReplying(false); 
    };

    const likeHandler = useLikeCommend();

    const handleLikeClick = async (commentId) => {
        await likeHandler(commentId);
        updateLikes()
    }

    const [likes, updateLikes] = useGetLikes(commentId);

    const [isLiked, setIsLiked] = useState(false);
    const [isLikeDisabled, setIsLikeDisabled] = useState(false);

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

    // console.log(isLiked)
    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, handleReplySubmit);

    const isCommentAuthor = userId === authorId;

    return (
        <div className={styles.coItem}>
            <div className={styles.coWidget}>
                <a 
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        if(isAuthenticated && !isCommentAuthor) {
                            handleLikeClick(commentId);
                        }
                    }}
                    className={isLikeDisabled ? styles.disabled : ''}
                >
                    <i className={`fa ${isLiked ? 'fa-heart' : 'fa-heart-o'}`}></i>
                </a>
              
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        if (isAuthenticated) {
                            setIsReplying(!isReplying);
                        } // Prevent the default anchor behavior
                    }}
                >
                    <i className={`fa ${isReplying ? 'fa-times' : 'fa-share-square-o'}`}></i>
                </a>
            </div>

            <div className={styles.coPic} >
                <img src={authorProfilePic} alt="Author profile pic" />
                <h5>{author}</h5>
            </div>
            <div className={styles.coText}>
                <p>
                    {text}
                </p>
            </div>  

            {isReplying && (
                isAuthenticated && 
                    <ReplyForm 
                        onSubmit={onSubmitHandler} 
                        onChangeHandler={onChangeHandler} 
                        values={formData}
                        errors={errors}
                    />
            )}

            {/* Replies */}
            {isFetching ? (
                    < Preloader/>
                ) : (
                    replies && replies.length > 0 && replies.map((reply) => (
                        <ReplyItem 
                            key={reply._id}
                            authorProfilePic={reply.author.imageUrl}
                            authorName={reply.author.username}
                            text={reply.text}
                        />

                    ))
                )}
        </div>
    );
};