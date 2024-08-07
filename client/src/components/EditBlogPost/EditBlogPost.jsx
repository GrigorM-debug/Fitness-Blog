import { PhotoIcon } from '@heroicons/react/24/solid';
import { useParams } from 'react-router-dom';
import { useEditPost, useGetOneBlogPost } from '../../hooks/useBlogPosts';
import Preloader from '../Preloader/Preloader';
import useForm from '../../hooks/useForm';
import EditAlertModal from '../EditAlertModal/EditAlertModal';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import SuccessfullyEditedModal from '../SuccessfullyEditedModal/SuccessfullyEditedModal';
import styles from './EditBlogPost.module.css';

export default function EditBlogPost() {
    const {postId} = useParams();

    const [postData, isFetching] = useGetOneBlogPost(postId);

    const [errors, editPostHandler] = useEditPost();
    
    const [isEditAlertModalOpen, setisEditAlertModalOpen] = useState(false);
    const [isEditSuccessfullyModalOpen, setIsEditSuccessfullyModalOpen] = useState(false)
    
    const openEditAlertModal = () => setisEditAlertModalOpen(true)
    const closeEditAlertModal = () => setisEditAlertModalOpen(false);
    
    const openSuccessfullyEditedModal = () => setIsEditSuccessfullyModalOpen(true)
    const closeSuccessfullyEditedModal = () => setIsEditSuccessfullyModalOpen(false);
    
    useEffect(() => {
        if(Object.keys(errors).length > 0) {
            closeEditAlertModal();
        }
    }, [errors]);

    const editPostCallback = async (formData) => {
        const success = await editPostHandler(postId, formData);

        if(success) {
            clearData()
            closeEditAlertModal();
            openSuccessfullyEditedModal();
        }
    }

    const {formData, onChangeHandler, onSubmitHandler, clearData} = useForm(postData, editPostCallback)
    
    return (
        <>
        {isFetching && <Preloader />}
        <Breadcrumb title="Edit Blog Post" page="Edit Blog Post" breadcrumbImage="img/coaches-bg.jpg"/>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-900">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className="text-red-600">{errors ? errors.serverError : ''}</p>
                <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='mb-2'>
                            <label htmlFor="title" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                                Title
                            </label>
                            <p className="text-red-600">{errors ? errors.title : ''}</p>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    className={`p-2 block w-full rounded-md border-2 ${errors.title ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    onChange={onChangeHandler}
                                    value={formData.title}
                                />
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="categories" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>Select a category</label>
                            <p className="text-red-600">{errors ? errors.category : ''}</p>
                            <select 
                                value={formData.category}
                                onChange={onChangeHandler}
                                id="categories" 
                                name="category"
                                className={`p-2 block w-full rounded-md border-2 ${errors.category ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            >
                                <option value="Choose a category">Choose a category</option>
                                <option value="training">Training</option>
                                <option value="competitions">Competitions</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="healthAndRecovery">Health & Recovery</option>
                            </select>
                        </div>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="title" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                            SubTitle
                        </label>
                        <p className="text-red-600">{errors ? errors.subTitle : ''}</p>
                        <div className="mt-2">
                            <input
                                id="subTitle"
                                name="subTitle"
                                className={`p-2 block w-full rounded-md border-2 ${errors.subTitle ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                onChange={onChangeHandler}
                                value={formData.subTitle}
                            />
                        </div>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="shortDesctiption" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                        Short Description
                        </label>
                        <p className="text-red-600">{errors ? errors.shortDescription : ''}</p>
                        <div className="mt-2">
                            <textarea
                                id="shortDescription"
                                name="shortDescription"
                                rows={3}
                                className={`p-2 block w-full rounded-md border-2 ${errors.shortDescription ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                onChange={onChangeHandler}
                                value={formData.shortDescription}
                            />
                        </div>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="content" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                            Content
                        </label>
                        <p className="text-red-600">{errors ? errors.content : ''}</p>
                        <div className="mt-2">
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                className={`p-2 block w-full rounded-md border-2 ${errors.content ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                onChange={onChangeHandler}
                                value={formData.content}
                            />
                        </div>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="photo" className="block text-sm font-bold leading-6 text-white">
                            Image Url
                        </label>
                        <p className="text-red-600">{errors ? errors.imageUrl : ''}</p>
                        <div className="mt-2 flex items-center gap-x-3">
                            <PhotoIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                            <input
                                id="imageUrl"  
                                name="imageUrl"  
                                placeholder='Write image Url'
                                className={`p-2 block w-full rounded-md border-2 ${errors.imageUrl ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                onChange={onChangeHandler}
                                value={formData.imageUrl}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={openEditAlertModal}
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

            <EditAlertModal 
                isOpen={isEditAlertModalOpen}
                onClose={closeEditAlertModal}
                onConfirm={() => editPostCallback(formData)}
                itemTitle={postData.title}
                // errorMessage={errors && errors.serverError}
            />

            <SuccessfullyEditedModal 
                isOpen={isEditSuccessfullyModalOpen}
                onClose={closeSuccessfullyEditedModal}
                link={`/blog/${postId}/details`}
            />
        </>
    );
};