import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import LatestArticles from './components/LatestArticles/LatestArticles';
import LatestRecipes from './components/LatestRecipes/LatestRecipes';
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
