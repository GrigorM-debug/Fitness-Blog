import ChooseUs from "./ChooseUs/ChooseUs";
import GetInTouch from "./GetInTouch/GetInTouch";
import HeroSection from "./HeroSection/HeroSection";
import LatestArticles from "./LatestArticles/LatestArticles";
import LatestRecipes from "./LatestRecipes/LatestRecipes";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ChooseUs />
            <LatestArticles />
            <LatestRecipes />
            <GetInTouch />
        </>
    );
};