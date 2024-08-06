import './index.css';
import {Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreateBlogPost from './components/CreateBlogPost/CreateBlogPost';
import CreateHealthyRecipe from './components/CreateHealthyRecipe/CreateHealthyRecipe';
import Profile from './components/Profile/Profile';
import NotFound from './components/404/404';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BlogPosts from './components/BlogPosts/BlogPosts';
import HealthyRecipes from './components/HealthyRecipes/HealthyRecipes';
import BMICalculator from './components/BMICalculator/BMICalculator';
import Contact from './components/Contact/Contact';
import {useState } from 'react';
import AlertModal from './components/LogoutModal/AlertModal';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import BlogPostDetails from './components/BlogPostDetails/BlogPostDetails';
import HealthyRecipeDetails from './components/HealthyRecipeDetails/HealthyRecipeDetails';
import EditBlogPost from './components/EditBlogPost/EditBlogPost';
import EditHealthyRecipe from './components/EditHealthyRecipe/EditHealthyRecipe';
import PrivateGuard from './components/ProtectedRoutes/PrivateGuard';
import RouteGuard from './components/ProtectedRoutes/RouteGuard';

function App() {
  const [isVisibleLogOutModal, setIsVisibleLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setIsVisibleLogoutModal(true)
  }

  const handleModalClose = () => {
    setIsVisibleLogoutModal(false);
  }
  

  
  return (
    <AuthProvider>
      <>
        <Header handleLogoutClick={handleLogoutClick}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/healthyRecipes" element={<HealthyRecipes />} />
          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/blog/:blogPostId/details' element={<BlogPostDetails />}/>
          <Route path='/healthy-recipes/:recipeId/details' element={< HealthyRecipeDetails/>}/>

          <Route element={<RouteGuard />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<PrivateGuard />}>
            <Route path="/create-post" element={<CreateBlogPost />} />
            <Route path='/blog-post/:postId/edit' element={<EditBlogPost/>}/>
            <Route path="/createHealthyRecipe" element={<CreateHealthyRecipe />} />
            <Route path="/healthy-recipe/:recipeId/edit" element={<EditHealthyRecipe />} />
            <Route path="/myProfile" element={<Profile />} />
          </Route>

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      <AlertModal isVisible={isVisibleLogOutModal} onClose={handleModalClose}></AlertModal>
      </>
    </AuthProvider>
  )
}

export default App;
