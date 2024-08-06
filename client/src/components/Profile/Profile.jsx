import Breadcrumb from "../Breadcrumb/Breadcrumb";
import  {useGetUserData, useGetUserPosts, useGetUserRecipes } from "../../hooks/useAuth";
import Preloader from "../Preloader/Preloader";
import BlogPostsWrittenSection from "./BlogPostsWrittenSection/BlogPostsWrittenSection";
import HighProteinRecipesWrittenSection from "./HighProteinRecipesWrittenSection/HighProteinRecipesWrittenSection";

export default function Profile() {
    const {userData, isPreloading} = useGetUserData();
    
    const {userPosts, isLoading} = useGetUserPosts(userData._id);

    const {userRecipes, isLoadingData} = useGetUserRecipes(userData._id);

    const isFetching = isPreloading || isLoading || isLoadingData;


    console.log(userRecipes)
    return (
        <>
            {isFetching ? <Preloader /> : 
            
            <>
            <Breadcrumb title="My Profile" page="My Profile" breadcrumbImage="img/Planche.jpg"/>

            <div className="bg-neutral-950 p-0 m-0">
                <div className="bg-neutral-900 shadow mt-0 p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 p-8">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-40 md:mt-0">
                            {/* <div>
                                <p className="font-bold text-white text-2xl">10</p>
                                <p className="text-gray-400">Comments</p>
                            </div> */}
                            <div>
                                <p className="font-bold text-white text-2xl">{userPosts ? userPosts.length : 0}</p>
                                <p className="text-gray-400">Blog Posts</p>
                            </div>
                            <div>
                                <p className="font-bold text-white text-2xl">{userRecipes ? userRecipes.length : 0}</p>
                                <p className="text-gray-400">Healthy Recipes Posts</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" 
                                src={userData.imageUrl} 
                                alt="" 
                            />
                        </div>
                        {/* <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            <button className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Edit
                            </button>
                            <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                Change Image
                            </button>
                        </div> */}
                    </div>
                    <div className="text-center border-b border-gray-800 pb-12 mt-20">
                        <h1 className="text-6xl font-medium text-white">
                            {userData.username}
                        </h1>
                        <p className="font-light text-white mt-3 text-xl">{`${userData.city}, ${userData.country}`}</p>
                    </div>
                    <div className="text-center border-b border-gray-800 pb-12 mt-12">
                        <p className="text-white text-lg font-light lg:px-16">
                            {userData.description ? userData.description : 'No bio added'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 p-10">
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">Blog Posts Written</h2>
                            {userPosts && userPosts.length > 0 
                            ? userPosts.map(post => (
                                <BlogPostsWrittenSection 
                                    key={post._id}
                                    title={post.title}
                                    createdOn={post._createdOn}
                                    updatedOn={post._updatedOn}
                                    shortDescription={post.shortDescription}
                                    postId={post._id}
                                    imageUrl={post.imageUrl}
                                />
                            )) 
                            : <h2 className="mt-2 font-medium text-white text-center">Not Blog Posts written</h2>
                            }
        
                        </div>
                        <div className="border border-gray-900 rounded-xl overflow-hidden shadow-lg">
                            <h2 className="bg-zinc-800 text-white text-2xl p-4">High Protein Recipes Written</h2>
                            {userRecipes && userRecipes.length > 0 
                                ? userRecipes.map(recipe => (
                                    <HighProteinRecipesWrittenSection 
                                        key={recipe._id}
                                        title={recipe.title}
                                        createdOn={recipe._createdOn}
                                        updatedOn={recipe._updatedOn}
                                        description={recipe.description}
                                        recipeId={recipe._id}
                                        imageUrl={recipe.imageUrl}
                                    />
                                ))
                                : <h2 className="font-medium text-white text-center">Not High Protein Recipes written</h2>
                            }
                        </div>                
                    </div>
                </div>
            </div>
            </>
            }
        </>
    );
}
