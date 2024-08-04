import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useGetUserData } from "../../hooks/useAuth";
import Preloader from "../Preloader/Preloader";

export default function Profile() {
    const {userData, isFetching} = useGetUserData();
    

    return (
        <>
            {isFetching && <Preloader />}

            <Breadcrumb title="My Profile" page="My Profile" breadcrumbImage="img/Planche.jpg"/>

            <div className="bg-neutral-950 p-0 m-0">
                <div className="bg-neutral-900 shadow mt-0 p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 p-8">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p className="font-bold text-white text-2xl">22</p>
                                <p className="text-gray-400">Likes</p>
                            </div>
                            <div>
                                <p className="font-bold text-white text-2xl">10</p>
                                <p className="text-gray-400">Comments</p>
                            </div>
                            <div>
                                <p className="font-bold text-white text-2xl">89</p>
                                <p className="text-gray-400">Posts</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" 
                                src={userData.imageUrl} 
                                alt="" 
                            />
                        </div>
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Edit
                            </button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Change Image
                            </button>
                        </div>
                    </div>
                    <div className="text-center border-b border-gray-800 pb-12 mt-20">
                        <h1 className="text-6xl font-medium text-white">
                            {userData.username}
                        </h1>
                        <p className="font-light text-white mt-3 text-xl">{`${userData.city}, ${userData.country}`}</p>
                    </div>
                    <div className="text-center border-b border-gray-800 pb-12 mt-12">
                        <p className="text-white text-lg font-light lg:px-16">
                            {userData.description ? userData.description : ''}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 p-10">
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">Articles Written</h2>
                            <div className="py-8 px-8 bg-zinc-900 space-y-2">
                                <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                                <div className="space-y-2">
                                    <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                    <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                        <li>Aug, 15, 2019</li>
                                        <li>20 Comments</li>
                                        <li>20 Likes</li>
                                    </ul>
                                    <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                    <div className="flex justify-center">
                                        <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-gray-800" />
                        </div>
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">Recipes Written</h2>
                            <div className="py-8 px-8 bg-zinc-900 space-y-2">
                                <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                                <div className="space-y-2">
                                    <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                    <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                        <li>Aug, 15, 9</li>
                                        <li>20 Comments</li>
                                        <li>20 Likes</li>
                                    </ul>
                                    <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                    <div className="flex justify-center">
                                        <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-gray-800" />
                        </div>
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">Liked Posts</h2>
                            <div className="py-8 px-8 bg-zinc-900 space-y-2">
                                <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                                <div className="space-y-2">
                                    <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                    <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                        <li>Aug, 15, 9</li>
                                        <li>20 Comments</li>
                                        <li>20 Likes</li>
                                    </ul>
                                    <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                    <div className="flex justify-center">
                                        <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-gray-800" />
                        </div>
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">Commented Posts</h2>
                            <div className="py-8 px-8 bg-zinc-900 space-y-2">
                                <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src="img/blog/blog-1.jpg" alt="" />
                                <div className="space-y-2">
                                    <p className="text-lg text-white font-semibold">Vegan White Peach Mug Cobbler With Cardam Vegan White Peach Mug Cobbler...</p>
                                    <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                                        <li>Aug, 15, 9</li>
                                        <li>20 Comments</li>
                                        <li>20 Likes</li>
                                    </ul>
                                    <p className="text-white font-medium mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus facilisis.</p>
                                    <div className="flex justify-center">
                                        <a href="#" className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-t border-gray-800" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
