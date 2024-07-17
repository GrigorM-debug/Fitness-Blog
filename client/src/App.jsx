import ChooseUs from './components/Home/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/Home/GetInTouch/GetInTouch';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection/HeroSection';
import LatestArticles from './components/Home/LatestArticles/LatestArticles';
import LatestRecipes from './components/Home/LatestRecipes/LatestRecipes';

import './index.css';


function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <ChooseUs></ChooseUs>
      <LatestArticles></LatestArticles>
      <LatestRecipes></LatestRecipes>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  )
}

export default App
