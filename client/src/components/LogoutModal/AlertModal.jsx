// AlertModal.js
import React, { useContext } from 'react';
import { useLogout } from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/userContext';

export default function AlertModal({ isVisible, onClose }) {
    if (!isVisible) return null;

    // const token = localStorage.getItem('auth-token');
    const token = JSON.parse(sessionStorage.getItem('auth')).accessToken

    const {logout: localLogout} = useContext(UserContext);
    // Check this if is correct
    if(!token) {
        navigate('/');
    }

    const [logout, errors, isFetching] = useLogout();
    const navigate = useNavigate();

    console.log(isFetching);

    const handleButtonClick = async (e) => {
        e.preventDefault();

       const success =  await logout(token);
    
        if(success) {
            localLogout();
            navigate('/');
        }
    }

    return (
        <>
            {isFetching && <Preloader />}
            <div
                id="popup-modal"
                tabIndex={-1}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
                onClick={onClose}
            >
                <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow-lg dark:bg-gray-700">
                    <button
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}
                    >
                        <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg
                            className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <p className="text-red-600">{errors ? errors.serverError : ''}</p>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to Log out?
                        </h3>
                        <button
                            type="button"
                            className="mb-2 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                            onClick={handleButtonClick}
                        >
                            Yes, I'm sure
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={onClose}
                        >
                            No, cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
