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
                            <p className="text-red-600">{errors ? errors.postTitle : ''}</p>
                                <input
                                    id="title"
                                    name="title"
                                    placeholder="Write post Title"
                                    className={`p-2 block w-full ${errors.postTitle ? 'border-red-600' : 'border-gray-300'} rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    onChange={onChange}
                                    value={formData.title}
                                />
                            </div>
                        </div>
                        <div className={styles.categoryFilter}>
                            <label htmlFor="categories" className="block text-sm font-bold leading-6 text-white">
                                Select a category
                            </label>
                            <p className="text-red-600">{errors ? errors.postCategory : ''}</p>
                            <select
                                id="categories"
                                name="category"
                                className={`p-2 block w-full ${errors.postCategory ? 'border-red-600' : 'border-gray-300'} rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                onChange={onChange}
                                value={formData.category}
                            >
                                <option value="">Choose a category</option>
                                <option value="training">Training</option>
                                <option value="competitions">Competitions</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="healthAndRecovery">Health & Recovery</option>
                            </select>
                        </div>

                        <button className={styles.submitButton} type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};