import styles from './AuthorButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import DeleteAlertModal from '../../DeleteAlertModal/DeleteAlertModal';

export default function AuthorButtons({
    itemTitle
}) {

    const [isDeleteAlertModalOpen, setDeleteAlertModalOpen] = useState(false);

    const openDeleteAlertModal = () => setDeleteAlertModalOpen(true);
    const closeDeleteAlertModal = () => setDeleteAlertModalOpen(false);

    const handleDelete = () => {
    
        // Handle the delete action here (e.g., call an API)
        console.log('Item deleted');
        //Call Delete method. If seccess show Successfully Deleted Modal
        closeDeleteAlertModal();
    };

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
            />
        </>
    );
};