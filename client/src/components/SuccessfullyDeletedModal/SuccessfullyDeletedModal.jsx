import { Link } from "react-router-dom";

export default function SuccessfullyDeletedModal({
    isOpen,
    onClose,
}) {
    if (!isOpen) return null;

    return (
        <>
            <div
                id="popup-modal"
                tabIndex={-1}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                onClick={onClose}
            >
                <div
                    className="relative p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-700"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
                >
                    <button
                        type="button"
                        className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="popup-modal"
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
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="mx-auto mb-4 w-12 h-12 text-green-500"
                        >
                            <path fill="#00ff2a" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Successfully Deleted
                        </h3>
                        <Link
                            to="/"
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                        >
                            Go to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
