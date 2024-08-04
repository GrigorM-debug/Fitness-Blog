import { PhotoIcon } from '@heroicons/react/24/solid';

export default function EditBlogPost() {
    //0.Make route for Blog Post edit page in App Component
    //1. Take the id from params
    //2.Load the data with making querry
    //3. Give the data as initial value to useForm
    // 4. use useEffect and updater method in useForm to update the initial data when id is changed
    //5. Load the data in the form
    //6. Add validation and error messages
    //7. When the from is submitted show modal for confirming the update
    //8. When the update is confirm make the response to the server
    //9. If the response is success show modal for successfull update
        //Reuse the modal that you used for Deleting


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                alt="Your Company"
                src="img/createPostLogo.png"
                className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                Write Your Blog Post
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form  method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-white">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    placeholder="Write blog Title"
                                    required
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="categories" className="block text-sm font-medium leading-6 text-white">Select a category</label>
                            <select 
                                defaultValue="Choose a category"
                                value={category}
                                onChange={handleChange}
                                id="categories" 
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="Choose a category">Choose a category</option>
                                <option value="training">Training</option>
                                <option value="competitions">Competitions</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="healthAndRecovery">Health & Recovery</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="shortDesctiption" className="block text-sm font-medium leading-6 text-white">
                        Short Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="shortDesctiption"
                                name="shortDesctiption"
                                rows={3}
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Write a few sentences about your post."
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium leading-6 text-white">
                            Content
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Write your post content."
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
                        Photo
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                            <PhotoIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                            <input
                                id="imageUrl"  
                                name="imageUrl"  
                                placeholder='Write image Url'
                                className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};