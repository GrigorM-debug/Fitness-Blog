import styles from './AuthorButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DeleteAlertModal from '../../DeleteAlertModal/DeleteAlertModal';
import { useDeletePost } from '../../../hooks/useBlogPosts';
import SuccessfullyDeletedModal from '../../SuccessfullyDeletedModal/SuccessfullyDeletedModal';

export default function AuthorButtons({
    itemTitle,
    itemId
}) {

    const [isDeleteAlertModalOpen, setDeleteAlertModalOpen] = useState(false);
    const [isDeleteSuccesfullyModalOpen, setDeleteSuccesfullyModalOpen] = useState(false);


    const openDeleteAlertModal = () => setDeleteAlertModalOpen(true);
    const closeDeleteAlertModal = () => setDeleteAlertModalOpen(false);

    const openSuccessfullyDeletedModal = () => setDeleteSuccesfullyModalOpen(true);
    const closeSuccessfullyDeletedModal = () => setDeleteSuccesfullyModalOpen(false);

    const [error, deleteHandler] = useDeletePost();


    const handleDelete = async () => {
        //Call Delete method. If seccess show Successfully Deleted Modal
        const success = await deleteHandler(itemId)

        if(success) {
            closeDeleteAlertModal();
            openSuccessfullyDeletedModal();
        }
    };

    const [isEditAlertModalOpen, setisEditAlertModalOpen] = useState(false);
    const [isEditSuccessfullyModalOpen, setIsEditSuccessfullyModalOpen] = useState(false)

    const openEditAlertModal = () => setisEditAlertModalOpen(true)
    const closeSuccessfullyEditedModal = () => setIsEditSuccessfullyModalOpen(true);

    

    return (
        <>
            <div className={styles.authButtons}>
                <button type='submit'>
                    Edit
                    <FontAwesomeIcon icon={faEdit} style={{color: "#ffffff", marginLeft: '0.5em'} } />
                </button>
                <button onClick={openDeleteAlertModal}>
                    Delete
                    <FontAwesomeIcon icon={faTrash} style={{marginLeft: '0.5em'}}/>
                </button>
            </div>

            <DeleteAlertModal 
                isOpen={isDeleteAlertModalOpen}
                onClose={closeDeleteAlertModal}
                onConfirm={handleDelete}
                itemTitle={itemTitle}
                errorMessage={error.serverError}
            />

            <SuccessfullyDeletedModal 
                isOpen={isDeleteSuccesfullyModalOpen}
                onClose={closeSuccessfullyDeletedModal}
            />
        </>
    );
};