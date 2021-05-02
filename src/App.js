import React, {useRef} from "react";
import {Router, Route, Link, Switch, useLocation } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { StickyContainer, Sticky } from "react-sticky";
import About from './components/about';
import Home from './components/home';
import PressKit from './components/presskit';
import ArborealPath from './components/ArborealPath';
import Contact from './components/contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Link as RSLink} from 'react-scroll';
import FancyUnderline from "./assets/images/fancy-underline.jpg";

import ArcaneMoose from './assets/images/arcanemooselogo.png'

const App = () =>{
  const location = useLocation();
  return (
    <React.Fragment>
     
      {/* <NavBar 
      executeHomeScroll= {executeHomeScroll}
      executeAboutScroll= {executeAboutScroll} 
      executeArborealPathScroll= {executeArborealPathScroll}
      homeRef ={homeRef} aboutRef={aboutRef} arborealPathRef={arborealPathRef} />     */}

<div className="navbar-container">
          {/* <Link to="/contact">WORLD</Link> */}

      
        
          {location.pathname==='/'?
          <ul>
          <li>
            <RSLink to="about" spy={true} smooth={true} offset={0} duration={500}>ABOUT</RSLink>
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
            <RSLink to="home" spy={true} smooth={true} offset={0} duration={500}>ARBOREAL PATH</RSLink>
          </li>
          <li>
            <RSLink to="world" spy={true} smooth={true} offset={0} duration={500}>WORLD</RSLink>
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

    <Switch>
          <Route path="/" exact>
            <Home/>
            <About />
            <ArborealPath/>
          </Route>
          <Route path="/presskit" component= {PressKit} />

      </Switch>

    <Footer/>
    </React.Fragment>
  );
}
export default App;

// let navbar = document.querySelectorAll("ul-nav");
// if 
// for(var i = 0; i < navbar.length; i++) {
//  navbar[i].style.position = 'fixed';
//  navbar[i].style.top = '0';
//  navbar[i].style.width = '100%';
//  navbar[i].style.paddingTop = '60px';


// }

// const normalBackground = () => {
//     for (var i = 0; i < navbar.length; i++){
//      navbar[i].style.borderColor = 'grey';
//     }
//   }
// setTimeout (normalBackground, 2000)



// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("ul-nav");
// // navbar

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.style.position = 'fixed';
//     navbar.style.top = '0';
//     navbar.style.width = '100%';
//     navbar.style.paddingTop = '60px';
//   } else {
//     navbar.style.position = '';
//     navbar.top = '';
//     navbar.style.width = '';
//     navbar.style.paddingTop = '0px';  }
// }



