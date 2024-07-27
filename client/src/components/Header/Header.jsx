import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';
import TopOptions from './TopOptions/TopOptions';
import OffCanvasMenu from '../OffCanvasMenu/OffCanvasMenu';
import { Link } from "react-router-dom";


export default function Header({
  handleLogoutClick
}) {
    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    const [isNormalNav, setIsNormalNav] = useState(true);
  
    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsNormalNav(false);
      } else {
        setIsNormalNav(true);
      }
    };
  
    // Effect to set isNormalNav on component mount and window resize
    useEffect(() => {
      handleResize(); // Initial setup
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to remove event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures this effect runs only on mount and unmount
  
    const toggleOffcanvasMenu = () => {
      setOffcanvasOpen(!isOffcanvasOpen);
    //   setIsNormalNav(!isNormalNav);
    };

  return (
    <>
      <header className={styles.headerSection} >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="/">
                  <img src="/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {isNormalNav && <Navigation />}
            </div>
            <div className="col-lg-3">
              {isNormalNav && <TopOptions handleLogoutClick={handleLogoutClick}/>}
            </div>
          </div>
          <div className="canvas-open" onClick={toggleOffcanvasMenu}>
                <i className="fa fa-bars" />
            </div>
        </div>
      </header>
      <OffCanvasMenu isOffcanvasOpen={isOffcanvasOpen} toggleOffcanvasMenu={toggleOffcanvasMenu} handleLogoutClick={handleLogoutClick}/>
    </>
  );
}
