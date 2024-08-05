import { useEffect } from "react";
import { useGetLatest } from "../../hooks/useBlogPosts";
import { useGetLatestRecipes } from "../../hooks/useRecipes";
import Preloader from "../Preloader/Preloader";
import ChooseUs from "./ChooseUs/ChooseUs";
import GetInTouch from "./GetInTouch/GetInTouch";
import HeroSection from "./HeroSection/HeroSection";
import LatestArticles from "./LatestArticles/LatestArticles";
import LatestRecipes from "./LatestRecipes/LatestRecipes";

export default function Home() {
    const [posts, isFetchingPosts] = useGetLatest();
    const [recipes, isFetchingRecipes] = useGetLatestRecipes();

    const isLoading = isFetchingPosts || isFetchingRecipes;

    return (
        <>
            {isLoading ? <Preloader/> :
                <>
                    <HeroSection />
                    <ChooseUs />
                    <LatestArticles posts={posts}/>
                    <LatestRecipes recipes={recipes}/>
                    <GetInTouch />
                </>
            }
            
        </>
    );
};