import React, {useRef} from "react";
import { Link,  useLocation } from 'react-router-dom';
import {Link as RSLink} from 'react-scroll';

import TwitterIcon from "../assets/images/twitter.png";
import InstagramIcon from "../assets/images/instagram.png";
import FancyUnderline from "../assets/images/fancy-underline.jpg";
const NavBar = props => {
  const location = useLocation();

  const myRef = useRef(null)

  
  return (

<div className="navbar-container">
          {/* <Link to="/contact">WORLD</Link> */}
          {location.pathname==='/'?
          <ul>
          <li>
            <RSLink to="characters" spy={true} smooth={true} offset={0} duration={500}>CHARACTERS</RSLink>
          </li>
          <li>
            <RSLink to="world" spy={true} smooth={true} offset={0} duration={500}>WORLD</RSLink>
          </li>


          <li>
            <RSLink to="home" spy={true} smooth={true} offset={0} duration={500}>
              <div className="header-title-container">
                <span className="header-title">Jason M. Vallery</span>
                <img src={FancyUnderline}></img>
              </div>
            </RSLink>
          </li>
          <li>
            <RSLink to="about" spy={true} smooth={true} offset={0} duration={500}>ABOUT</RSLink>
          </li>
          <li>
          <a href="https://twitter.com">
            <img
              className="social"
              border="0"
              alt="facebook"
              src={TwitterIcon}
            ></img>
          </a>
        </li>

        <li>
          <a href="https://instagram.com">
            <img
              className="social"
              border="0"
              alt="facebook"
              src={InstagramIcon}
            ></img>
          </a>
        </li> 
        </ul>
        :
        <ul>
        <li>
          <Link to="/">
            <div className="header-title-container">
              <span className="header-title">Jason M. Vallery</span>
              <img src={FancyUnderline}></img>
            </div>
          </Link>
        </li>  
 

        </ul>      
        }
        



    </div>

  );
};
export default NavBar;

        {/* <li>
          <a href="https://twitter.com">
            <img
              className="social"
              border="0"
              alt="facebook"
              src={TwitterIcon}
            ></img>
          </a>
        </li>

        <li>
          <a href="https://instagram.com">
            <img
              className="social"
              border="0"
              alt="facebook"
              src={InstagramIcon}
            ></img>
          </a>
        </li> */}