import { useState } from "react";
import {Link} from 'react-router-dom'

export default function OffCanvasMenu({ isOffcanvasOpen, toggleOffcanvasMenu }) {
    const [showDropDown, setShowDropdown] = useState(false);

    const handleShowDropdown = () => {
        setShowDropdown(!showDropDown);
    }
  return (
    <>
      <div
        className={`offcanvas-menu-overlay ${isOffcanvasOpen ? 'active' : ''}`}
        onClick={toggleOffcanvasMenu}
      ></div>
      <div
        className={`offcanvas-menu-wrapper ${isOffcanvasOpen ? 'show-offcanvas-menu-wrapper' : ''}`}
      >
        <div className="canvas-close" onClick={toggleOffcanvasMenu}>
          <i className="fa fa-close"></i>
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search"></i>
        </div>
            <nav className="slicknav_menu">
                <ul className="slicknav_nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Our Blog</Link></li>
                    <li><Link to="/healthyRecipes">Healthy Recipes</Link></li>
                    <li><Link to="/BMICalculator">BMI Calculator</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li onClick={handleShowDropdown}><Link to="#">User Pages {!showDropDown && <img src="img/arrow.png"></img>} {showDropDown && <img src="img/down-arrow.png"></img>}</Link>
                        {showDropDown && <ul className="dropdown">
                            <li><Link to="/regiter">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/createPost">Create Post</Link></li>
                            <li><Link to="/createHealthyRecipe">Create Healthy Recipe</Link></li>
                            <li><Link to="/myProfile">My profile</Link></li>
                            <li><Link to="./404.html">Logout</Link></li>
                        </ul>}
                    </li>
                </ul>
            </nav>
      </div>
    </>
  );
};
