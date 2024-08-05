import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './AuthButtons.module.css';
import { useState } from 'react';
import DeleteAlertModal from '../../DeleteAlertModal/DeleteAlertModal';
import SuccessfullyDeletedModal from '../../SuccessfullyDeletedModal/SuccessfullyDeletedModal';
import { useDeleteRecipe } from '../../../hooks/useRecipes';

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

    // const [error, deleteHandler] = useDeletePost();
    const [error, deleteHandler] = useDeleteRecipe();

    const handleDelete = async () => {
        //Call Delete method. If seccess show Successfully Deleted Modal
        const success = await deleteHandler(itemId)

        if(success) {
            closeDeleteAlertModal();
            openSuccessfullyDeletedModal();
        }
    };

    return (
        <>
        <div className={styles.authButtons}>
            <Link to="#">
                Edit
                <FontAwesomeIcon icon={faEdit} style={{color: "#ffffff", marginLeft: '0.5em'} } />
            </Link>
            <Link onClick={openDeleteAlertModal}>
                Delete
                <FontAwesomeIcon icon={faTrash} style={{marginLeft: '0.5em'}}/>
            </Link>
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