import { useCreateReply, useGetReplies } from '../../../../hooks/useCommentsReplies';
import styles from './CommentItem.module.css';
import { useState, useContext} from 'react';
import useForm from '../../../../hooks/useForm';
import Preloader from '../../../Preloader/Preloader';
import ReplyForm from './ReplyForm/ReplyForm';
import ReplyItem from './ReplyItem/ReplyItem';
import UserContext from '../../../../contexts/userContext';

export default function CommentItem({
    author,
    authorProfilePic,
    text,
    commentId
}) {
    const {contextData} = useContext(UserContext);

    const isAuthenticated = contextData.isAuthenticated;

    const initialValues = {
        reply: ''
    }

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

    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialValues, handleReplySubmit);

    return (
        <div className={styles.coItem}>
            <div className={styles.coWidget}>
                {/* <a href="#"><i className="fa fa-heart-o"></i></a> */}
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

            {/* Comment  */}
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
                    replies.map((reply) => (
                        // <div className={`${styles.coItem} ${styles.replyComment}`}>
                        //     <div className={styles.coPic}>
                        //         <img src={reply.author.imageUrl} alt=""/>
                        //         <h5>{reply.author.username}</h5>
                        //     </div>
                        //     <div className={styles.coText}>
                        //         <p>
                        //             {reply.text}
                        //         </p>
                        //     </div>
                        // </div>

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