import './index.css';
import { Route, Routes } from 'react-router-dom';
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
import { useState } from 'react';
import UserContext from './contexts/userContext';
import AlertModal from './components/LogoutModal/AlertModal';

function App() {
  const [userData, setUserData] = useState({});

  const setUserDataHandler = (authData) => {
    setUserData(authData);
  }

  const contextData = {
    _id: userData._id,
    username: userData.username,
    email: userData.userEmail,
    description: userData.description,
    city: userData.city,
    country: userData.country,
    imageUrl: userData.imageUrl,
    isAuthenticated: !!userData.userEmail
  }

  const [isVisibleLogOutModal, setIsVisibleLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setIsVisibleLogoutModal(true)
  }

  const handleModalClose = () => {
    setIsVisibleLogoutModal(false);
  }
  
  
  return (
    <UserContext.Provider value={{ contextData, setUserDataHandler }}>
      <>
        <Header handleLogoutClick={handleLogoutClick}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/healthyRecipes" element={<HealthyRecipes />} />
          <Route path="/BMICalculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/logout" element={<AlertModal />} /> */}
          <Route path="/createPost" element={<CreateBlogPost />} />
          <Route path="/createHealthyRecipe" element={<CreateHealthyRecipe />} />
          <Route path="/myProfile" element={<Profile />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
        <AlertModal isVisible={isVisibleLogOutModal} onClose={handleModalClose}></AlertModal>
      </>
    </UserContext.Provider>
  )
}

export default App;
