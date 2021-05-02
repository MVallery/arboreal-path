import React, {useRef} from "react";
import { Link } from 'react-router-dom'
import "./NavBar.css";
import TwitterIcon from "../assets/images/twitter.png";
import InstagramIcon from "../assets/images/instagram.png";
import FancyUnderline from "../assets/images/fancy-underline.jpg";
const NavBar = props => {

  const myRef = useRef(null)

  
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <button onClick={props.executeAboutScroll()}>ABOUT</button>
          {/* <Link to="/about">ABOUT</Link> */}
        </li>
        <li>
          <Link to="/presskit">PRESSKIT</Link>
        </li>

        <li>
          <Link to="/">
            <div className="header-title-container">
              <span className="header-title">Jason M. Vallery</span>
              <img src={FancyUnderline}></img>
            </div>
          </Link>
        </li>
        <li>
        <button onClick={props.executeHomeScroll()}>ARBOREAL PATH</button>

          {/* <Link to="/contact">ARBOREAL PATH</Link> */}
        </li>
        <li>
        <button onClick={props.executeArborealPathScroll()}>WORLD</button>

          {/* <Link to="/contact">WORLD</Link> */}
        </li>

      </ul>
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