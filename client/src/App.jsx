import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import { useContext, useState } from 'react';
import AlertModal from './components/LogoutModal/AlertModal';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import {IsGuest, IsUser} from './components/ProtectedRoutes/RoutesGuards';

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

          <Route element={<IsGuest/>}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* <Route path="/logout" element={<AlertModal />} /> */}

          <Route element={<IsUser />}>
            <Route path="/create-post" element={<CreateBlogPost />} />
            <Route path="/createHealthyRecipe" element={<CreateHealthyRecipe />} />
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
