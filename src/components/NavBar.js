import React, {useState, useRef} from "react";
import { Link,  useLocation } from 'react-router-dom';
import {Link as RSLink} from 'react-scroll';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from "../assets/images/twitter.png";
import InstagramIcon from "../assets/images/instagram.png";
import GoodreadsIcon from "../assets/images/goodreads-navbar.png";
import FancyUnderline from "../assets/images/fancyunderline2.png";
import IconButton from '@material-ui/core/IconButton';

const NavBar = props => {
  const location = useLocation();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false) 
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerIsOpen(open);
    
  };
  
  return (
    <React.Fragment>
      <div className="navbar-container">
        {location.pathname === "/" ? (
          <ul>
            <li>
              <RSLink
                to="characters"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
              >
                CHARACTERS
              </RSLink>
            </li>
            <li>
              <RSLink
                to="world"
                spy={true}
                smooth={true}
                offset={70}
                duration={1500}
              >
                WORLD
              </RSLink>
            </li>

            <li>
              <RSLink
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div className="header-title-container">
                  <span className="header-title">Arboreal Path</span>
                  <img src={FancyUnderline}></img>
                </div>
              </RSLink>
            </li>
            <li>
              <RSLink
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                AUTHOR
              </RSLink>
            </li>
            <li>
              <a
                href="https://www.goodreads.com/jasonmvallery"
                className="social"
                target="_blank"
                style={{ width: "25px", padding: "13.5px 2px 14px 2px" }}
              >
                <img border="0" alt="goodreads" src={GoodreadsIcon}></img>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/JasonMVallery"
                className="social"
                target="_blank"
                style={{ padding: "14px 2px", width: "30px" }}
              >
                <img border="0" alt="twitter" src={TwitterIcon}></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jasonmvallery"
                className="social instagram"
                target="_blank"
                style={{ padding: "15px 2px 14px 2px", width: "23px" }}
              >
                <img border="0" alt="instagram" src={InstagramIcon}></img>
              </a>
            </li>
          </ul>
        ) : (
          <ul style={{ backgroundColor: "#243749" }}>
            <li>
              <Link to="/" exact>
                <div className="header-title-container">
                  <span className="header-title">Arboreal Path</span>
                  <img src={FancyUnderline}></img>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div
        className="mobile-menu-container"
        style={
          location.pathname === "/presskit"
            ? { backgroundColor: "#243749" }
            : null
        }
      >
        {location.pathname === "/" ? (
          <React.Fragment>
            <div style={{ width: "48px" }}></div>
            <li>
              <RSLink
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div className="header-title-container">
                  <span className="header-title">Arboreal Path</span>
                  <img src={FancyUnderline}></img>
                </div>
              </RSLink>
            </li>
            <IconButton
              className="hamburger-button"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </React.Fragment>
        ) : (
          <li>
            <Link to="/" exact>
              <div className="header-title-container">
                <span className="header-title">Arboreal Path</span>
                <img src={FancyUnderline}></img>
              </div>
            </Link>
          </li>
        )}
        {/* :
    <ul style={{backgroundColor:'#243749'}}>

    </ul>    */}
        
        <SwipeableDrawer
          anchor="right"
          open={drawerIsOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div
            className="mobile-menu-navigation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            role="presentation"
          >
            <li>
              <RSLink
                to="characters"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1500}
              >
                <div onClick={toggleDrawer(false)}>CHARACTERS</div>
              </RSLink>
            </li>
            <li>
              <RSLink
                to="world"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div onClick={toggleDrawer(false)}>WORLD</div>
              </RSLink>
            </li>
            <li>
              <RSLink
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                <div onClick={toggleDrawer(false)}>AUTHOR</div>
              </RSLink>
            </li>
          </div>
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
};
export default NavBar;
