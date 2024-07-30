import { useGetLatest } from "../../hooks/useBlogPosts";
import Preloader from "../Preloader/Preloader";
import ChooseUs from "./ChooseUs/ChooseUs";
import GetInTouch from "./GetInTouch/GetInTouch";
import HeroSection from "./HeroSection/HeroSection";
import LatestArticles from "./LatestArticles/LatestArticles";
import LatestRecipes from "./LatestRecipes/LatestRecipes";

export default function Home() {
    const [posts, isFetching] = useGetLatest();

    return (
        <>
            {isFetching && <Preloader/>}
            
            <HeroSection />
            <ChooseUs />
            <LatestArticles posts={posts}/>
            <LatestRecipes />
            <GetInTouch />
        </>
    );
};