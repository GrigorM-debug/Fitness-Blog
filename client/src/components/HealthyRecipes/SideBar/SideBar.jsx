import styles from './SideBar.module.css';

export default function SideBar({
    onChange,
    onSubmit,
    formData,
    errors
}) {
    return (
        <div className="col-lg-4 col-md-8 p-0">
            <div className={styles.sidebarOption}>
                <div className={styles.soCategories}>
                    <h1 className={styles.title}>Search</h1>
                    <form onSubmit={onSubmit}>
                        <p className="text-red-600">{errors ? errors.serverError : ''}</p>
                        <div className='mb-3'>
                            <label htmlFor="title" className="block text-sm font-bold leading-6 text-white">
                                Title
                            </label>
                            <div className="mt-2">
                            <p className="text-red-600">{errors ? errors.title : ''}</p>
                                <input
                                    id="title"
                                    name="title"
                                    placeholder="Write recipe Title"
                                    className={`p-2 block w-full ${errors.title ? 'border-red-600' : 'border-gray-300'} rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    onChange={onChange}
                                    value={formData.title}
                                />
                            </div>
                        </div>

                        <button className={styles.submitButton} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};