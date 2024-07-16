import { useState } from "react";

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
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./about-us.html">Our Blog</a></li>
                    <li><a href="./healthyRecipes.html">Healthy Recipes</a></li>
                    <li><a href="./coaches.html">BMI Calculator</a></li>
                    <li onClick={handleShowDropdown}><a href="#">User Pages {!showDropDown && <img src="img/arrow.png"></img>} {showDropDown && <img src="img/down-arrow.png"></img>}</a>
                        {showDropDown && <ul className="dropdown">
                            <li><a href="./class-timetable.html">Register</a></li>
                            <li><a href="./bmi-calculator.html">Create Article</a></li>
                            <li><a href="./coaches.html">Create Healthy Recipe</a></li>
                            <li><a href="./gallery.html">My profile</a></li>
                            <li><a href="./blog.html">Login</a></li>
                            <li><a href="./404.html">Logout</a></li>
                        </ul>}
                    </li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
      </div>
    </>
  );
};
