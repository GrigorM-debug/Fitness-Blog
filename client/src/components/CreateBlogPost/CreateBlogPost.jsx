import { PhotoIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import useForm from '../../hooks/useForm';
import { useCreatePost } from '../../hooks/useBlogPosts';
import { useNavigate } from 'react-router';
import Preloader from '../Preloader/Preloader';


const initialData = {
    title: '',
    category: 'Choose a category',
    subTitle: '',
    shortDescription: '',  
    content: '',
    imageUrl: ''
};

export default function CreateBlogPost() {
    const [createPost, isFetching, errors] = useCreatePost();
    const navigate = useNavigate()

    const formSubmit = async (formData) => {
        const postId = await createPost(formData);
        console.log(postId)
        if(postId) {
            //Todo navigate on details page
            clearData();
            navigate(`/blog/${postId}/details`);
        }
    };

    const { formData, onChangeHandler, onSubmitHandler, clearData} = useForm(initialData, formSubmit);

    return (
        <>
        {isFetching && <Preloader />}
        <Breadcrumb title="Create Blog Post" page="Create Blog Post" breadcrumbImage="img/coaches-bg.jpg"/>

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
                <p className="text-red-600">{errors ? errors.serverError : ''}</p>
                <form onSubmit={onSubmitHandler}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-bold leading-6 text-white">
                                Title
                            </label>
                            <div className="mt-2">
                                <p className="text-red-600">{errors ? errors.title : ''}</p>
                                <input
                                    id="title"
                                    name="title"
                                    placeholder="Write post Title"
                                    className={`p-2 block w-full rounded-md border-2 ${errors.title ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                    onChange={onChangeHandler}
                                    value={formData.title}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="categories" className="block text-sm font-bold leading-6 text-white">Select a category</label>
                            <p className="text-red-600">{errors ? errors.category : ''}</p>
                            <select 
                                value={formData.category}
                                onChange={onChangeHandler}
                                id="categories" 
                                name="category"  
                                className={`p-2 block w-full rounded-md border-2 ${errors.category ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}>
                                <option value="Choose a category">Choose a category</option>
                                <option value="training">Training</option>
                                <option value="competitions">Competitions</option>
                                <option value="nutrition">Nutrition</option>
                                <option value="healthAndRecovery">Health & Recovery</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="mt-3">
                        <label htmlFor="subTitle" className="block text-sm font-bold leading-6 text-white">
                            Subtitle
                        </label>
                        <p className="text-red-600">{errors ? errors.subTitle : ''}</p>
                        <input
                        id="subTitle"
                        name="subTitle"
                        type="text"
                        placeholder='Write blog Subtitle'
                        className={`p-2 block w-full rounded-md border-2 ${errors.subTitle ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`
                        }
                        value={formData.subTitle}
                        onChange={onChangeHandler}
                        />
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="shortDescription" className="block text-sm font-bold leading-6 text-white">
                        Short Description
                        </label>
                        <div className="mt-2">
                            <p className="text-red-600">{errors ? errors.shortDescription : ''}</p>
                            <textarea
                                id="shortDescription"
                                name="shortDescription"  
                                rows={3}
                                className={`p-2 block w-full rounded-md border-2 ${errors.shortDescription ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                placeholder="Write a few sentences about your post."
                                onChange={onChangeHandler}
                                value={formData.shortDescription}  
                            />
                        </div>
                    </div>

                    <div className='mt-3'>
                        <label htmlFor="content" className="block text-sm font-bold leading-6 text-white">
                            Content
                        </label>
                        <p className="text-red-600">{errors ? errors.content : ''}</p>
                        <div className="mt-2">
                            <textarea
                                id="content"
                                name="content"
                                rows={3}
                                className={`p-2 block w-full rounded-md border-2 ${errors.content ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                                placeholder="Write your post content."
                                onChange={onChangeHandler}
                                value={formData.content}
                            />
                        </div>
                    </div>

                    <div className='mt-3 mb-3'>
                        <label htmlFor="imageUrl" className="block text-sm font-bold leading-6 text-white">
                        Image
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
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};
