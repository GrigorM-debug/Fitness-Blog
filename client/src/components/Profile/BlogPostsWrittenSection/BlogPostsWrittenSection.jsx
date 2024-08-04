import { timestampToDate } from "../../../utils/timeSpanToDate";
import { Link } from "react-router-dom";

export default function BlogPostsWrittenSection({
    imageUrl,
    title,
    createdOn,
    updatedOn,
    shortDescription,
    postId
}) {
    const defaultImageUrl = '/img/blog/blog-2.jpg'; // Adjusted path
    const backgroundImageUrl = imageUrl ? imageUrl : defaultImageUrl;

    return (
        <>
        <div className="py-8 px-8 bg-zinc-900 space-y-2">
            <img className="block h-50 w-100 mx-auto rounded-lg mb-4" src={backgroundImageUrl} alt="" />
            <div className="space-y-2">
                <p className="text-lg text-white font-semibold">{title}</p>
                <ul className="flex space-x-4 text-gray-600 text-sm mb-2">
                    <li>CreatedOn: {timestampToDate(createdOn)}</li>
                    <li>Updated On: {updatedOn ? timestampToDate(updatedOn) : ''}</li>
                </ul>
                <p className="text-white font-medium mb-4">{shortDescription}</p>
                <div className="flex justify-center">
                    <Link to={`/blog/${postId}/details`} className="text-white py-2 px-4 uppercase rounded bg-orange-600 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Details
                    </Link>
                </div>
            </div>
        </div>
        <hr className="border-t border-gray-800" />
        </>
    );
};