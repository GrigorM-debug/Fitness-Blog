import { PhotoIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

export default function EditBlogPost() {
    const fileInputRef = useRef(null);
    const [category, setCategory] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        shortDescription: '',
        content: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    console.log(formData)

    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            // setImage(`img/${event.target.files[0].name}`)
        }
    }

    console.log(image)

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
                            {/* <button
                                type="button"
                                onClick={handleButtonClick}
                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Add
                            </button> */}
                            <input
                                type="file"
                                className="text-white"
                                onChange={onImageChange}
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