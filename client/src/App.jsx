import ChooseUs from './components/Home/ChooseUs/ChooseUs';
import CreateBlogPost from './components/CreateBlogPost/CreateBlogPost';
import CreateHealthyRecipe from './components/CreateHealthyRecipe/CreateHealthyRecipe';
import Footer from './components/Footer/Footer';
import GetInTouch from './components/Home/GetInTouch/GetInTouch';
import Header from './components/Header/Header';
import HeroSection from './components/Home/HeroSection/HeroSection';
import LatestArticles from './components/Home/LatestArticles/LatestArticles';
import LatestRecipes from './components/Home/LatestRecipes/LatestRecipes';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import './index.css';
import HealthyRecipes from './components/HealthyRecipes/HealthyRecipes';
import BlogPosts from './components/BlogPosts/BlogPosts';

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <HealthyRecipes></HealthyRecipes>
      <BlogPosts></BlogPosts>
      <ChooseUs></ChooseUs>
      <LatestArticles></LatestArticles>
      <LatestRecipes></LatestRecipes>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  )
}

export default App
