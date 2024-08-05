
export default function SuccessfullySubmittedContacts({
    isOpen,
    onClose
}) {
    if(!isOpen) return null;
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
                    {/* <button
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
                    </button> */}
                    <div className="p-4 md:p-5 text-center">
                        <img
                            className="mx-auto mb-4 w-12 h-12 text-green-500"
                            src="img/thanks.png"
                            alt=""
                            
                        />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Thank You for Reaching Out!
                        </h3>
                        <p>We received your contact form, but we may need more information to assist you properly.</p>
                        <p>Our team will follow up with you via email if we need any additional details.</p>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};